# T03: Taiwan Stock Market API Research

**Date:** 2026-07-27  
**Status:** Completed  
**Summary:** Investigated 7 free/paid Taiwan stock market data sources. Strongest picks: TWSE MIS (real-time, no auth), yfinance/Yahoo Finance (free, Python), and FinMind (comprehensive EOD data).

---

## 1. TWSE (台灣證券交易所) Official OpenAPI

### openapi.twse.com.tw — Free REST API (EOD Data)

| Item | Detail |
|------|--------|
| **URL** | `https://openapi.twse.com.tw/v1/` |
| **Swagger Doc** | `https://openapi.twse.com.tw/v1/swagger.json` |
| **Auth** | **None** — completely open, no API key |
| **Format** | JSON (also supports CSV via `Accept` header) |
| **Update** | **End-of-day** only (snapshot after market close ~13:45 CST) |
| **Rate Limit** | Unknown (generous — no throttling observed) |
| **Endpoints** | 143 total across 7 categories |

**Key Endpoints (verified working):**

| Endpoint | Description | Example |
|----------|-------------|---------|
| `/exchangeReport/FMTQIK` | Daily market stats incl. **TAIEX weighted index** | `curl https://openapi.twse.com.tw/v1/exchangeReport/FMTQIK` |
| `/exchangeReport/MI_INDEX` | **All indices** (200+ indices: sector, thematic, leverage) | `curl https://openapi.twse.com.tw/v1/exchangeReport/MI_INDEX` |
| `/exchangeReport/STOCK_DAY_ALL` | All listed stocks — daily OHLCV | `curl https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_ALL` |
| `/exchangeReport/STOCK_DAY_AVG_ALL` | Closing price + monthly average | — |
| `/exchangeReport/BWIBBU_ALL` | PE ratio, dividend yield, P/B per stock | — |
| `/exchangeReport/MI_MARGN` | Margin trading balances | — |
| `/indicesReport/MI_5MINS_HIST` | Weighted index historical (5-min intervals) | — |
| `/indicesReport/TAI50I` | Taiwan 50 index history | — |

**Sample FMTQIK (TAIEX) output:**
```json
{
  "Date": "1150724", "TAIEX": "43654.84", "Change": "-1195.97",
  "TradeVolume": "9573393565", "TradeValue": "827129512226"
}
```

**Sample MI_INDEX (all indices) output — 200+ indices including:**
- `發行量加權股價指數` (TAIEX weighted)
- `寶島股價指數` (All-market)
- `半導體類指數`, `電子工業類指數`, `金融保險類指數`, etc.
- `臺灣50指數`, `臺灣中型100指數`
- `臺灣高股息指數`, and many more thematic indices

**Verdict:** ✅ Excellent for EOD data. Zero auth, clean JSON. ~200 sector/thematic indices available. **Not real-time.**

---

### mis.twse.com.tw — Real-Time Quotes (Unofficial/Internal API)

| Item | Detail |
|------|--------|
| **URL** | `https://mis.twse.com.tw/stock/api/getStockInfo.jsp` |
| **Auth** | **None** — no API key needed |
| **Format** | JSON |
| **Update** | **Real-time** during market hours (09:00–13:30 CST) |
| **Rate Limit** | Unknown but generous |

**Key endpoints (verified working):**

| Query | Description |
|-------|-------------|
| `?ex_ch=tse_2330.tw` | Real-time quote for TSMC (stock 2330) |
| `?ex_ch=tse_t00.tw` | **Real-time TAIEX weighted index** |
| `?ex_ch=tse_2330.tw\|tse_2317.tw\|tse_t00.tw` | Multiple symbols at once (pipe-separated) |

**Sample real-time output for TAIEX (t00):**
```json
{
  "c": "t00", "n": "發行量加權股價指數",
  "z": "43399.38",  // current/last price
  "y": "43654.84",  // yesterday's close
  "o": "43585.92",  // open
  "h": "43585.92",  // day high
  "l": "42969.48",  // day low
  "t": "12:55:05"   // update timestamp
}
```

**Sample real-time output for 2330 (TSMC):**
```json
{
  "c": "2330", "n": "台積電",
  "z": "2350.0000",  // current
  "y": "2350.0000",  // prev close
  "o": "2330.0000",  // open
  "h": "2365.0000",  // high
  "l": "2330.0000",  // low
  "a": "2355_2360_2365_2370_2375",  // 5 ask levels
  "b": "2345_2340_2335_2330_2325",  // 5 bid levels
  "t": "12:54:39",   // update time
  "v": "15086",      // volume (in lots)
  "ts": "0"          // trading status
}
```

