# T02: Global Hydrogen Station & Green H2 Production Data Sources

> Research Date: 2026-07-27
> Status: Phase 1 discovery complete

---

## Summary Table

| # | Source | Type | Downloadable? | Format | License | API Key? | Update Freq |
|---|--------|------|--------------|--------|---------|----------|-------------|
| 1 | IEA Hydrogen Projects Database | Production + Infrastructure | Yes (free acct) | XLSX | IEA T&C | Free account | ~ Biannual |
| 2 | H2.LIVE (H2 Mobility) | EU Station Map | No direct DL | Web map | Proprietary | No API | Real-time |
| 3 | H2Stations.org | Global Station DB | Dead/Unreachable | — | — | — | Defunct |
| 4 | OSM (OpenStreetMap) | Global crowdsourced | Yes (Overpass API) | GeoJSON/XML | ODbL | No | Community |
| 5 | GEM Hydrogen Tracker | Infrastructure tracker | Yes (Download page) | XLSX/CSV | CC BY-NC | Email reg | ~ Quarterly |
| 6 | NREL AFDC (US DOE) | US Station API | Yes (API) | JSON/CSV | Public | Free key | Daily |
| 7 | JHyM (Japan H2 Mobility) | Japan Station Map | No public DL | Web map | Proprietary | No | — |
| 8 | KERI/Korea H2 | Korea Station Data | Partial (gov) | Unknown | Gov Open | Unknown | — |
| 9 | China H2 Stations | China | No open DL | — | — | — | — |
| 10 | Taiwan MOEA/能源局 | Taiwan | No open data | — | — | — | — |

---

## 1. IEA Hydrogen Production and Infrastructure Projects Database

**URL:** https://www.iea.org/data-and-statistics/data-product/hydrogen-production-and-infrastructure-projects-database

**Status:** ✅ DOWNLOADABLE (requires free IEA account)

**Discovery notes:**
- Two separate XLSX files available:
  - `Hydrogen production projects` (~1.17 MB) — covers all hydrogen production facilities globally
  - `Hydrogen infrastructure projects` (~269.5 KB) — covers pipelines, storage, terminals, and refueling stations
