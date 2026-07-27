# DATA-03: Cross-Strait News Data Sources

> Research date: 2026-07-28  
> Purpose: Identify and verify RSS/API news sources for Taiwan Monitor panels  
> Status: Verified — all URLs tested with curl

---

## Executive Summary

- **14 verified RSS sources** across Chinese mainland, international, and think tank categories
- **Google News RSS is severely limited** — returns only 1 item per query regardless of parameters (effectively deprecated for programmatic use)
- **Direct RSS feeds** from major outlets are the most reliable approach
- **Update frequency**: Most news RSS feeds update hourly; think tank feeds update daily/weekly
- **China mainland media RSS is the weakest category** — most direct feeds are blocked (403) or outdated (2017-2018). Google News keyword-based RSS is the only viable path.

---

## 1. Chinese Mainland Media — Taiwan Coverage (大陆涉台新闻)

### 1.1 Google News RSS (Keyword-based)

The only reliable programmatic path for mainland China media coverage of Taiwan. All tested variants return valid RSS 2.0 XML but are **capped at 1 item**.

| Feed | URL | Items | Update Freq | Status |
|------|-----|-------|-------------|--------|
| 台湾 (broad, CN geo) | `https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE&hl=zh-CN&gl=CN&ceid=CN:zh-Hans` | 1 | ~hourly | ✅ |
| 台湾 + 新华社 | `https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE+site:xinhuanet.com&hl=zh-CN&gl=CN&ceid=CN:zh-Hans` | 1 | ~hourly | ✅ |
| 台湾 + 人民网 | `https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE+site:people.com.cn&hl=zh-CN&gl=CN&ceid=CN:zh-Hans` | 1 | ~hourly | ✅ |
| 台湾 + 环球网 | `https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE+site:huanqiu.com&hl=zh-CN&gl=CN&ceid=CN:zh-Hans` | 1 | ~hourly | ✅ |

**Critical limitation**: Google News RSS now returns only a single `<item>` per query. This means you cannot rely on it as a primary aggregator — it's useful only as a "latest headline" ticker, not a news feed. To get multiple items, you must poll frequently and accumulate results in a local DB.

### 1.2 Direct RSS from State Media