**Other known MIS patterns:**
- `tse_<stockcode>.tw` — listed stock
- `tse_t<indexcode>.tw` — TWSE index (t00 = TAIEX)
- `otc_<stockcode>.tw` — OTC (櫃買) market stock
- `tse_<stockcode>_<date>.tw` — historical by date (appears in `key` field)

**Limitations:**
- No official documentation — reverse-engineered
- Subject to change without notice
- CORS may block browser-based requests (works from backend)
- Response includes `userDelay` parameter (5000ms)

**Verdict:** ✅✅ **Best free real-time source.** No auth, real-time OHLCV + 5-level bid/ask, JSON. Works for both stocks and indices.

---

## 2. FinMind (finmind.github.io)

| Item | Detail |
|------|--------|
| **URL** | `https://finmind.github.io/` |
| **API Base** | `https://api.finmindtrade.com/api/v4/` |
| **Auth** | Optional — no token = lower limits; token = higher limits |
| **Format** | REST/JSON |
| **Update** | **End-of-day** (daily data, next day availability) |
| **Free Tier** | 600 req/hour (with registered token), ~300/hr without |
| **Datasets** | 50+ Taiwan-focused financial datasets |
| **GitHub** | https://github.com/FinMind/FinMind (2.7k ⭐) |

**Key API Endpoints:**

| Endpoint | Description |
|----------|-------------|
| `GET /api/v4/data` | Main data fetch endpoint |
| `GET /api/v4/datalist` | List available datasets |
| `POST /api/v4/login` | Get auth token (for higher limits) |

**Key Taiwan Stock Datasets:**

| Dataset | Description | data_id example |
|---------|-------------|-----------------|
| `TaiwanStockPrice` | Daily OHLCV for stocks | `2330` (stock code) |
| `TaiwanStockTotal` | Market aggregate (use TAIEX for index OHLCV) | `TAIEX` |
| `TaiwanStockInstitutionalInvestorsBuySell` | Institutional flow (foreign, trust, dealer) | `2330` |
| `TaiwanStockDividend` | Dividend history | `2330` |
| `TaiwanStockFinancialStatements` | Financial reports | `2330` |
| `TaiwanStockGovernmentBankBuySell` | Government fund flow | `2330` |
| `TaiwanStockMarginPurchaseShortSale` | Margin/short data | `2330` |
| `TaiwanStockDayTrading` | Day trading stats | `2330` |
| `TaiwanExchangeRate` | Exchange rates | `USD` |
| `TaiwanStockNews` | Taiwan stock news | `2330` |
| `TaiwanFuturesDaily` | Futures daily data | — |
| `TaiwanStockHoldingSharesPer` | Shareholding ratios | — |
| `TaiwanStockEvery5SecondsIndex` | 5-second index data | — |

**Sample call (TAIEX OHLCV — working):**
```bash
curl "https://api.finmindtrade.com/api/v4/data?dataset=TaiwanStockPrice&data_id=TAIEX&start_date=2026-07-20&end_date=2026-07-25"
```
Returns: `{"msg":"success","status":200,"data":[{...OHLCV records...}]}`

**Sample call (2330 institutional flow — working):**
```bash
curl "https://api.finmindtrade.com/api/v4/data?dataset=TaiwanStockInstitutionalInvestorsBuySell&data_id=2330&start_date=2026-07-20&end_date=2026-07-24"
```

**Rate limits (from docs):**
- No token: ~300 requests/hour
- With token (free registration): 600 requests/hour
- Login: `POST https://api.finmindtrade.com/api/v4/login` with `user_id` + `password`

**AI/LLM Integration:**
- MCP server available for Claude/Cursor
- llms.txt endpoint for AI agent consumption
- Documentation at: `https://finmind.github.io/`

**Verdict:** ✅ **Best for comprehensive EOD data.** Covers stocks, indices, institutional flow, margin, dividends, financials. Rate-limited but generous for personal use.

---

## 3. Yahoo Finance (via yfinance Python library)