- Requires creating a free IEA account (email registration)
- Download button hidden behind auth wall; login redirects to actual file links
- Companion tool: [Hydrogen Production Projects Interactive Map](https://www.iea.org/data-and-statistics/data-tools/hydrogen-production-projects-interactive-map)
- Also: [Levelised Cost of Hydrogen Maps](https://www.iea.org/data-and-statistics/data-tools/levelised-cost-of-hydrogen-maps)

**Data likely includes:**
- Project name, country, technology type (electrolysis / SMR+CCS / etc.)
- Capacity (MW), status (operational/planned/under construction)
- Start year, operator, feedstock
- For infrastructure: station location, capacity (kg/day), pressure (350/700 bar)

**Access method:**
1. Go to URL
2. Click "Download" (redirects to login if needed)
3. Create free IEA account
4. Download 2 XLSX files

**API:** No public API. IEA has an API at `api.iea.org` but not for hydrogen projects specifically.

---

## 2. H2Stations.org

**URL:** https://www.h2stations.org

**Status:** ❌ APPEARS DEFUNCT / UNREACHABLE

**Discovery notes:**
- SSL protocol error when attempting HTTPS connection
- HTTP returns empty response
- This was historically the go-to source for global hydrogen station CSV data (Ludwig-Bölkow-Systemtechnik)
- The map was previously at `h2stations.org/stations-map/`
- Likely superseded by H2.LIVE (see below)

---

## 3. H2.LIVE (H2 Mobility Deutschland)

**URL:** https://h2.live/en/

**Status:** ⚠️ WEB MAP ONLY — No public API or download endpoint

**Discovery notes:**
- Covers Germany + Europe hydrogen refueling stations
- Real-time status (operational / in-service / planned)
- `/en/api/` → 404 (no public API)
- WordPress-based site; data is loaded via JavaScript into an interactive map
- Mobile app available (iOS/Android)
- Data owned by H2 Mobility Deutschland GmbH
- Station info includes: address, pressure (350/700 bar), operator, status

**Potential data extraction:**
- Could scrape the WordPress REST API: `https://h2.live/en/wp-json/wp/v2/` but station data likely in custom tables
- Map markers are loaded client-side; reverse-engineering possible but fragile

**Related:** H2 Maps (https://h2maps.eu) — DNS resolution failed, likely dead.

---

## 4. OpenStreetMap — Hydrogen Station Tags

**Status:** ✅ ACCESSIBLE via Overpass API

**OSM Tag Schema:**
```
amenity=fuel
fuel:hydrogen=yes
```

**Overpass API Query:**
```
[out:json];
node[amenity=fuel]["fuel:hydrogen"=yes];
out body;
```

**Tested endpoint (working):** `https://overpass.kumi.systems/api/interpreter`

**Verified results (sample):**
- NXT Energy hub, Netherlands (52.60, 4.75)
- エア・リキード, Japan (35.22, 136.95)
- Hidrogenera Walqa, Spain (42.11, -0.46)
- PaderSprinter, Germany (51.71, 8.72)
- Energetika Ljubljana, Slovenia (46.11, 14.45)

**Pros:**
- Free, no API key, ODbL license
- Global coverage, community-maintained
- Returns GeoJSON natively
- Can also query `fuel:hydrogen` = `yes` on ways (pipeline stations)
- Additional tags: `operator`, `name`, `website`, `opening_hours`, `capacity`, `pressure`

**Cons:**
- Incomplete; coverage varies by country
- Not all stations tagged; rural areas sparse
- No production-side data (only refueling)

**Query to get ALL hydrogen stations as GeoJSON:**
```
[out:json][timeout:60];
(
  node[amenity=fuel]["fuel:hydrogen"=yes];
  way[amenity=fuel]["fuel:hydrogen"=yes];
);
out body center;
>;
out skel qt;
```

**Alternative OSM tag search:** `man_made=hydrogen_station` (less common), `industrial=hydrogen`

---

## 5. Global Energy Monitor (GEM) — Hydrogen Infrastructure Tracker

**URL:** https://globalenergymonitor.org/

**Status:** ⚠️ HYDROGEN TRACKER EXISTS but standalone page 404'd; data accessible via main site

**Discovery notes:**
- GEM's project page URL `/projects/global-hydrogen-infrastructure-tracker/` returns 404
- The hydrogen tracker may have been merged/renamed
- GEM's Browse Data → Energy Transition section is where it should be
- GEM has a "Download data" link in navigation
- Covers: hydrogen production (green/blue/grey), electrolyzer projects, pipelines
- License: CC BY-NC (non-commercial)
- Known trackers: Global Oil & Gas Plant Tracker, Global Coal Plant Tracker, etc.
- Data format: typically Excel/CSV with lat/lng coordinates

**Workaround:**
1. Go to https://globalenergymonitor.org/
2. Navigate: Browse Data → Energy Transition
3. Or: click "Download data" in header
4. Find hydrogen-related datasets

**Alternative GEM data portal:** https://globalenergymonitor.org/projects/ (list all trackers)

---

## 6. NREL / US DOE Alternative Fuels Data Center (AFDC)

**URL:** https://developer.nrel.gov/docs/transportation/alt-fuel-stations-v1/

**Status:** ✅ API AVAILABLE (free API key required)

**API Details:**
- Endpoint: `https://developer.nrel.gov/api/alt-fuel-stations/v1.json`
- Parameter: `fuel_type=HY` (hydrogen)
- API key: free at https://developer.nrel.gov/signup/
- Demo key `DEMO_KEY` exists but has rate limits
- Returns JSON with station name, address, lat/lng, status, access, pressure
- Covers: USA, Canada (primarily)

**Example query:**
```
GET https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=HY&status=E&limit=all&api_key=YOUR_KEY
```

**Data fields:** station_name, street_address, city, state, zip, latitude, longitude, status_code, access_days_time, hydrogen_status_link, hydrogen_pressure, hydrogen_is_retail

---

## 7. Japan — JHyM (Japan H2 Mobility)

**Context:** Japan had ~173 hydrogen stations as of 2024 (METI data)

**Sources:**
- **JHyM (Japan H2 Mobility):** https://www.jhym.co.jp/ — station map, no public download
- **METI (Ministry of Economy, Trade and Industry):** https://www.meti.go.jp/ — policy docs with station counts, not machine-readable
- **NEDO:** https://www.nedo.go.jp/ — hydrogen R&D data, project-level info

**OSM coverage:** Partial — some Japanese stations tagged on OSM (confirmed via Overpass API query showing Air Liquide station in Japan)

**No open dataset found for download.**

---

## 8. Korea Hydrogen Station Data

**Context:** Korea had ~200+ stations planned/operational (MOTIE target: 1,200 by 2040)

**Sources:**
- **K-Gas / KOGAS:** Possible hydrogen station data
- **MOTIE (산업통상자원부):** Policy level, not machine-readable
- **HyNet (수소에너지네트워크):** Station operator consortium — no public data portal found

**No open dataset found for download.** Korea's hydrogen data is largely behind government portals that require Korean citizenship registration (공공데이터포털 — data.go.kr), but hydrogen station location data was not found in English search.

---

## 9. China Hydrogen Refueling Stations

**Context:** China has the world's largest number of HRS (~400+ operational as of 2025)

**Sources:**
- **China Hydrogen Alliance (中国氢能联盟):** Industry reports, not open data
- **CAAM (中国汽车工业协会):** Annual statistics, not machine-readable
- **Provincial government portals:** Fragmented, no unified national database

**No open dataset found for download.** China's hydrogen station data is fragmented across provincial governments and state-owned enterprises. Most maps are behind Chinese-language web portals with no API.

---

## 10. Taiwan Hydrogen Station Data (能源局 / MOEA)

**Context:** Taiwan currently has very few hydrogen stations (mostly R&D/demonstration)

**Sources checked:**
- **MOEA 經濟部:** No hydrogen station dataset found
- **BOE 能源局:** No hydrogen station data on energy statistics portal
- **data.gov.tw (政府資料開放平臺):** Searched for "氫", "加氫站", "hydrogen" — no results
- **ITRI (工研院):** Hydrogen R&D only, no public station data
- **CPC (中油):** May have plans but not published

**No open dataset found.** Taiwan's hydrogen economy is nascent; station data would be from CPC/ITRI demonstration projects only.

---

## 11. GitHub — Notable Repositories

| Repository | Stars | Description | Has Data? |
|-----------|-------|-------------|-----------|
| `kramea/h2_station_capacity_data` | 1 | Hourly capacity data of CA H2 stations (Oct-Dec 2018) | ✅ CSV data |
| `no2chem/soss-js` | 5 | JS interface to California Hydrogen Station Operational System | ⚠️ API client |
| `WalterZWang/AlphaHydrogen` | 17 | OpenAI Gym env simulating H2 station + FCEV + grid | ❌ Simulation |
| `jegly/future-hydrogen-stations` | 1 | Coastal green H2 infrastructure blueprint | ❌ Design doc |
| `kzwicker/mirai-notify` | 0 | Python app for CA H2 station status notifications | ⚠️ API scraper |
| `Juliette-De/hydrogen-stations` | 1 | Hydrogen station data (unclear scope) | ⚠️ Unknown |

**Key finding:** `kramea/h2_station_capacity_data` has hourly capacity data for California hydrogen stations (Oct-Dec 2018). This could be a useful validation/benchmark dataset.

---

## 12. Additional Sources Found

### 12.1 European Hydrogen Backbone
- **URL:** https://ehb.eu/
- Interactive map of planned EU hydrogen pipeline network
- Not downloadable as raw data but valuable for infrastructure context

### 12.2 Hydrogen Council
- **URL:** https://hydrogencouncil.com/
- Industry reports with project lists (PDF), not machine-readable

### 12.3 DOE Hydrogen Program
- **URL:** https://www.hydrogen.energy.gov/
- US-focused, project-level data in PDF/HTML
- H2@Scale project database exists but not an API

### 12.4 California Hydrogen Station Status (CaFCP)
- **URL:** https://cafcp.org/stationmap
- Real-time station status map
- Data sourced from SOSS (Station Operational Status System)
- `no2chem/soss-js` GitHub repo is a JS client for this system

---

## 13. Recommended Data Acquisition Strategy

### Tier 1 — Directly Downloadable
1. **IEA Hydrogen Projects DB** — Best source for global production + infrastructure. Free account. XLSX.
2. **NREL AFDC API** — Best for US/Canada station data. Free API key. JSON.
3. **OpenStreetMap Overpass API** — Best for global station locations. No key needed. GeoJSON.

### Tier 2 — Requires Scraping / Reverse Engineering
4. **H2.LIVE** — EU station data (WordPress backend, map JS)
5. **GEM Hydrogen Tracker** — Infrastructure/production tracker (Excel/CSV download page exists)

### Tier 3 — No Open Data Available
6. Japan (JHyM/METI), Korea (MOTIE), China, Taiwan — no downloadable station data found
7. Industry sources (Hydrogen Council, CaFCP) — maps/reports but no raw data

### Combination Strategy
- Use **OSM** for global station coordinate baseline
- Enrich with **IEA** database for production/project metadata
- Use **NREL API** for high-quality US station data with real-time status
- For Asia, OSM is the only freely accessible source

---

## 14. File Inventory

| File | Format | Size | Status |
|------|--------|------|--------|
| IEA hydrogen production projects | XLSX | ~1.17 MB | Need free IEA account |
| IEA hydrogen infrastructure projects | XLSX | ~269.5 KB | Need free IEA account |
| OSM hydrogen stations (Overpass) | GeoJSON | Variable | Live query |
| NREL hydrogen stations API | JSON | Variable | Free API key |
| GEM hydrogen tracker | XLSX/CSV | Unknown | Email registration |

---

*End of research notes. Next step: Download actual datasets or file issues for Tier 2/3 sources.*