| Source | URL | Status | Notes |
|--------|-----|--------|-------|
| 新华网 (Xinhua) English | `http://www.xinhuanet.com/english/rss/worldrss.xml` | ⚠️ Stale | Returns valid XML but items from **2018** — effectively dead |
| 新华网 Taiwan section | `https://www.xinhuanet.com/taiwan/` | ✅ Web | HTML page accessible (200), no RSS endpoint found |
| 人民网 (People's Daily) | `http://www.people.com.cn/GB/paper464/` | ❌ 403 | Blocked by WAF (wswaf) from non-China IPs |
| 人民网 via Google | (see Google News RSS above) | ✅ | Accessible through Google News aggregation |
| China Daily RSS | `https://www.chinadaily.com.cn/rss/world_rss.xml` | ⚠️ Stale | Returns 100 items but from **2017** — feed abandoned |
| 环球时报 (Global Times) RSS | `https://www.globaltimes.cn/rss/index.xml` | ❌ 404 | RSS endpoint removed |
| 中国军网 (China Military) RSS | `http://eng.chinamil.com.cn/rss/english.xml` | ❌ 404 | Redirects to 404 page |

### 1.3 Recommended Strategy for Mainland China Coverage

**Primary approach**: Poll multiple Google News keyword RSS feeds on a short interval (every 15-30 min), accumulate items in a local database, and deduplicate.

```bash
# Recommended polling URLs (rotate to avoid single-feed limit)
https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE&hl=zh-CN&gl=CN&ceid=CN:zh-Hans
https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE+%E4%B8%A4%E5%B2%B8&hl=zh-CN&gl=CN&ceid=CN:zh-Hans
https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE+%E7%BB%9F%E4%B8%80&hl=zh-CN&gl=CN&ceid=CN:zh-Hans
```

**Backup approach**: Scrape xinhuanet.com/taiwan/ HTML page (returns 200 OK, has structured article listings).

---

## 2. International Media — Taiwan / Cross-Strait Coverage (国际涉台新闻)

### 2.1 Direct RSS Feeds (Working)

These are the most reliable sources — tested with curl, verified valid XML, and return multiple recent items.

| # | Source | RSS URL | Items | Update | Language |
|---|--------|---------|-------|--------|----------|
| 1 | **BBC Asia** | `https://feeds.bbci.co.uk/news/world/asia/rss.xml` | ~17 | Hourly | EN |
| 2 | **DW Asia** | `https://rss.dw.com/rdf/rss-en-asia` | varies | Hourly (`sy:updatePeriod=hourly`) | EN |
| 3 | **Al Jazeera** | `https://www.aljazeera.com/xml/rss/all.xml` | ~25 | Hourly | EN |
| 4 | **Nikkei Asia** | `https://asia.nikkei.com/rss/feed/nar` | ~50 | Hourly | EN |
| 5 | **South China Morning Post** | `https://www.scmp.com/rss/91/feed` | ~50 | Sub-hourly | EN |
| 6 | **The Diplomat** | `https://thediplomat.com/feed/` | ~96 | Daily (magazine) | EN |

**Note**: BBC, DW, Al Jazeera, Nikkei, and SCMP are broad-focus feeds (not Taiwan-only). Articles about Taiwan/China are interspersed with other Asia/world news. Client-side filtering by keyword is required.

### 2.2 Google News Keyword RSS (International)

Same 1-item limitation applies.

| Query | URL | Items | Status |
|-------|-----|-------|--------|
| Taiwan China (broad) | `https://news.google.com/rss/search?q=Taiwan+China&hl=en-US&gl=US&ceid=US:en` | 1 | ✅ |
| Cross-strait Taiwan China | `https://news.google.com/rss/search?q=cross-strait+Taiwan+China&hl=en-US&gl=US&ceid=US:en` | 1 | ✅ |
| Taiwan site:reuters.com | `https://news.google.com/rss/search?q=Taiwan+site:reuters.com&hl=en-US&gl=US&ceid=US:en` | 1 | ✅ |
| Taiwan site:bbc.com | (same pattern) | 1 | ✅ |
| Taiwan site:apnews.com | (same pattern) | 1 | ✅ |
| Taiwan site:nytimes.com | (same pattern) | 1 | ✅ |
| Taiwan site:theguardian.com | (same pattern) | 1 | ✅ |
| Taiwan site:aljazeera.com | (same pattern) | 1 | ✅ |
| Taiwan site:scmp.com | (same pattern) | 1 | ✅ |
| Taiwan site:thediplomat.com | (same pattern) | 1 | ✅ |
| Taiwan site:japantimes.co.jp | (same pattern) | 1 | ✅ |
| Taiwan site:dw.com | (same pattern) | 1 | ✅ |
| Taiwan site:cfr.org | (same pattern) | 1 | ✅ |

### 2.3 Missing / Not Working (Direct Feeds)

| Source | Attempted URL | Status |
|--------|---------------|--------|
| Reuters | `https://www.reutersagency.com/feed/...` | ❌ Returns HTML, no RSS endpoint |
| AP News | No direct RSS found | ❌ Use Google News proxy |
| NYT | Paywalled, no open RSS | ❌ Use Google News proxy |
| NHK World | `https://www3.nhk.or.jp/nhkworld/en/news/feeds/rss/` | ❌ 404 |
| Guardian | No Taiwan-specific RSS found | ❌ Use Google News proxy |

### 2.4 Recommended Strategy for International Coverage

**Tier 1 (high-volume direct feeds)**: BBC Asia, Al Jazeera, SCMP, Nikkei Asia — poll every 10-15 minutes, filter for Taiwan/China/Cross-Strait keywords.

**Tier 2 (specialist coverage)**: The Diplomat RSS + DW Asia RSS — poll daily/hourly for analysis pieces.

**Tier 3 (source-diversity fill)**: Poll Google News keyword RSS feeds on rotation to capture Reuters, AP, NYT, Guardian, Japan Times articles that don't have open RSS.

**Filtering keywords**: `Taiwan`, `Taipei`, `cross-strait`, `TSMC`, `South China Sea`, `PLA`, `Taiwan Strait`, `ROC`, `DPP`, `KMT`, `reunification`

---

## 3. Think Tanks & Research Organizations

### 3.1 Direct Sources

| Organization | RSS / Page URL | Status | Notes |
|-------------|----------------|--------|-------|
| **CSIS** | `https://www.csis.org/rss.xml` | ⚠️ Stale | Returns valid XML but last items from **2016** — feed abandoned |
| **CSIS Asia Program** | `https://www.csis.org/programs/asia-program` | ✅ Web | Web page accessible, manual checking needed |
| **Brookings** | `https://www.brookings.edu/feed/` | ❌ | Returns HTML, RSS broken |
| **Brookings China topic** | `https://www.brookings.edu/topics/china/` | ✅ Web | Web page accessible |
| **CFR (Council on Foreign Relations)** | `https://www.cfr.org/asia` | ✅ Web | Web page accessible (200), RSS 404 |
| **RAND Corporation** | `https://www.rand.org/topics/china.html` | ❌ 403 | Blocked |

### 3.2 Google News Aggregation for Think Tanks

Since most think tank direct RSS is broken, use Google News keyword searches:

```
# CSIS Taiwan
https://news.google.com/rss/search?q=Taiwan+site:csis.org&hl=en-US&gl=US&ceid=US:en

# Brookings Taiwan
https://news.google.com/rss/search?q=Taiwan+site:brookings.edu&hl=en-US&gl=US&ceid=US:en

# CFR Taiwan
https://news.google.com/rss/search?q=Taiwan+site:cfr.org&hl=en-US&gl=US&ceid=US:en

# Think tank cross-strait (broad catch)
https://news.google.com/rss/search?q=%22cross-strait%22+OR+%22Taiwan+Strait%22+think+tank&hl=en-US&gl=US&ceid=US:en
```

### 3.3 Key Think Tanks to Monitor (manual/web scraping)

| Think Tank | Web URL | Focus |
|-----------|---------|-------|
| CSIS China Power Project | `https://chinapower.csis.org/` | Military, economic, political |
| Brookings John L. Thornton China Center | `https://www.brookings.edu/center/john-l-thornton-china-center/` | China policy |
| CFR Asia | `https://www.cfr.org/asia` | Geopolitics, security |
| RAND China | `https://www.rand.org/topics/china.html` | Defense, tech, economics |
| AEI (American Enterprise Institute) | `https://www.aei.org/policy-areas/foreign-and-defense-policy/` | Defense, Taiwan policy |
| IISS (International Institute for Strategic Studies) | `https://www.iiss.org/topics/asia-pacific` | Military balance |
| Stimson Center | `https://www.stimson.org/regions/east-asia/` | Regional security |
| Lowy Institute | `https://www.lowyinstitute.org/topics/china` | Australia/Asia-Pacific |
| Carnegie Endowment | `https://carnegieendowment.org/programs/asia/` | Diplomacy, security |

---

## 4. Taiwan Domestic Media (for Cross-Strait Context)

| Source | RSS / URL | Status |
|--------|-----------|--------|
| Focus Taiwan (CNA English) | `https://focustaiwan.tw/rssfeeds/export?...` | ❌ Returns error/HTML |
| CNA (Central News Agency) Chinese | `https://www.cna.com.tw/rss/firstnews.xml` | ❌ 404 |
| Taipei Times | `https://www.taipeitimes.com/xml/taiwan.xml` | ❌ 404 |
| Taiwan News | `https://www.taiwannews.com.tw/en/rss.xml` | ⚠️ Returns HTML not RSS |
| RTI (Radio Taiwan International) | `https://en.rti.org.tw/rss/All` | ⚠️ Returns HTML |

**Recommendation**: Taiwan domestic sources via Google News proxy:

```
https://news.google.com/rss/search?q=Taiwan+site:focustaiwan.tw&hl=en-US&gl=US&ceid=US:en
https://news.google.com/rss/search?q=Taiwan+site:taipeitimes.com&hl=en-US&gl=US&ceid=US:en
https://news.google.com/rss/search?q=%E5%8F%B0%E7%81%A3+site:cna.com.tw&hl=zh-TW&gl=TW&ceid=TW:zh-Hant
```

---

## 5. Implementation Recommendations for Taiwan Monitor

### 5.1 Feed Polling Schedule

```
┌─────────────────────┬──────────────────┬─────────────────────┐
│ Source Category     │ Poll Interval    │ Strategy            │
├─────────────────────┼──────────────────┼─────────────────────┤
│ BBC Asia, SCMP,     │                  │ Direct RSS, filter  │
│ Al Jazeera, Nikkei  │ 10-15 minutes    │ by keyword          │
├─────────────────────┼──────────────────┼─────────────────────┤
│ DW Asia             │ 30 minutes       │ Direct RSS          │
├─────────────────────┼──────────────────┼─────────────────────┤
│ The Diplomat        │ 6 hours          │ Direct RSS (daily)  │
├─────────────────────┼──────────────────┼─────────────────────┤
│ Google News CN      │                  │ Multiple queries,   │
│ (大陆涉台)          │ 15 minutes       │ accumulate + dedup  │
├─────────────────────┼──────────────────┼─────────────────────┤
│ Google News Intl    │                  │ Per-source queries, │
│ (国际涉台)          │ 15 minutes       │ accumulate + dedup  │
├─────────────────────┼──────────────────┼─────────────────────┤
│ Think tanks         │ 24 hours         │ Manual/web scrape   │
└─────────────────────┴──────────────────┴─────────────────────┘
```

### 5.2 Key Pitfalls

1. **Google News RSS 1-item limit**: Do NOT rely on Google News as a primary feed. It's only useful as a ticker. Accumulate over time in a local DB.
2. **China media direct RSS is dead**: Xinhua and China Daily feeds are years out of date. Google News is the only automated path.
3. **Think tank RSS is abandoned**: CSIS feed stopped in 2016. Brookings feed returns HTML. Manual checking or web scraping needed.
4. **Taiwan domestic sources**: CNA/Focus Taiwan/Taipei Times do not expose working RSS — use Google News proxy.
5. **Geo-blocking**: people.com.cn blocks non-China IPs. xinhuanet.com/taiwan/ is accessible.
6. **Paywall/non-RSS**: Reuters, AP, NYT do not publish open RSS — Google News is the only proxy.

### 5.3 Curl Verification Template

```bash
# Verify a feed is alive with one command
curl -sL --max-time 15 "$URL" | grep -q '<?xml' && echo "✅ RSS OK" || echo "❌ NOT RSS"

# Count items
curl -sL --max-time 15 "$URL" | grep -c '<item>'

# Check freshness (lastBuildDate or first pubDate)
curl -sL --max-time 15 "$URL" | grep -oP '<lastBuildDate>[^<]+</lastBuildDate>' | head -1
```

### 5.4 Consolidated URL List for Implementation

```bash
# === Direct RSS (high priority) ===
BBC_ASIA="https://feeds.bbci.co.uk/news/world/asia/rss.xml"
DW_ASIA="https://rss.dw.com/rdf/rss-en-asia"
AL_JAZEERA="https://www.aljazeera.com/xml/rss/all.xml"
NIKKEI_ASIA="https://asia.nikkei.com/rss/feed/nar"
SCMP_NEWS="https://www.scmp.com/rss/91/feed"
DIPLOMAT="https://thediplomat.com/feed/"

# === Google News RSS (accumulate + dedup) ===
# Mainland China Taiwan coverage
GN_CN_TAIWAN="https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE&hl=zh-CN&gl=CN&ceid=CN:zh-Hans"
GN_CN_LIANGAN="https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE+%E4%B8%A4%E5%B2%B8&hl=zh-CN&gl=CN&ceid=CN:zh-Hans"
GN_CN_TONGYI="https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE+%E7%BB%9F%E4%B8%80&hl=zh-CN&gl=CN&ceid=CN:zh-Hans"

# International Taiwan coverage
GN_INTL_TAIWAN="https://news.google.com/rss/search?q=Taiwan+China&hl=en-US&gl=US&ceid=US:en"
GN_INTL_CROSS_STRAIT="https://news.google.com/rss/search?q=cross-strait+Taiwan+China&hl=en-US&gl=US&ceid=US:en"

# Per-outlet Google News proxying
GN_REUTERS="https://news.google.com/rss/search?q=Taiwan+site:reuters.com&hl=en-US&gl=US&ceid=US:en"
GN_AP="https://news.google.com/rss/search?q=Taiwan+site:apnews.com&hl=en-US&gl=US&ceid=US:en"
GN_BBC="https://news.google.com/rss/search?q=Taiwan+site:bbc.com&hl=en-US&gl=US&ceid=US:en"
GN_NYT="https://news.google.com/rss/search?q=Taiwan+China+site:nytimes.com&hl=en-US&gl=US&ceid=US:en"
GN_GUARDIAN="https://news.google.com/rss/search?q=Taiwan+China+site:theguardian.com&hl=en-US&gl=US&ceid=US:en"
GN_JAPANTIMES="https://news.google.com/rss/search?q=Taiwan+site:japantimes.co.jp&hl=en-US&gl=US&ceid=US:en"

# Taiwan domestic via Google News
GN_FOCUSTAIWAN="https://news.google.com/rss/search?q=Taiwan+site:focustaiwan.tw&hl=en-US&gl=US&ceid=US:en"

# Think tank via Google News
GN_CSIS="https://news.google.com/rss/search?q=Taiwan+site:csis.org&hl=en-US&gl=US&ceid=US:en"
GN_BROOKINGS="https://news.google.com/rss/search?q=Taiwan+site:brookings.edu&hl=en-US&gl=US&ceid=US:en"
GN_CFR="https://news.google.com/rss/search?q=Taiwan+site:cfr.org&hl=en-US&gl=US&ceid=US:en"
```

---

## 6. Test Results Log

All tests performed 2026-07-27 ~18:38-18:42 UTC via curl from a non-China IP.

```
✅ = Working RSS (valid XML + recent items)
⚠️ = Valid XML but stale content (>1 year)
❌ = Broken/blocked/non-RSS

✅ Google News "台湾" CN geo              → 1 item,  lastBuildDate: Mon, 27 Jul 2026 18:40 UTC
✅ Google News "Taiwan China" US geo      → 1 item,  lastBuildDate: Mon, 27 Jul 2026 18:40 UTC
✅ Google News "cross-strait Taiwan China" → 1 item, lastBuildDate: Mon, 27 Jul 2026 18:39 UTC
✅ BBC Asia RSS                           → 17 items, lastBuildDate: Mon, 27 Jul 2026 18:39 UTC
✅ DW Asia RDF                            → valid XML, updatePeriod: hourly
✅ Al Jazeera RSS                         → 25 items, lastBuildDate: Mon, 27 Jul 2026 18:01 UTC
✅ Nikkei Asia RSS                        → 50 items
✅ SCMP RSS                               → 50 items
✅ The Diplomat RSS                       → 96 items, pubDate: Mon, 27 Jul 2026
⚠️ Xinhua English RSS                     → valid XML, items from 2018
⚠️ China Daily RSS                        → valid XML, items from 2017
⚠️ CSIS RSS                               → valid XML, items from 2016
❌ people.com.cn direct                   → 403 Forbidden (WAF geo-block)
❌ Global Times RSS direct                → 404
❌ China Military RSS direct              → 404
❌ Brookings RSS                          → returns HTML, not RSS
❌ CFR RSS                                → 404
❌ RAND China                             → 403
❌ Focus Taiwan / CNA RSS                 → error page / 404
❌ Taipei Times RSS                       → 404
❌ Taiwan News RSS                        → returns HTML
❌ Reuters direct RSS                     → no RSS endpoint
❌ NHK World RSS                          → 404
```
