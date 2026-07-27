# ARCHITECTURE 02 — News Data Pipeline

> **Source codebase:** `/tmp/worldmonitor` (WorldMonitor original)  
> **Researched:** 2026-07-28  
> **Topic:** How news flows from RSS feeds → `data-loader.ts` → `NewsPanel` → display

---

## Overview

WorldMonitor's news pipeline is a **two-tier architecture**: a server-side digest aggregator (Vercel Edge Functions + Railway relay) that fetches, parses, classifies, and scores RSS feeds into a batched JSON response, and a client-side data loader that merges the digest with per-feed fallback fetching, renders items in `NewsPanel`, and asynchronously upgrades them with ML-based clustering.

```
┌─────────────────────────────────────────────────────────────────┐
│ RSS Sources                                                      │
│  BBC, Reuters, CNN, NPR, DW, Al Jazeera, Hacker News, etc.      │
│  (~200+ feeds across 5 variants × 30+ categories)                │
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTP fetch (direct → relay fallback)
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ SERVER: list-feed-digest.ts                                      │
│  buildDigest() → fetchAndParseRss() → parseRssXml()             │
│    → classifyByKeyword() → assignStoryIdentity()                 │
│    → enrichWithAiCache() → computeImportanceScore()              │
│    → writeStoryTracking() → serialize Proto response             │
│                                                                  │
│ Redis: rss:feed:v8:* (1h) │ news:digest:v1:* (15min)            │
│        story:track:v1:* (7d) │ story:sources/peak/alias          │
└───────────────────────────┬─────────────────────────────────────┘
                            │ GET /api/news/v1/list-feed-digest
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ CLIENT: data-loader.ts                                          │
│  tryFetchDigest() → loadNews() → runNewsLoadPass()              │
│    → loadNewsCategory() per category                             │
│                                                                  │
│  Digest branch: protoItemToNewsItem() → renderNewsForCategory()  │
│  Fallback branch: client-side fetchCategoryFeeds() (per-feed)    │
│  Stale fallback: getStaleNewsItems() (last-known-good)           │
└───────────────────────────┬─────────────────────────────────────┘
                            │ panel.renderNews(items)
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│ NewsPanel.ts                                                     │
│  renderNews() → renderFlat() (immediate)                         │
│    → renderClustersAsync() → clusterNews() + enrichWithVelocityML│
│    → renderClusters() with velocity, sentiment, risk, assets     │
└─────────────────────────────────────────────────────────────────┘
```

---

## 1. RSS Feed Sources

### Definition: `server/worldmonitor/news/v1/_feeds.ts`

All RSS feed URLs are defined in `VARIANT_FEEDS`, a `Record<string, Record<string, ServerFeed[]>>` (line 18):

```typescript
export const VARIANT_FEEDS: Record<string, Record<string, ServerFeed[]>> = {
  full: { ... },
  tech: { ... },
  finance: { ... },
  commodity: { ... },
  happy: { ... },
};
```

Each feed entry is `{ name: string, url: string, lang?: string }` (lines 1–5).

**Variant: `full`** (lines 19–177) — the most comprehensive, organized into categories:
| Category | Example Feeds | Line |
|----------|--------------|------|
| `politics` | BBC World, Guardian World, AP News, Reuters World, CNN World, Trump Truth Social | 20–27 |
| `us` | Reuters US, NPR, PBS, ABC, CBS, NBC, WSJ, Politico, The Hill, Axios | 28–39 |
| `europe` | France 24, EuroNews, Le Monde, DW, Tagesschau (de), ANSA (it), NOS (nl), SVT (sv), Hungarian/HR feeds | 40–63 |
| `middleeast` | BBC ME, Al Jazeera, Guardian ME, Oman Observer, BBC Persian (fa), The National | 64–71 |
| `tech` | Hacker News, Ars Technica, The Verge, MIT Tech Review | 72–77 |
| `ai` | AI News (Google News), VentureBeat AI, The Verge AI, ArXiv AI | 78–84 |
| `finance` | CNBC, MarketWatch, Yahoo Finance, Financial Times, Reuters Business | 85–91 |
| `gov` | White House, State Dept, Pentagon, Federal Reserve, SEC, UN, CISA, Treasury, DOJ | 92–120 |
| `africa` | BBC Africa, News24, Africanews, Jeune Afrique (fr), Premium Times | 121–127 |
| `latam` | BBC LatAm, Guardian Americas, Primicias (es), Infobae, El Universo (es), Clarín (es), InSight Crime | 128–137 |
| `asia` | BBC Asia, The Diplomat, Nikkei Asia, CNA, NDTV, SCMP, The Hindu, Xinhua, MIIT (zh), MOFCOM (zh), Hindi feeds | 137–154 |
| `energy` | Oil & Gas GNews, Reuters Energy, Nuclear Energy GNews | 155–159 |
| `thinktanks` | Foreign Policy, Atlantic Council, Foreign Affairs, War on the Rocks, CSIS | 160–166 |
| `crisis` | CrisisWatch, IAEA, WHO | 167–171 |
| `layoffs` | Layoffs.fyi GNews, TechCrunch Layoffs, Layoffs GNews | 172–176 |