| Item | Detail |
|------|--------|
| **URL** | N/A (API accessed via `yfinance` Python package) |
| **Auth** | **None** — yfinance handles session/crumb internally |
| **Format** | Python DataFrame / dict |
| **Update** | **Real-time** during market hours (with ~15min delay for free tier) |
| **Latency** | ~15 min delayed during market hours; EOD next day |
| **Rate Limit** | Generous via yfinance (handles Yahoo's rate limiting internally) |

**Taiwan ticker conventions:**
- Stocks: `<code>.TW` (e.g., `2330.TW`, `0050.TW`, `2317.TW`)
- Index: `^TWII` (TAIEX weighted index)
- Futures/Options: ` <code>.TW` with different suffix

**Verified working symbols:**
| Symbol | Name | Current Price (2026-07-27) |
|--------|------|---------------------------|
| `2330.TW` | 台積電 (TSMC) | 2,350 TWD |
| `0050.TW` | 元大台灣50 | 100.80 TWD |
| `0056.TW` | 元大高股息 | 49.77 TWD |
| `00878.TW` | 國泰永續高股息 | 32.37 TWD |
| `^TWII` | TAIEX Weighted Index | 43,230.42 |
| `00631L.TW` | 元大台灣50正2 (2x leverage) | 33.04 TWD |
| `00632R.TW` | 元大台灣50反1 (inverse) | 10.66 TWD |

**Sample code:**
```python
import yfinance as yf

# Stock
t = yf.Ticker('2330.TW')
print(t.history(period='5d'))  # OHLCV DataFrame
print(t.info['regularMarketPrice'])  # 2350.0

# TAIEX Index
t2 = yf.Ticker('^TWII')
print(t2.history(period='5d'))
print(t2.info['regularMarketPrice'])  # 43230.42
```

**Available fields (info dict):**
`symbol, shortName, longName, market, quoteType, currency, regularMarketPrice, regularMarketOpen, regularMarketDayHigh, regularMarketDayLow, previousClose, volume, bid, ask, bidSize, askSize, fiftyTwoWeekHigh, fiftyTwoWeekLow, marketCap, exchange, exchangeTimezoneName`

**Yahoo Finance direct HTTP API status:**
- ❌ `v8/finance/chart` — returns empty (rate limited / blocked)
- ❌ `v7/finance/quote` — "Unauthorized" error
- ❌ `v7/finance/download` — "User is not logged in"
- ✅ `v1/finance/search` — still works (search only, not quotes)

**Verdict:** ✅ **Best for Python users.** Comprehensive data, free, works for Taiwan stocks and indices. ~15min delay. No raw HTTP API anymore — must use yfinance library.

---

## 4. Google Finance

| Item | Detail |
|------|--------|
| **URL** | `https://www.google.com/finance/quote/2330:TPE` |
| **Auth** | None for viewing |
| **Format** | HTML (JS-rendered SPA) |
| **API** | No official public API |

**Status:** Google Finance is a JavaScript-heavy SPA with no public API. The HTML source is mostly JS bootstrap code. Scraping requires headless browser (Puppeteer/Selenium) to execute JS and extract data.

**Ticker format:** `2330:TPE` (for Taiwan stocks on TWSE)

**Unofficial alternatives:**
- Some third-party packages exist (googlefinance, google-finance) but are unreliable and frequently break due to Google changing their internal JSON endpoints
- Not recommended for production use

**Verdict:** ❌ **Not viable as API.** JS-heavy SPA, no public API, scraping unreliable.

---

## 5. Fugle API (富果 API)

| Item | Detail |
|------|--------|
| **URL** | `https://developer.fugle.tw/` |
| **API Base** | `https://api.fugle.tw/marketdata/v1.0/` |
| **Auth** | **API key required** (free after Fugle member registration) |
| **Format** | REST/JSON + WebSocket |
| **Update** | **Real-time** (HTTP + WebSocket streaming) |

**API Categories (from their landing page):**

| Category | Endpoints | Description |
|----------|-----------|-------------|
| **Intraday API** | Ticker, Quote, Candles, Trades, Volumes | Real-time intraday data |
| **Snapshot API** | Quotes, Movers, Actives | Market snapshot |
| **Historical API** | Candles, Stats | Historical OHLCV + statistics |
| **WebSocket API** | Trades, Candles, Books, Aggregates | Real-time streaming |

**Sample WebSocket Aggregates payload:**
```json
{
  "event": "data",
  "channel": "aggregates",
  "data": {
    "symbol": "0050", "name": "元大台灣50",
    "type": "EQUITY", "exchange": "TWSE", "market": "TSE",
    "openPrice": 120.5, "highPrice": 121, "lowPrice": 120.3,
    "closePrice": 120.9, "lastPrice": 120.9,
    "change": 0.05, "changePercent": 0.04,
    "bids": [{"price": 120.85, "size": 20}, ...],
    "asks": [{"price": 120.9, "size": 10}, ...],
    "total": {"tradeValue": 581676700, "tradeVolume": 4818, "transaction": 2083}
  }
}
```

**Pricing (from their FAQ):**
- **Free trial:** Available after Fugle member registration — includes real-time intraday API access
- **Paid plans:** Available for higher usage limits (contact support for details)
- Exact limits not publicly documented on the homepage

**SDKs:** Multiple language SDKs available via GitHub

**QA from their site:**
- Q: "Does Fugle API cost money?" → A: "Free trial after registration" (試用權限)
- Q: "Free intraday API not enough?" → A: Paid plans available
- Q: "Historical data?" → A: Yes, through Historical API
- Q: "Futures/options?" → A: Through partner broker SDKs

**Verdict:** ✅ **Excellent for real-time WebSocket streaming.** Best-in-class real-time API with 5-level order book. Requires registration (free trial). Best for production-grade real-time applications.

---

## 6. TEJ (台灣經濟新報)

| Item | Detail |
|------|--------|
| **URL** | `https://www.tej.com.tw/` |
| **Auth** | Paid subscription required |
| **Format** | Database / API access |
| **Update** | Professional-grade, daily updates |

**Status:** TEJ is Taiwan's premier financial database provider — the gold standard for academic and institutional research. However, it is a **paid service** with subscription fees (typically institutional/enterprise pricing).

**Not suitable for a free/hobby project.**

**Verdict:** ❌ **Paid only.** Not relevant for free API research.

---

## 7. Other Notable Sources

### TWSE Open Data Portal
- URL: `https://data.gov.tw/` (search "TWSE" or "證券")
- Government open data initiative; some TWSE datasets available
- Usually CSV downloads, not real-time APIs

### FinLab (財經實驗室)
- URL: `https://www.finlab.tw/`
- Python-based Taiwan stock analysis platform
- Has API for premium users; free tier limited

### GoodInfo (goodinfo.tw)
- Popular Taiwan stock info website
- No public API; scraping possible but not recommended

---

## Comparison Matrix

| Source | Real-Time | Auth | Format | Free Tier | Best For |
|--------|-----------|------|--------|-----------|----------|
| **TWSE MIS** | ✅ Real-time | None | JSON | Unlimited | Real-time quotes, TAIEX |
| **TWSE OpenAPI** | ❌ EOD only | None | JSON/CSV | Unlimited | EOD index data, all stocks |
| **FinMind** | ❌ EOD only | Optional token | JSON | 600 req/hr | Comprehensive historical data |
| **Yahoo/yfinance** | ~15min delay | None | Python obj | Generous | Python ETL, quick prototyping |
| **Fugle** | ✅ Real-time | API key | JSON/WS | Free trial | Production real-time WebSocket |
| **Google Finance** | ~Real-time | None (view) | HTML | Unlimited viewing | ❌ Not usable as API |
| **TEJ** | Daily | Paid sub | DB/API | None | Institutional research |

---

## Recommended Stack for Taiwan Stock Monitor

### Tier 1: Quick Start (zero auth)
```
Real-time:  TWSE MIS API (mis.twse.com.tw)
EOD data:   TWSE OpenAPI (openapi.twse.com.tw)
Python:     yfinance (Yahoo Finance)
```

### Tier 2: Production-Grade
```
EOD + History:  FinMind (600 req/hr)
Real-time WS:   Fugle API (free trial → paid)
Python:         yfinance (backup)
```

### Sample real-time TAIEX call (works today):
```bash
curl "https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_t00.tw"
# Returns: TAIEX = 43399.38, prev_close = 43654.84, update time = 12:55:05
```

### Sample real-time stock quote:
```bash
curl "https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_2330.tw|tse_2317.tw"
# Returns: 2330=2350, 2317=250.00 (real-time with 5-level bid/ask)
```

---

## References

- TWSE OpenAPI Swagger: https://openapi.twse.com.tw/v1/swagger.json
- FinMind Docs: https://finmind.github.io/
- Fugle Developer: https://developer.fugle.tw/
- yfinance GitHub: https://github.com/ranaroussi/yfinance
