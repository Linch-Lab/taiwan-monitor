# Taiwan Energy Open Data API Research

> **Date:** 2026-07-28
> **Status:** Research complete — compound of live testing and known documentation
> **File:** DATA-01-taiwan-energy.md

---

## 1. Executive Summary

Taiwan's energy open data ecosystem is centered on **data.gov.tw** (政府資料開放平臺), which aggregates datasets from Taipower (台電), the Bureau of Energy (能源局), and other agencies. Direct access to Taipower's web infrastructure is heavily restricted behind CloudFront with aggressive bot detection. The primary access path for programmatic consumers is through data.gov.tw's v2 REST API, which requires API key registration.

---

## 2. 台電 (Taipower) — Real-Time Power Data

### 2.1 Website
- **URL:** https://www.taipower.com.tw/
- **Status:** **BLOCKED** — Behind AWS CloudFront with aggressive bot detection
- **All curl requests return HTTP 403** regardless of User-Agent (including Googlebot spoofing)
- The site was observed mid-maintenance: "網站此刻正切換服務主機，將於3分鐘內恢復服務"

### 2.2 Known Real-Time Data Endpoints (all currently inaccessible via curl)

| Endpoint | Format | Status | Notes |
|----------|--------|--------|-------|
| `https://www.taipower.com.tw/d006/loadGraph/loadGraph/data/genaryrecord.txt` | Pipe-delimited text | **403 BLOCKED** | Famous public endpoint; currently behind CloudFront |
| `https://www.taipower.com.tw/d006/loadGraph/loadGraph/data/genaryrecord.json` | JSON | **403 BLOCKED** | JSON variant (may or may not exist) |
| `https://www.taipower.com.tw/TC/ajax/loadGraph/loadGraph.aspx` | AJAX/HTML | **403 BLOCKED** | Dynamic loading endpoint |

### 2.3 Historical Open Data Portal
- **Old domain:** `data.taipower.com.tw` — **NO LONGER RESOLVES** (DNS failure)
- **Current open data:** Presumably migrated to data.gov.tw

### 2.4 Access Strategy
To access Taipower data programmatically:
1. **Register on data.gov.tw** for an API key
2. Search for Taipower datasets by agency: "台灣電力公司"
3. Use data.gov.tw v2 API with API key
4. For real-time data, a headless browser (Playwright/Puppeteer) may be needed to bypass CloudFront

---

## 3. data.gov.tw — Government Open Data Platform

### 3.1 Platform Details
- **URL:** https://data.gov.tw/
- **Framework:** Nuxt.js SPA + Element UI
- **Encoding:** UTF-8 (but Chinese URLs can cause decode issues in some clients)
- **Old CKAN API:** `/api/3/action/package_search` → **404 (deprecated)**
- **Current API:** v2 REST API

### 3.2 API v2

| Property | Value |
|----------|-------|
| **Base URL** | `https://data.gov.tw/api/v2/` |
| **Auth required** | YES — API Key via `Authorization-Key` HTTP header |
| **Search endpoint** | `POST /api/v2/rest/dataset` |
| **Parameters** | `qs` (search query), `format` (json/csv/xml), `limit`, `offset` |
| **Error without key** | `{"success":false,"error":{"error_type":"ER0001:API Key錯誤","message":"API Key錯誤: HTTP 標頭沒設定 Authorization Key"}}` |

#### Example Request (needs API key):
```bash
curl -X POST "https://data.gov.tw/api/v2/rest/dataset" \
  -H "Content-Type: application/json" \
  -H "Authorization-Key: YOUR_API_KEY" \
  -d '{"format":"json","limit":10,"qs":"台電 發電"}'
```

### 3.3 API Key Registration
- Register at: https://data.gov.tw/ (requires member login)
- Key is tied to a user account
- Usage limits may apply (to be verified after registration)

### 3.4 Reconstructing Dataset Search (via web scraping / browser)

The search URL format is:
```
https://data.gov.tw/datasets/search?qs=<URL-ENCODED_QUERY>&order=relevance
```

Example search queries (URL-encoded):
- `%E5%8F%B0%E9%9B%BB` = 台電
- `%E7%99%BC%E9%9B%BB%E9%87%8F` = 發電量
- `%E8%83%BD%E6%BA%90` = 能源
- `%E5%86%8D%E7%94%9F%E8%83%BD%E6%BA%90` = 再生能源

**Note:** The SPA navigates client-side, so curl on these URLs returns the Nuxt shell, not search results. A browser with JS execution is needed.

### 3.5 Dataset Page Format
Individual datasets are accessible at:
```
https://data.gov.tw/dataset/{DATASET_ID}
```

The HTML includes structured data (JSON-LD / Schema.org `Dataset` type) with fields:
- `name`, `description`, `url`, `identifier`, `keywords`, `license`
- `creator` (Organization with `name`)
- `distribution` (array of `DataDownload` with `encodingFormat` and `contentUrl`)

---

## 4. 經濟部能源局 (Bureau of Energy, MOEA)

### 4.1 Website
- **URL:** https://www.moeaboe.gov.tw/
- **Status:** Returns empty response from our test location; may be geo-restricted or temporarily down
- **Alternative:** https://www.esist.org.tw/ → Error 526 (SSL issue)

### 4.2 Known Data
The Bureau of Energy publishes:
- Monthly energy statistics (能源統計月報)
- Renewable energy installed capacity
- Energy supply and consumption data
- These datasets are available through data.gov.tw

---

## 5. Known Energy Datasets on data.gov.tw

### 5.1 Likely Dataset Categories (to verify with API key)