**Variant: `tech`** (lines 179–270) — categories: tech, ai, startups, vcblogs, regionalStartups, unicorns, accelerators, security, policy, github, funding, cloud, layoffs, finance, dev, ipo, producthunt, hardware, outages

**Variant: `finance`** (lines 272–362) — categories: markets, forex, bonds, commodities, crypto, centralbanks, economic, ipo, derivatives, fintech, fin-regulation, institutional, analysis, gccNews

**Variant: `commodity`** (lines 365–459) — categories: commodity-news, gold-silver, energy, mining-news, critical-minerals, base-metals, mining-companies, supply-chain, commodity-regulation, markets, finance

**Variant: `happy`** (lines 461–486) — categories: positive, science, nature, inspiring, community

**Google News feeds** are constructed via the `gn()` helper (lines 7–8):
```typescript
const gn = (q: string) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-US&gl=US&ceid=US:en`;
```

**Locale-aware feeds** use `gnLocale()` (lines 15–16) for non-English regional editions (e.g., Chinese `miit.gov.cn`, Hungarian `hirado.hu`).

**Intelligence sources** (`INTEL_SOURCES`, lines 489–514) — 24 defense/intel feeds (Defense One, The War Zone, Oryx OSINT, Bellingcat, OCCRP, etc.) only loaded for `full` variant.

---

## 2. Server-Side News Pipeline

### 2.1 Entry Point: `list-feed-digest.ts`

#### `listFeedDigest()` — lines 1040–1081

```typescript
export async function listFeedDigest(
  ctx: ServerContext,
  req: ListFeedDigestRequest,
): Promise<ListFeedDigestResponse>
```

**Flow:**
1. Validates `variant` against `VALID_VARIANTS` = `{full, tech, finance, happy, commodity}` (line 39)
2. Builds cache key: `news:digest:v1:${variant}:${lang}` (line 1047)
3. Calls `cachedFetchJson()` with:
   - Positive TTL: **900s** (15 min)
   - Negative TTL: **120s** (2 min)
   - Fetcher: `buildDigest(variant, lang)` wrapped in null-return-on-empty
   - Timeout: `DIGEST_RESPONSE_TIMEOUT_MS` = 14,000ms (line 47)
4. On null: returns in-memory `fallbackDigestCache` or empty response (line 1071)
5. On success: caches in `fallbackDigestCache`, returns fresh digest (lines 1074–1076)

#### `buildDigest()` — lines 1251–1560

This is the core of the pipeline. Steps:

**a) Feed collection** (lines 1263–1277):
- Iterates `VARIANT_FEEDS[variant]`
- Filters by language (`!f.lang || f.lang === lang`)
- For `full` variant: appends `INTEL_SOURCES` as category `'intel'`

**b) Batch parallel fetching** (lines 1284–1323):
- Batches of `BATCH_CONCURRENCY` = 20 (line 51)
- Each batch: `Promise.allSettled` across `fetchAndParseRss()` calls
- Tracks completed feeds for timeout detection
- Classifies feed status: `'all-undated'`, `'empty'`, `'partial-undated'`, or `'timeout'`

**c) Freshness floor** (lines 1331–1349):
- Drops items older than `NEWS_MAX_AGE_HOURS` (default **96h**)
- Configurable via env variable `NEWS_MAX_AGE_HOURS` (line 72–76)

**d) Story identity** (lines 1365–1402):
- `assignStoryIdentity()` clusters items with similar titles (fuzzy matching: edit-tolerant)
- Each cluster shares a canonical `titleHash` + corroboration count
- Alias rows (`story:alias:v1`) enable cross-cycle canonical adoption

**e) AI classification enrichment** (line 1418):
- `enrichWithAiCache()` runs LLM-based reclassification from Redis cache
- Capped at `+2` threat level tiers above keyword classification to prevent contamination (lines 112–133)

**f) Importance scoring** (lines 1427–1457):
- Per-item `computeImportanceScore()` with weight components (lines 141–146):
  - **Severity:** 0.55 (from threat level)
  - **Source tier:** 0.20 (Tier 1=100, Tier 2=75, Tier 3=50, unknown=25)
  - **Corroboration:** 0.15 (up to 5 sources × 20)
  - **Recency:** 0.10 (linear decay over 24h)
- Plus diplomacy flashpoint boost (+18) and entity corroboration score

**g) Per-category truncation** (lines 1470–1477):
- Sorted by importanceScore desc, then pubDate desc
- Truncated to `MAX_ITEMS_PER_CATEGORY` = 20

**h) Story tracking writes** (lines 1483–1494):
- Writes to `story:track:v1:${titleHash}` (HSET with mentionCount, score, title, link, severity, etc.)
- Writes to `story:sources:v1:${titleHash}` (SADD source names)
- Writes to `story:peak:v1:${titleHash}` (ZADD peak score)
- Writes to `digest:accumulator:v1:${variant}:${lang}` (ZADD accumulation)

**i) Coverage ledger** (lines 1530–1550):
- Writes `news:coverage-ledger:v1:${variant}:${lang}` with drop counts per gate

#### `fetchAndParseRss()` — lines 407–517

Per-feed fetch with caching:
1. Checks Redis cache key: `rss:feed:v8:${variant}:${feed.url}` (line 435)
2. On miss: direct HTTP fetch → Railway relay fallback (avoids Vercel IP blocks)
3. Parses XML via `parseRssXml()` (line 507)
4. Caches successful parse: **3600s** (1h); empty parse: **300s** (5min)
5. Sniffs response body for XML shape (rejects HTML interstitials like CF challenge pages) — `looksLikeRssXml()` (lines 352–356)

#### `parseRssXml()` — lines 540–650

- Matches `<item>` (RSS 2.0) or `<entry>` (Atom) blocks
- Extracts title, link, pubDate (with dialect-specific date-tag priority)
- **Strict date gating** (lines 574–591): items without parseable pubDate are dropped
- Per-item: `classifyByKeyword()` → initial threat classification
- Stamps: `isOpinion`, `isFeelGood`, `isEphemeralLiveCoverage`
- Extracts tickers from title + description
- Caps at `ITEMS_PER_FEED` = 5 items per feed (line 41)

---

### 2.2 News Classification: `_classifier.ts`

#### `classifyByKeyword()` — lines 346–400

Hierarchical keyword-based classifier with 5 threat levels:

| Level    | Confidence | Example Keywords | Line |
|----------|-----------|-----------------|------|
| `critical` | 0.9 | "nuclear strike", "invasion", "coup", "genocide", "martial law" | 32–53 |
| `high`    | 0.8 | "war", "airstrike", "missile launch", "cyber attack", "earthquake" | 55–80 |
| `medium`  | 0.7 | "protest", "riot", "trade war", "recession", "outbreak", "blackout" | 82–117 |
| `low`     | 0.6 | "election", "summit", "climate change", "interest rate", "GDP" | 119–147 |
| `info`    | 0.3 | fallback / exclusion match | 399 |

**Tech variant** has additional keyword lists (lines 148–183): `TECH_HIGH_KEYWORDS`, `TECH_MEDIUM_KEYWORDS`, `TECH_LOW_KEYWORDS`.

**Exclusion list** (lines 185–190): topics like "protein", "dating", "recipe", "sports", "celebrity", "concert" — matched items are forced to `info`/`general`.

**Historical retrospective detection** (`hasHistoricalMarker()`, lines 326–344):
- Detects patterns like "Science history:", "Throwback Thursday:", "On this day in 1986"
- Past dates (≥2 years old) in headlines
- CRITICAL/HIGH keyword matches in retrospective headlines are downgraded to `info` to prevent anniversary articles from being treated as current crises

#### Classification Result Interface (lines 16–28):
```typescript
interface ClassificationResult {
  level: ThreatLevel;       // critical | high | medium | low | info
  category: EventCategory;  // conflict | protest | disaster | diplomatic | economic | cyber | ...
  confidence: number;       // 0.0–1.0
  source: 'keyword' | 'keyword-historical-downgrade';
}
```

---

### 2.3 API Handler: `handler.ts`

```typescript
// server/worldmonitor/news/v1/handler.ts (lines 1–11)
export const newsHandler: NewsServiceHandler = {
  summarizeArticle,        // LLM-powered headline summarization
  getSummarizeArticleCache, // Cache retrieval helper
  listFeedDigest,          // Main digest endpoint
};
```

The handler is registered in the server gateway and maps to the `/api/news/v1/list-feed-digest` route (verified by `server/gateway.ts` importing the handler).

---

## 3. News Categories Assignment

Categories are assigned through a **multi-stage classification pipeline**:

### Stage 1: Feed-level category (structural)
Each feed belongs to a predefined category in `VARIANT_FEEDS` — e.g., BBC World → `politics`, Hacker News → `tech`, CNBC → `finance`. This is the primary grouping for the UI panel.

### Stage 2: Keyword event category (per-item)
`classifyByKeyword()` assigns an `EventCategory` based on matched keyword (lines 346–400):
- `conflict`, `protest`, `disaster`, `diplomatic`, `economic`, `terrorism`, `cyber`, `health`, `environmental`, `military`, `crime`, `infrastructure`, `tech`, `general`

### Stage 3: LLM classification cache (server-side)
`enrichWithAiCache()` (line 1418) may override the keyword level/category from a Redis-backed LLM classification cache, capped at +2 threat tiers above the keyword result (lines 127–133).

### Stage 4: Diplomacy severity promotion
`promoteDiplomacySeverity()` (lines 259–274) upgrades `medium`/`low` items to `high` when the title contains both a diplomacy keyword AND a flashpoint keyword, AND there are ≥3 Tier-1/2 source corroborating entities.

### Stage 5: Client-side reclassification (skipped for digest)
For per-feed fallback items, the client runs `classifyEvent()` (ML/LLM). For digest items, this is skipped because the server already ran `enrichWithAiCache()` — line 1253 comment in `data-loader.ts`.

---

## 4. Redis Caching Layer

### 4.1 Redis Client: `server/_shared/redis.ts`

Uses **Upstash Redis** via REST API (not ioredis), configured via environment variables:
- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`
- `REDIS_OP_TIMEOUT_MS` (default 1500ms, line 26)
- `REDIS_PIPELINE_TIMEOUT_MS` (default 5000ms, line 27)

