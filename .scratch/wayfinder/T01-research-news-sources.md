# T01: Chinese Mainland News RSS Feed Research

**Date:** 2026-07-27  
**Status:** Complete  

## Summary

Most major Chinese mainland news outlets have **discontinued or hidden their RSS feeds**. Only two sources have working native RSS: 人民日報 (stale since June 2025) and possibly 鳳凰網 (redirect only). Google News RSS is the most reliable way to monitor Chinese/Taiwan news programmatically.

---

## Results Table

### Chinese Mainland News Sources

| # | Source | RSS URL | Format | HTTP | Status | Notes |
|---|--------|---------|--------|------|--------|-------|
| 1 | 央視新聞 (CCTV) | — | — | — | ❌ FAIL | All RSS patterns return 403/404. No feed links found on homepage. |
| 2 | 新華社 (Xinhua) | — | — | — | ❌ FAIL | All RSS patterns return 403/404. Site blocks /rss/ directory. |
| 3 | 環球時報 Global Times | — | — | — | ❌ FAIL | All RSS patterns return 403/404. No feeds found. |
| 4 | 環球網 (Huanqiu) | — | — | — | ❌ FAIL | All RSS patterns return 404. No feeds found. |
| 5 | 人民日報 (People's Daily) | `http://www.people.com.cn/rss/politics.xml` | RSS 2.0 | 200 text/xml | ⚠️ STALE | Returns valid RSS with `<item>` entries, but last `pubDate` is **2025-06-05** — feed appears frozen. |
| 5b | 人民日報 (OPML dir) | `http://www.people.com.cn/rss/opml.xml` | OPML | 200 text/xml | ⚠️ OK | OPML directory of feeds (list of feed URLs, not news content). |
| 6 | 澎湃新聞 (The Paper) | — | — | — | ❌ FAIL | Site returns 403 for curl (blocks non-browser). No RSS patterns work. |
| 7 | 鳳凰網 (Ifeng) | `https://news.ifeng.com/rss/index.xml` | text/xml | 200 | ❌ FAIL | Returns HTTP 200 + `text/xml` but body is only `../feed.shtml` (a redirect path, not actual RSS). |
| 8 | 觀察者網 (Guancha) | — | — | — | ❌ FAIL | All RSS patterns return 404. No feeds found. |

### Google News RSS Feeds (All Working)

| # | Topic | RSS URL | Format | HTTP | Status |
|---|-------|---------|--------|------|--------|
| G1 | China (English) | `https://news.google.com/rss/search?q=China&hl=en-US&gl=US&ceid=US:en` | RSS 2.0 | 200 application/xml | ✅ OK |
| G2 | Taiwan (English) | `https://news.google.com/rss/search?q=Taiwan&hl=en-US&gl=US&ceid=US:en` | RSS 2.0 | 200 application/xml | ✅ OK |
| G3 | 中国 (zh-CN) | `https://news.google.com/rss/search?q=%E4%B8%AD%E5%9B%BD&hl=zh-CN&gl=CN&ceid=CN:zh-Hans` | RSS 2.0 | 200 application/xml | ✅ OK |
| G4 | 台湾 (zh-CN) | `https://news.google.com/rss/search?q=%E5%8F%B0%E6%B9%BE&hl=zh-CN&gl=CN&ceid=CN:zh-Hans` | RSS 2.0 | 200 application/xml | ✅ OK |

---

## Detailed Findings

### Working: People's Daily (人民日報)
- **Feed URL:** `http://www.people.com.cn/rss/politics.xml`
- **Content:** Valid RSS 2.0 feed with Chinese-language political news
- **Issue:** Feed appears **frozen** — latest entries dated 2025-06-05, suggesting the RSS pipeline is no longer maintained
- **Sample items:** Xi Jinping environmental quotes, political news cards
- **Verdict:** Usable for historical reference only; not reliable for current monitoring

### Working: Google News RSS
- **All four feeds** returned valid RSS 2.0 with fresh content (items from July 2026)
- Google News aggregates from many sources including Chinese outlets (新浪财经, 新华网, 人民网, 观察者网, 凤凰网)
- The Chinese-language feeds (`zh-CN`, `gl=CN`) provide China-perspective coverage
- Links are Google redirect links (`news.google.com/rss/articles/...`) that resolve to the original source
- **Verdict:** Best option for programmatic China/Taiwan news monitoring

### Failed Sources — Analysis
Most Chinese state and commercial media have removed RSS support in recent years:
- **CCTV, Xinhua, Global Times, Huanqiu** — actively block RSS paths (403 responses suggest intentional blocking)
- **The Paper (澎湃)** — blocks automated access entirely (403 on homepage)
- **Guancha (观察者)** — no RSS infrastructure at all (404)
- **Ifeng (鳳凰)** — has an RSS endpoint that returns a redirect, not actual content

---

## Recommendations

1. **Primary monitoring:** Use Google News RSS feeds (G1–G4) — they provide fresh, aggregated coverage of China/Taiwan topics in both English and Chinese
2. **Direct source fallback:** People's Daily `politics.xml` is the only direct RSS but is stale
3. **Alternative approaches to consider:**
   - Web scraping homepages of these sources (they all return HTML successfully)
   - Using news aggregator APIs (NewsAPI, GNews, etc.)
   - Monitoring WeChat public accounts or Toutiao for Chinese-language content
   - SCMP RSS (South China Morning Post) — Hong Kong-based but covers mainland China: `https://www.scmp.com/rss/91/feed`

---

## Methodology

- Each homepage was fetched with a Chrome 125 User-Agent and `Accept-Language: zh-CN`
- Common RSS URL patterns (`/rss`, `/rss.xml`, `/feed`, `/feed.xml`, `/rss/index.xml`) were tested
- Site-specific known RSS paths were also tried
- Google News RSS topic and search feeds were tested with both English and Chinese parameters
- All tests performed via `curl` from Windows 10 on 2026-07-27