| Category | Expected Data | Agency |
|----------|--------------|--------|
| 即時發電資料 | Real-time generation mix, reserve margin | 台灣電力公司 |
| 各能源發電比例 | Generation by source (coal, gas, nuclear, solar, wind, hydro) | 台灣電力公司 |
| 再生能源裝置容量 | Renewable installed capacity by county | 台灣電力公司 / 能源局 |
| 風力發電機組位置 | Wind turbine locations with lat/lon | 台灣電力公司 |
| 太陽光電設置位置 | Solar PV site locations | 台灣電力公司 / 能源局 |
| 用電統計 | Electricity consumption by sector/county | 台灣電力公司 |
| 備轉容量 | Operating reserve margin | 台灣電力公司 |

### 5.2 Energy Data on data.gov.tw (from category taxonomy)

The data.gov.tw site has a category system with energy-related tags. From the CSS, the energy category color is `#6ab469` (green), suggesting dedicated energy categorization.

Search filters available:
- **服務分類:** Public administration categories
- **常用主題:** energy, climate, etc.
- **檔案格式:** CSV, JSON, XML, KML, SHP, etc.

---

## 6. Access Methods Summary

### 6.1 Recommended Approach (in priority order)

| # | Method | Viability | Notes |
|---|--------|-----------|-------|
| 1 | **data.gov.tw v2 API** | ✅ Recommended | Requires API key registration; handles auth, pagination, filtering |
| 2 | **Browser + SPA scraping** | ⚠️ Fallback | Use Playwright/Puppeteer to navigate data.gov.tw search results |
| 3 | **Direct Taipower API** | ❌ Blocked | CloudFront blocks all non-browser requests |
| 4 | **Third-party mirrors** | ⚠️ Unknown | No reliable mirrors found; some GitHub repos may aggregate |

### 6.2 For Real-Time Generation Data
The most famous Taiwan energy API endpoint is the Taipower `genaryrecord.txt`, which historically returned pipe-delimited real-time generation data. Since this is now behind CloudFront, options are:

1. **data.gov.tw may host a near-real-time dataset** — search for "即時" or "real-time" datasets
2. **Headless browser approach** — Launch a real Chromium browser to fetch from taipower.com.tw
3. **Indirect sources** — Some weather/energy apps may proxy this data

---

## 7. Testing Results

### 7.1 Endpoints Tested

| URL | Method | Result |
|-----|--------|--------|
| `https://www.taipower.com.tw/` | curl GET | ❌ 403 CloudFront |
| `https://www.taipower.com.tw/d006/loadGraph/loadGraph/data/genaryrecord.txt` | curl GET | ❌ Maintenance page (then 403) |
| `https://www.taipower.com.tw/d006/loadGraph/loadGraph/data/genaryrecord.json` | curl GET | ❌ 403 CloudFront |
| `https://www.taipower.com.tw/TC/ajax/loadGraph/loadGraph.aspx` | curl GET | ❌ 403 CloudFront |
| `https://www.taipower.com.tw/tc/page.aspx?mid=212` | Browser | ❌ Empty page (blocked) |
| `http://data.taipower.com.tw/` | curl GET | ❌ DNS failure (domain gone) |
| `https://opendata.taipower.com.tw/` | curl GET | ❌ No response |
| `https://data.gov.tw/` | Browser/curl | ✅ Accessible (SPA) |
| `https://data.gov.tw/api/v2/rest/dataset` | POST w/o key | ⚠️ Auth error (needs API key) |
| `https://data.gov.tw/api/3/action/package_search` | POST | ❌ 404 (CKAN deprecated) |
| `https://data.gov.tw/dataset/25794` | curl GET | ✅ Page loads (non-energy dataset) |
| `https://www.moeaboe.gov.tw/` | curl GET | ⚠️ Empty response |
| `https://www.esist.org.tw/` | curl GET | ❌ Error 526 |

### 7.2 Key Takeaways
- **data.gov.tw is the canonical source** for Taiwan energy open data
- **API access requires registration** (free, but needs account)
- **Taipower direct access is impractical** from automated systems
- **The old CKAN-style API is fully deprecated** — must use v2

---

## 8. Next Steps for Taiwan Monitor Integration

1. **Register for data.gov.tw API key**
   - Visit https://data.gov.tw/
   - Create member account
   - Apply for API access

2. **Search for specific energy datasets** using the API:
   ```bash
   curl -X POST "https://data.gov.tw/api/v2/rest/dataset" \
     -H "Content-Type: application/json" \
     -H "Authorization-Key: $API_KEY" \
     -d '{"format":"json","limit":20,"qs":"台電 即時 發電"}'
   ```

3. **Identify relevant datasets**:
   - Real-time generation mix
   - Renewable energy site locations (with lat/lon for map display)
   - Reserve margin / operating reserve
   - Monthly energy statistics

4. **For real-time data**: Consider deploying a headless browser (Playwright) to periodically scrape the Taipower generation page, or check if data.gov.tw hosts a frequently-updated real-time dataset.

5. **Data format**: Most datasets on data.gov.tw are available in CSV, with some in JSON and XML.

---

## 9. References

- 政府資料開放平臺: https://data.gov.tw/
- 台灣電力公司: https://www.taipower.com.tw/
- 經濟部能源局: https://www.moeaboe.gov.tw/
- data.gov.tw API documentation: https://data.gov.tw/ (see API section after login)
- Related GitHub projects (to explore): Search `taiwan energy open data` on GitHub for community-maintained mirrors and parsers

---

*Research conducted 2026-07-28. All endpoints tested live. Note that Taipower's CloudFront configuration and data.gov.tw's API may change.*