**Key prefixing** (lines 41–53): Vercel preview/development deployments use `env:sha:` prefix to avoid key collisions.

#### Core Functions:

| Function | Purpose | Lines |
|----------|---------|-------|
| `getCachedJson(key)` | Read + JSON parse + envelope unwrap | 180–185 |
| `setCachedJson(key, value, ttl)` | Atomic SET with EX | 187–229 |
| `getCachedJsonBatch(keys)` | Pipeline-based batch GET | 291–352 |
| `runRedisPipeline(commands)` | Generic pipeline execution | 363–390 |
| `cachedFetchJson(key, ttl, fetcher)` | Cache-aside + in-flight coalescing | 514–573 |
| `cachedFetchJsonWithMeta(key, ttl, fetcher)` | Same + source/duration telemetry | 614–698 |

#### `cachedFetchJson()` — the key workhorse (lines 514–573):
1. Check Redis cache → hit returns immediately
2. Check local positive fallback (in-memory, for Redis outages)
3. In-flight coalescing: concurrent callers share a single fetcher promise (`inflight` Map, line 435)
4. On fetch success: write to Redis (positive TTL)
5. On fetch null: write `NEG_SENTINEL` (negative TTL, prevents stampede)
6. On Redis write failure: arm local positive fallback
7. Fetcher timeout safety net: 30s default, overridable via `opts.timeoutMs` (lines 480–490)

### 4.2 News-Specific Cache Keys

Defined in `server/_shared/cache-keys.ts`:

| Key Pattern | Purpose | TTL | Line |
|------------|---------|-----|------|
| `rss:feed:v8:${variant}:${url}` | Per-feed parsed RSS cache | 1h healthy / 5min empty | list-feed-digest.ts:404–405 |
| `news:digest:v1:${variant}:${lang}` | Aggregated digest response | 15min (900s) | list-feed-digest.ts:1047 |
| `story:track:v1:${titleHash}` | Story metadata (HSET) | 7 days | cache-keys.ts:15,59 |
| `story:sources:v1:${titleHash}` | Distinct source names (SET) | 7 days | cache-keys.ts:17 |
| `story:peak:v1:${titleHash}` | Peak importance score (ZSORT) | 7 days | cache-keys.ts:19 |
| `story:alias:v1:${titleHash}` | Member hash → canonical hash | 7 days | cache-keys.ts:52 |
| `digest:accumulator:v1:${variant}:${lang}` | Digest accumulator (ZSORT) | 48h | cache-keys.ts:21,60 |
| `news:coverage-ledger:v1:${variant}:${lang}` | Drop-count ledger | 2h (7200s) | list-feed-digest.ts:1547 |

---

## 5. Frontend: Data Loading → Display

### 5.1 API Calls: `data-loader.ts`

#### `tryFetchDigest()` — line 617

```typescript
const resp = await publicRpcFetch(
  toApiUrl(`/api/news/v1/list-feed-digest?variant=${SITE_VARIANT}&lang=${getCurrentLanguage()}`),
  { signal: AbortSignal.timeout(this.digestRequestTimeoutMs) }, // 8000ms
);
```

- Circuit breaker: after 2 consecutive failures, enters OPEN state for 5 minutes (lines 405–408, 620–651)
- Persists last-good digest to `digest:last-good` (IndexedDB) for cold-start resilience

#### `loadNews()` — line 1500

Orchestrator that:
1. Fires `tryFetchDigest()` early (line 1508)
2. Resolves active categories via `resolveNewsCategories()` (line 1519)
3. Calls `runNewsLoadPass()` from `news-loader-sequencing.ts` (line 1527)
4. Waits for digest with `digestFirstPaintGraceMs` = 1500ms grace period

#### `loadNewsCategory()` — line 1220

Three-branch strategy:

**Branch 1 — Digest available** (lines 1243–1276):
- Maps proto items via `protoItemToNewsItem()` → filters by enabled source names
- Skips client-side AI reclassification (server already did it)
- Renders immediately via `renderNewsForCategory()`

**Branch 2 — Stale fallback** (lines 1319–1328):
- Serves last-known-good items from `ctx.newsByCategory`
- Only for preset (non-custom) categories

**Branch 3 — Per-feed fallback** (lines 1330–1398):
- Client-side RSS fetching via `fetchCategoryFeeds()` from `@/services/rss`
- Capped at 3 feeds for preset categories (`perFeedFallbackCategoryFeedLimit`, line 410)
- Progressive rendering: batched partial results rendered every 100ms
- Falls through to empty panel with error on total failure

#### `protoItemToNewsItem()` — line 202

Converts server protobuf `NewsItem` to client `NewsItem` type:
```typescript
function protoItemToNewsItem(p: ProtoNewsItem): NewsItem {
  return {
    source: p.source,
    title: p.title,
    link: p.link,
    pubDate: new Date(p.publishedAt),
    isAlert: p.isAlert,
    importanceScore: p.importanceScore,
    corroborationCount: p.corroborationCount,
    storyMeta: { firstSeen, mentionCount, sourceCount, phase },
    threat: { level, category, confidence, source },
    snippet: p.snippet,    // RSS description (U3)
    tickers: p.tickers,    // Stock tickers (#4922a)
    // ... location fields when present
  };
}
```

#### `renderNewsForCategory()` — line 1194

```typescript
renderNewsForCategory(category: string, items: NewsItem[]): void {
  this.ctx.newsByCategory[category] = items;
  const panel = this.ctx.newsPanels[category];
  const filteredItems = this.filterItemsByTimeRange(items);
  panel.renderNews(filteredItems);
}
```

### 5.2 NewsPanel Display: `NewsPanel.ts`

#### `renderNews()` — line 410

Two-phase rendering:
1. **Immediate flat list:** `renderFlat()` — sorted by relevance (importanceScore desc) or newest (pubDate desc); shows 5 items, sets headlines for summarization
2. **Async cluster upgrade:** `renderClustersAsync()` → `analysisWorker.clusterNews()` → `enrichWithVelocityML()` → `renderClusters()`

#### `renderClusterHtml()` — line 635

Each cluster card renders:
- Source count badge (multi-source corroboration)
- Velocity badge (sources/hour, trend direction)
- Sentiment icon (⚠/✓)
- Language badge
- Source provenance (tier badge, risk badge)
- "Also reported by" cross-source list
- Related assets (military bases, infrastructure, etc. within range)
- Category tag (conflict, diplomatic, economic, etc.) with color coding
- Risk score badge (0–100)
- NEW tag for unseen items

#### Additional Features:
- **Summarize button** (line 203): LLM-powered panel-level headline summarization, cached in localStorage with 10-min TTL
- **Translate button** (line 292): per-item title translation via `translateText()`
- **Sort toggle** (line 107): relevance ↔ newest
- **Virtual scrolling** (line 22–23): `WindowedList` activates at ≥15 items
- **Deviation indicator** (line 388): z-score-based anomaly detection for news volume

---

## 6. Complete End-to-End Flow

```
1. User visits worldmonitor.com
2. data-loader.loadNews() fires
3. tryFetchDigest() → GET /api/news/v1/list-feed-digest?variant=full&lang=en
4. Server: listFeedDigest() checks Redis cache news:digest:v1:full:en
   ├── Cache HIT → return stored digest (900s TTL)
   └── Cache MISS → buildDigest('full', 'en'):
       ├── For each category × feed: 
       │   ├── Check Redis rss:feed:v8:full:<url>
       │   ├── On miss: HTTP GET <feed_url> (Chrome UA)
       │   │   ├── Direct fetch → if null: Railway relay fallback
       │   │   └── parseRssXml(): extract title/link/pubDate/description
       │   ├── classifyByKeyword(title): critical/high/medium/low/info
       │   ├── Stamp: isOpinion, isFeelGood, isEphemeralLiveCoverage
       │   └── Cache result (1h)
       ├── Drop items >96h old (freshness floor)
       ├── assignStoryIdentity(): fuzzy title clustering
       ├── enrichWithAiCache(): LLM reclassification from Redis cache
       ├── computeImportanceScore(): severity×0.55 + tier×0.20 + corrob×0.15 + recency×0.10
       ├── Sort + truncate to 20 per category
       ├── writeStoryTracking(): Redis HSET/SADD/ZADD
       └── Return { categories, feedStatuses, generatedAt }

5. Client receives digest → protoItemToNewsItem() per item → renderNewsForCategory()
6. NewsPanel.renderNews():
   ├── renderFlat(): instant HTML render
   └── renderClustersAsync(): background ML clustering → enriched cluster cards

7. If digest unavailable (timeout/error):
   ├── Serve stale last-known-good (IndexedDB)
   └── Per-feed fallback: client-side RSS fetch, capped 3 feeds, progressive render
```

---

## Key Files Referenced

| File | Role | Lines |
|------|------|-------|
| `server/worldmonitor/news/v1/handler.ts` | RPC handler registration | 11 |
| `server/worldmonitor/news/v1/list-feed-digest.ts` | Core digest builder (buildDigest, fetchAndParseRss, parseRssXml) | 1586 |
| `server/worldmonitor/news/v1/_feeds.ts` | RSS feed URL definitions (VARIANT_FEEDS, INTEL_SOURCES) | 514 |
| `server/worldmonitor/news/v1/_classifier.ts` | Keyword threat classifier (classifyByKeyword, hasHistoricalMarker) | 400 |
| `server/worldmonitor/news/v1/_shared.ts` | Shared constants, cache keys, LLM prompt builder | 160 |
| `server/_shared/redis.ts` | Redis REST client (cachedFetchJson, getCachedJson, runRedisPipeline) | 810 |
| `server/_shared/cache-keys.ts` | Story tracking key definitions (story:track, story:sources, etc.) | 171 |
| `server/worldmonitor/news/v1/dedup.mjs` | Headline deduplication, story identity assignment | 6973 bytes |
| `src/app/data-loader.ts` | Client data loading (tryFetchDigest, loadNews, loadNewsCategory) | 4062 |
| `src/app/news-loader-sequencing.ts` | Graceful degradation orchestration (runNewsLoadPass) | 184 |
| `src/components/NewsPanel.ts` | News panel rendering (renderNews, renderFlat, renderClusterHtml) | 895 |
