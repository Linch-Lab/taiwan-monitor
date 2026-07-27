# ARCHITECTURE-04: Map & Layer Architecture

> **Source:** WorldMonitor upstream codebase (`/tmp/worldmonitor`)
> **Date:** 2026-07-28
> **Status:** Research Complete

## Table of Contents

1. [Overview: Three Renderers](#overview)
2. [Layer Registry System](#layer-registry)
3. [Layer Data Sources](#data-sources)
4. [DeckGLMap Rendering](#deckglmap)
5. [GlobeMap Rendering](#globemap)
6. [Map.ts (SVG Fallback)](#svg-fallback)
7. [MapContainer: Renderer Selection](#mapcontainer)
8. [MapView System (Region Presets)](#mapview)
9. [How to Add a New Map Layer](#add-layer)
10. [How to Add a New Region](#add-region)

---

## 1. Overview: Three Renderers {#overview}

WorldMonitor supports three map renderers, selected by `MapContainer` based on device capability and user setting:

| Renderer | Class | File | When Used |
|----------|-------|------|-----------|
| **DeckGLMap** | `DeckGLMap` | `src/components/DeckGLMap.ts` | Desktop (WebGL available) — the primary renderer |
| **GlobeMap** | `GlobeMap` | `src/components/GlobeMap.ts` | 3D globe mode (globe.gl), user-selectable in Settings |
| **MapComponent** | `MapComponent` | `src/components/Map.ts` | Mobile / D3-SVG fallback |

**MapContainer selection logic** (`src/components/MapContainer.ts:1-6`):
```
- Desktop + WebGL → DeckGLMap
- Desktop + Globe mode → GlobeMap
- Mobile / no WebGL → MapComponent (SVG)
```

The `MapRenderer` type is defined at `src/config/map-layer-definitions.ts:5`:
```ts
export type MapRenderer = 'flat' | 'globe';
```

---

## 2. Layer Registry System {#layer-registry}

### 2.1 LayerDefinition Interface

**File:** `src/config/map-layer-definitions.ts:10-25`

```ts
export interface LayerDefinition {
  key: keyof MapLayers;       // Unique layer key
  icon: string;               // HTML entity for the layer picker icon
  i18nSuffix: string;         // Translation key suffix
  fallbackLabel: string;      // English label when i18n fails
  renderers: MapRenderer[];   // ['flat'] | ['globe'] | ['flat','globe']
  premium?: 'locked' | 'enhanced';  // Paywall gating
  deckGLOnly?: boolean;       // No SVG/Globe fallback — DeckGL exclusive
}
```

### 2.2 The `def()` Helper

**File:** `src/config/map-layer-definitions.ts:42-54`

A factory function that creates `LayerDefinition` objects with defaults (`renderers = ['flat','globe']`, no `premium`, no `deckGLOnly`):

```ts
const def = (key, icon, i18nSuffix, fallbackLabel, renderers?, premium?, deckGLOnly?) => ({...})
```

### 2.3 LAYER_REGISTRY

**File:** `src/config/map-layer-definitions.ts:56-124`

A `Record<keyof MapLayers, LayerDefinition>` mapping every layer key to its definition. Example entries:

```ts
export const LAYER_REGISTRY: Record<keyof MapLayers, LayerDefinition> = {
  conflicts:     def('conflicts',     '⚔', 'conflictZones',  'Conflict Zones'),
  bases:         def('bases',         '🏛', 'militaryBases',  'Military Bases'),
  cables:        def('cables',        '🔌', 'underseaCables', 'Undersea Cables'),
  pipelines:     def('pipelines',     '🛢', 'pipelines',      'Pipelines'),
  ais:           def('ais',           '🚢', 'shipTraffic',    'Ship Traffic'),
  military:      def('military',      '✈', 'militaryActivity', 'Military Activity'),
  // DeckGL-only layers (no SVG/Globe fallback):
  storageFacilities: def('storageFacilities', '🏟', 'storageFacilities', 'Storage Facilities',
                          ['flat'], undefined, true),  // deckGLOnly: true
  // Premium-gated:
  iranAttacks:   def('iranAttacks', '🎯', 'iranAttacks', 'Iran Attacks',
                      ['flat','globe'], _desktop ? 'locked' : undefined),
  resilienceScore: def('resilienceScore', '📈', 'resilienceScore', 'Resilience',
                        ['flat'], 'locked', true),
};
```

**Key flags:**
- `premium: 'locked'` — requires Pro subscription (desktop only)
- `premium: 'enhanced'` — enhanced features for Pro
- `deckGLOnly: true` — layer has NO code path in Map.ts (SVG) or GlobeMap; only DeckGLMap renders it

### 2.4 The `MapLayers` Interface

**File:** `src/types/index.ts:632-708`

Every toggle in the layer picker is a boolean on the `MapLayers` interface. There are ~50+ keys including `conflicts`, `bases`, `pipelines`, `storageFacilities`, `fuelShortages`, `liveTankers`, etc.

### 2.5 Variant Layer Order

**File:** `src/config/map-layer-definitions.ts:292-333`

`VARIANT_LAYER_ORDER` maps each `MapVariant` (`'full' | 'tech' | 'finance' | 'happy' | 'commodity' | 'energy'`) to the ordered array of layer keys that variant supports:

```ts
const VARIANT_LAYER_ORDER: Record<MapVariant, Array<keyof MapLayers>> = {
  full: ['iranAttacks', 'hotspots', 'conflicts', 'bases', ...],
  tech: ['startupHubs', 'techHQs', 'accelerators', 'cloudRegions', ...],
  energy: ['pipelines', 'storageFacilities', 'fuelShortages', 'liveTankers', ...],
  // ...
};
```

### 2.6 Helper Functions

**File:** `src/config/map-layer-definitions.ts:351-501`

| Function | Line | Purpose |
|----------|------|---------|
| `getLayersForVariant(variant, renderer)` | 351 | Returns `LayerDefinition[]` for a variant+renderer combo, filtered by `isSunsetLayer` |
| `getAllowedLayerKeys(variant)` | 359 | Returns `Set<keyof MapLayers>` for URL param sanitization |
| `sanitizeLayersForVariant(layers, variant)` | 363 | Strips disallowed layer keys from a `MapLayers` object |
| `isLayerExecutable(key, renderer, isDeckGLActive)` | 384 | Can the layer actually render? Checks renderer compatibility + `deckGLOnly` |
| `resolveLayerLabel(def, tFn)` | 470 | Resolves translated label or falls back to English |
| `bindLayerSearch(container)` | 503 | Binds the layer-picker search input to filter toggles by name/synonym |

### 2.7 Layer Synonym Search

**File:** `src/config/map-layer-definitions.ts:397-468`

`LAYER_SYNONYMS` maps natural-language queries to layer keys (e.g., `"war" → ['conflicts','ucdpEvents','military']`, `"oil" → ['pipelines','commodityHubs']`).

### 2.8 Layer Explanations (V1)

**File:** `src/config/map-layer-definitions.ts:139-290`

`LAYER_EXPLANATIONS` provides curated "source and confidence" metadata cards for the 10 most-used layers (`conflicts`, `ucdpEvents`, `ciiChoropleth`, `natural`, `flights`, `ais`, `waterways`, `tradeRoutes`, `cyberThreats`, `hotspots`). Each entry includes: category, purpose, source, freshness, confidence, limitations, related, evidence.

---

## 3. Layer Data Sources {#data-sources}

### 3.1 Static Configuration Tables

Layers backed by hardcoded GeoJSON/coordinate arrays in config files:

| Layer | Config File | Export | Lines |
|-------|------------|--------|-------|
| Hotspots | `src/config/geo.ts` | `INTEL_HOTSPOTS` | :6-776 |
| Conflict Zones | `src/config/geo.ts` | `CONFLICT_ZONES` | geo.ts |
| Strategic Waterways | `src/config/geo.ts` | `STRATEGIC_WATERWAYS` | geo.ts |
| Undersea Cables | `src/config/geo-map.ts` | `UNDERSEA_CABLES` | :8-2745 |
| Nuclear Facilities | `src/config/geo-map.ts` | `NUCLEAR_FACILITIES` | geo-map.ts |
| Economic Centers | `src/config/geo-map.ts` | `ECONOMIC_CENTERS` | geo-map.ts |
| Spaceports | `src/config/geo-map.ts` | `SPACEPORTS` | geo-map.ts |
| Critical Minerals | `src/config/geo-map.ts` | `CRITICAL_MINERALS` | geo-map.ts |
| Pipelines | `src/config/pipelines.ts` | `PIPELINES` | :4-1035 |
| Ports | `src/config/ports.ts` | `PORTS` | ports.ts |
| Gamma Irradiators | `src/config/irradiators.ts` | `GAMMA_IRRADIATORS` | irradiators.ts |
| Military Bases | `src/config/military-bases.ts` | (lazy chunk #4478) | military-bases.ts |
| Military Bases Expanded | `src/config/bases-expanded.ts` | (lazy chunk) | bases-expanded.ts |
| AI Data Centers | `src/config/ai-datacenters.ts` | `AI_DATA_CENTERS` | ai-datacenters.ts |
| Tech HQs | `src/config/tech-geo.ts` | `TECH_HQS` | tech-geo.ts |
| Startup Hubs | `src/config/tech-geo.ts` | `STARTUP_HUBS` | tech-geo.ts |
| Accelerators | `src/config/tech-geo.ts` | `ACCELERATORS` | tech-geo.ts |
| Cloud Regions | `src/config/tech-geo.ts` | `CLOUD_REGIONS` | tech-geo.ts |
| Stock Exchanges | `src/config/` | `STOCK_EXCHANGES` | (barrel) |
| Financial Centers | `src/config/` | `FINANCIAL_CENTERS` | (barrel) |
| Trade Routes | `src/config/trade-routes.ts` | `TRADE_ROUTES` | trade-routes.ts |
| Sanctioned Countries | `src/config/geo-map.ts` | `SANCTIONED_COUNTRIES_ALPHA2` | geo-map.ts |

**Key architecture note (#4404):** The config barrel (`src/config/index.ts:25-28`) intentionally does NOT re-export large tables (geo-map, ai-datacenters, tech-geo, military-bases) — consumers lazy-import them directly to keep them off the critical path.

### 3.2 Dynamic / Service-Backed Data

Layers whose data arrives from API services at runtime via `setXxx()` public methods on the map class:

| Layer | Service / Source | Data Arrives Via |
|-------|-----------------|------------------|
| Earthquakes | USGS | `map.setEarthquakes(data)` |
| Weather Alerts | Weather service | `map.setWeatherAlerts(data)` |
| Internet Outages | Infrastructure service | `map.setOutages(data)` |
| Cyber Threats | abuse.ch, AlienVault, AbuseIPDB | `map.setCyberThreats(data)` |
| AIS Vessels | AISStream relay | `map.setAisData(disruptions, density)` |
| GPS Jamming | GPS interference service | `map.setGpsJamming(hexes)` |
| Protests | ACLED, GDELT | `map.setProtests(data)` |
| Military Flights | OpenSky, Wingbits | `map.setMilitaryFlights(...)` |
| Military Vessels | AIS relay | `map.setMilitaryVessels(...)` |
| UCDP Events | Uppsala Conflict Data Program | `map.setUcdpEvents(data)` |
| Displacement | UNHCR | `map.setDisplacementFlows(data)` |
| Climate Anomalies | Climate service | `map.setClimateAnomalies(data)` |
| Radiation | Safecast, RadNet | `map.setRadiationObservations(data)` |
| Fires | NASA FIRMS | `map.setFires(data)` |
| Disease Outbreaks | WHO, CDC, ProMED | `map.setDiseaseOutbreaks(data)` |
| Aircraft Positions | OpenSky, Wingbits | `map.setAircraftPositions(data)` |
| Imagery/Satellites | Imagery service | `map.setImageryScenes(data)` |
| Happiness | World Happiness Report | `map.setHappinessScores(data)` |
| Webcams | Webcam service | `map.setWebcams(data)` |
| Resilience Scores | Resilience service | via `resilienceScoresMap` |

### 3.3 Redis-Seeded Layers

Some layers use a two-tier approach: static fallback + Redis-backed live data:

- **Submarine cables:** Static `UNDERSEA_CABLES` + Redis key `infrastructure:submarine-cables:v1` seeded weekly
- **Pipelines:** Static `PIPELINES` + Redis-backed evidence registry with `publicBadge` status (see `DeckGLMap.ts:1833-1844`)
- **Storage Facilities:** Redis-backed via `seed-storage-facilities.mjs`, colored by derived `publicBadge`
- **Fuel Shortages:** Redis-backed via `fuel-shortage-registry-store.ts`
- **Military Bases:** Static `military-bases.ts` + server-enriched via `fetchMilitaryBases()`

### 3.4 LAYER_TO_SOURCE Mapping

**File:** `src/config/panels.ts:1329-1342`

Maps layer toggles to data-freshness source IDs for health monitoring:
```ts
export const LAYER_TO_SOURCE: Partial<Record<keyof MapLayers, DataSourceId[]>> = {
  military: ['opensky', 'wingbits'],
  ais: ['ais'],
  natural: ['usgs'],
  weather: ['weather'],
  outages: ['outages'],
  // ...
};
```

### 3.5 Data Loader Integration

**File:** `src/app/data-loader.ts`

The central data loader dispatches data to the active map via its `setXxx()` methods:
```ts
// Example pattern:
this.ctx.map?.setEarthquakes(earthquakeResult.value);  // line ~2378
this.ctx.map?.setOutages(outages);                      // line ~2498
this.ctx.map?.setProtests(protestData.events);          // line ~2529
```

---

## 4. DeckGLMap Rendering {#deckglmap}

### 4.1 Class Structure

**File:** `src/components/DeckGLMap.ts:545-7858`

`DeckGLMap` is the primary WebGL renderer. It wraps:
- **MapLibre GL** for basemap tiles (`maplibregl.Map`)
- **deck.gl** `MapboxOverlay` for vector layers
- **Supercluster** for point clustering

### 4.2 State

**File:** `src/components/DeckGLMap.ts:200-206`

```ts
interface DeckMapState {
  zoom: number;
  pan: { x: number; y: number };
  view: DeckMapView;       // Current region
  layers: MapLayers;       // Layer toggle states
  timeRange: TimeRange;    // Temporal filter
}
```

### 4.3 `buildLayers()` — The Core Rendering Method

**File:** `src/components/DeckGLMap.ts:1777-2242+`

The private `buildLayers(deferHeavy?: boolean)` method is the central dispatcher. For each layer toggle in `this.state.layers`, it checks if the layer is ON and conditionally pushes deck.gl layers into a `LayersList`:

```
buildLayers() pseudocode:
  1. Refresh COLORS = getOverlayColors()  — theme-aware RGBA arrays
  2. Filter time-sensitive data arrays by this.state.timeRange
  3. For each layer key in this.state.layers:
     if (layers.cables)       → layers.push(this.createCablesLayer())        // PathLayer
     if (layers.pipelines)    → layers.push(this.createEnergyPipelinesLayer()) // GeoJsonLayer
     if (layers.bases)        → layers.push(this.createBasesLayer())         // IconLayer + cluster
     if (layers.conflicts)    → layers.push(this.createConflictZonesLayer()) // PolygonLayer
     if (layers.military)     → layers.push(...)                            // Scatterplot + trails
     if (layers.waterways)    → layers.push(this.createWaterwaysLayer())    // GeoJsonLayer
     // ... 50+ layer conditionals
  4. Return built layers list
```

Each layer is a deck.gl `Layer` subclass:
- `GeoJsonLayer` — polygons/linestrings (conflict zones, pipelines, country boundaries)
- `ScatterplotLayer` — point markers (earthquakes, outages, cyber threats)
- `PathLayer` — line features (cables, pipelines, trade routes)
- `IconLayer` — custom SVG markers (bases, nuclear, datacenters)
- `TextLayer` — labels
- `ArcLayer` — great-circle arcs (displacement flows, bypass corridors)
- `PolygonLayer` — filled areas (chokepoints, country choropleths)

### 4.4 Ghost Layer Pattern

For layers that use zoom-dependent visibility (`isLayerVisible()`), an "empty ghost" layer is always pushed. This ensures deck.gl's layer stack doesn't shift indices when a layer appears/disappears at zoom boundaries:

```ts
// DeckGLMap.ts:1906
layers.push(this.createEmptyGhost('bases-layer'));
```

### 4.5 Data Ingestion: `setXxx()` Methods

**File:** `src/components/DeckGLMap.ts:6546-6920`

Over 30 public `setXxx()` methods accept typed data arrays and store them on the instance. The data is then consumed by `buildLayers()` on the next render cycle:

```ts
public setEarthquakes(earthquakes: Earthquake[]): void       // line 6546
public setWeatherAlerts(alerts: WeatherAlert[]): void         // line 6551
public setOutages(outages: InternetOutage[]): void            // line 6561
public setCyberThreats(threats: CyberThreat[]): void          // line 6576
public setAisData(disruptions, density): void                 // line 6586
public setProtests(events: SocialUnrestEvent[]): void         // line 6604
public setMilitaryFlights(flights, clusters?): void           // line 6621
public setMilitaryVessels(vessels, clusters?): void           // line 6658
// ... ~30 more
```

### 4.6 Zoom-Dependent Visibility

**File:** `src/components/DeckGLMap.ts:250-262`

```ts
const LAYER_ZOOM_THRESHOLDS: Partial<Record<keyof MapLayers, { minZoom; showLabels? }>> = {
  bases:       { minZoom: 3, showLabels: 5 },
  nuclear:     { minZoom: 3 },
  conflicts:   { minZoom: 1, showLabels: 3 },
  datacenters: { minZoom: 5 },
  // ...
};
```

### 4.7 Deferred Heavy Commit

**File:** `src/components/DeckGLMap.ts:1777` (line 1777) + `src/components/map/deferred-layer-commit.ts`

Heavy layers (conflict-zone GeoJSON tessellation) use a two-phase commit: the initial `buildLayers()` renders placeholder data, then a `requestAnimationFrame` callback commits the real geometry to avoid jank.

### 4.8 Viewport Culling

**File:** `src/components/DeckGLMap.ts:634-648` + `src/components/map/conflict-zone-cull.ts`

Conflict zones and country choropleths are pre-indexed with bounding boxes (`BoundedFeature[]`), then viewport-culled before GeoJSON construction:
```ts
private conflictZoneBounded: BoundedFeature[] | null = null;   // line 637
private countriesBounded: BoundedFeature[] | null = null;      // line 646
```

---

## 5. GlobeMap Rendering {#globemap}

### 5.1 Class Structure

**File:** `src/components/GlobeMap.ts:475-3796`

`GlobeMap` uses `globe.gl` (a Three.js-based globe library) instead of deck.gl + MapLibre. It directly creates ring/circle/arc markers on the 3D globe surface.

### 5.2 Data Ingestion

**File:** `src/components/GlobeMap.ts:507-544`

The GlobeMap stores data in typed arrays (e.g., `hotspots: HotspotMarker[]`, `flights: FlightMarker[]`, etc.) and uses an internal marker convention (`_kind`, `_lat`, `_lng`).

### 5.3 `ensureStaticDataForLayer()`

**File:** `src/components/GlobeMap.ts:2327-2396`

A `switch` statement that lazily loads static config data when a layer is first toggled ON:

```ts
private ensureStaticDataForLayer(layer: keyof MapLayers): void {
  switch (layer) {
    case 'bases':      this.setMilitaryBaseMarkers(getCachedMilitaryBases()); break;
    case 'nuclear':    this.nuclearSiteMarkers = NUCLEAR_FACILITIES.filter(...).map(...); break;
    case 'irradiators': this.irradiatorSiteMarkers = GAMMA_IRRADIATORS.map(...); break;
    case 'spaceports':  this.spaceportSiteMarkers = SPACEPORTS.filter(...).map(...); break;
    case 'economic':    this.economicMarkers = ECONOMIC_CENTERS.map(...); break;
    // ...
  }
}
```

This is called from:
- `initStaticLayers()` (:2321) — on initialization for all currently-enabled layers
- `setLayers()` (:2705) — when a layer is toggled ON by the user

### 5.4 Layer Compatibility

The GlobeMap only renders layers whose `renderers` array includes `'globe'`. Layers with `deckGLOnly: true` or `renderers: ['flat']` are hidden from the globe picker entirely (`getLayersForVariant` at :351-357 filters them out).

---

## 6. Map.ts (SVG Fallback) {#svg-fallback}

### 6.1 Class Structure

**File:** `src/components/Map.ts:117-4455`

`MapComponent` renders layers as SVG elements (`<circle>`, `<path>`, `<polyline>`) inside a D3-like transform system. It's used for mobile and as a fallback when WebGL is unavailable.

### 6.2 Key Types

**File:** `src/components/Map.ts:79-92`

```ts
export type MapView = 'global' | 'america' | 'mena' | 'eu' | 'asia' | 'latam' | 'africa' | 'oceania';

export interface MapState {
  zoom: number;
  pan: { x: number; y: number };
  view: MapView;
  layers: MapLayers;
  timeRange: TimeRange;
}
```

### 6.3 ASYNC_DATA_LAYERS

**File:** `src/components/Map.ts:3708-3710`

A set of layer keys that require async data loading. When toggled ON, a loading spinner appears until data arrives:
```ts
private static readonly ASYNC_DATA_LAYERS: Set<keyof MapLayers> = new Set([
  'natural', 'weather', 'outages', 'ais', 'protests', 'flights', 'military', 'techEvents',
]);
```

---

## 7. MapContainer: Renderer Selection {#mapcontainer}

**File:** `src/components/MapContainer.ts`

`MapContainer` is a lightweight shell that:
1. Renders a stable placeholder DOM while the renderer loads
2. Dynamically imports the appropriate renderer class
3. Proxies all data calls (`setEarthquakes`, `setOutages`, etc.) to the active renderer
4. Handles renderer switching (e.g., user toggles Globe mode in Settings)

**Renderer selection decision tree:**
```
isMobileDevice() ───YES──→ MapComponent (SVG/D3)
       │
       NO
       │
globeMode enabled? ───YES──→ GlobeMap (globe.gl)
       │
       NO
       │
       └──→ DeckGLMap (deck.gl + MapLibre, default desktop)
```

---

## 8. MapView System (Region Presets) {#mapview}

### 8.1 Type Definition

Two parallel `MapView` types exist for the two flat renderers:
- `DeckMapView` in `DeckGLMap.ts:190`
- `MapView` in `Map.ts:79`

Both define the same 8 region keys:
```ts
type DeckMapView = 'global' | 'america' | 'mena' | 'eu' | 'asia' | 'latam' | 'africa' | 'oceania';
```

### 8.2 VIEW_PRESETS (DeckGLMap)

**File:** `src/components/DeckGLMap.ts:230-239`

Presets use long/lat/zoom for MapLibre's `flyTo()`:
```ts
const VIEW_PRESETS: Record<DeckMapView, { longitude: number; latitude: number; zoom: number }> = {
  global:  { longitude: 0,    latitude: 20,  zoom: 1.5 },
  america: { longitude: -95,  latitude: 38,  zoom: 3   },
  mena:    { longitude: 45,   latitude: 28,  zoom: 3.5 },
  eu:      { longitude: 15,   latitude: 50,  zoom: 3.5 },
  asia:    { longitude: 105,  latitude: 35,  zoom: 3   },
  latam:   { longitude: -60,  latitude: -15, zoom: 3   },
  africa:  { longitude: 20,   latitude: 5,   zoom: 3   },
  oceania: { longitude: 135,  latitude: -25, zoom: 3.5 },
};
```

### 8.3 viewSettings (Map.ts SVG)

**File:** `src/components/Map.ts:3690-3699`

The SVG fallback uses a pan-based coordinate system instead of lon/lat:
```ts
const viewSettings: Record<MapView, { zoom: number; pan: { x: number; y: number } }> = {
  global:  { zoom: 1,   pan: { x: 0,    y: 0    } },
  america: { zoom: 1.8, pan: { x: 180,  y: 30   } },
  mena:    { zoom: 3.5, pan: { x: -100, y: 50   } },
  eu:      { zoom: 2.4, pan: { x: -30,  y: 100  } },
  asia:    { zoom: 2.0, pan: { x: -320, y: 40   } },
  latam:   { zoom: 2.0, pan: { x: 120,  y: -100 } },
  africa:  { zoom: 2.2, pan: { x: -40,  y: -30  } },
  oceania: { zoom: 2.2, pan: { x: -420, y: -100 } },
};
```

### 8.4 `setView()` — DeckGLMap

**File:** `src/components/DeckGLMap.ts:5975-5998`

```ts
public setView(view: DeckMapView, zoom?: number): void {
  const preset = VIEW_PRESETS[view];
  if (!preset) return;
  this.state.view = view;
  this.state.zoom = zoom ?? preset.zoom;
  this.pendingCenter = { lat: preset.latitude, lon: preset.longitude };

  if (this.maplibreMap) {
    this.maplibreMap.flyTo({
      center: [preset.longitude, preset.latitude],
      zoom: this.state.zoom,
      duration: 1000,
    });
  }
  // Update dropdown
  const viewSelect = this.container.querySelector('.view-select') as HTMLSelectElement;
  if (viewSelect) viewSelect.value = view;
  this.onStateChange?.(this.getState());
}
```

### 8.5 `setView()` — Map.ts SVG

**File:** `src/components/Map.ts:3685-3706`

Same logical structure but applies a CSS/transform-based pan instead of `flyTo`:
```ts
public setView(view: MapView, zoom?: number): void {
  this.state.view = view;
  const settings = viewSettings[view];
  this.state.zoom = zoom ?? settings.zoom;
  this.state.pan = settings.pan;
  this.applyTransform();
  this.render();
}
```

### 8.6 UI Integration

The view dropdown (`<select class="view-select">`) is rendered in:
- `DeckGLMap.ts` (~5360): HTML button + select in the map chrome
- `Map.ts` equivalent section

Click handling (`DeckGLMap.ts:5389`):
```ts
this.setView(viewSelect.value as DeckMapView);
```

### 8.7 `fitCountry()`

**File:** `src/components/DeckGLMap.ts:6017-6026`

A separate method to fly-to a country by ISO code using bounding boxes from `getCountryBbox()`:
```ts
public fitCountry(code: string): void {
  const bbox = getCountryBbox(code);
  if (!bbox || !this.maplibreMap) return;
  const [minLon, minLat, maxLon, maxLat] = bbox;
  this.maplibreMap.fitBounds([[minLon, minLat], [maxLon, maxLat]], {
    padding: 40, duration: 800, maxZoom: 8,
  });
}
```

---

## 9. How to Add a New Map Layer {#add-layer}

**Example: Adding `hydrogen-stations`**

### Step 1: Add to `MapLayers` Type

**File:** `src/types/index.ts` (near line 708)

Add the new key to the `MapLayers` interface:
```ts
export interface MapLayers {
  // ...existing keys...
  hydrogenStations?: boolean;  // NEW
}
```
Use `?` (optional) so existing code in other variants doesn't break.

### Step 2: Register in `LAYER_REGISTRY`

**File:** `src/config/map-layer-definitions.ts` (near line 124)

Add an entry in the `LAYER_REGISTRY` object:
```ts
export const LAYER_REGISTRY: Record<keyof MapLayers, LayerDefinition> = {
  // ...existing...
  hydrogenStations: def('hydrogenStations', '⛽', 'hydrogenStations',
                         'Hydrogen Stations', ['flat'], undefined, true),
  //                     key              icon  i18nSuffix    fallback
  //                                       renderers=flat  premium=none  deckGLOnly=true
};
```

**Decision points:**
- `renderers`: `['flat']` for DeckGLMap-only; `['flat','globe']` if you're adding Globe support too
- `deckGLOnly`: `true` if no SVG/Globe fallback path exists (start here for new layers)
- `premium`: `'locked'` if Pro-gated, `'enhanced'` for partial gating, omit for free

### Step 3: Add to Variant Layer Order

**File:** `src/config/map-layer-definitions.ts` (near line 332)

Add the key to the relevant variant arrays in `VARIANT_LAYER_ORDER`:
```ts
const VARIANT_LAYER_ORDER: Record<MapVariant, Array<keyof MapLayers>> = {
  energy: [
    // ...existing...
    'hydrogenStations',  // NEW
  ],
};
```

### Step 4: Add to `DEFAULT_MAP_LAYERS`

**File:** `src/config/panels.ts` (near line 985)

Add to the variant's default layers object (e.g., `ENERGY_MAP_LAYERS`):
```ts
const ENERGY_MAP_LAYERS: MapLayers = {
  // ...existing...
  hydrogenStations: false,  // default OFF
};
```

### Step 5: Create Data Source

Option A — **Static config table** (like pipelines, cables):
Create a new file `src/config/hydrogen-stations.ts`:
```ts
export interface HydrogenStation {
  id: string; name: string; lat: number; lon: number;
  status: string; capacity: string; // ...
}
export const HYDROGEN_STATIONS: HydrogenStation[] = [
  { id: 'h2-1', name: 'Fukushima H2', lat: 37.4, lon: 141.0, status: 'operating', ... },
];
```

Option B — **Dynamic/API service** (like earthquakes, weather):
Create a service in `src/services/` that fetches data, then call `map.setHydrogenStations(data)` from the data loader.

Option C — **Redis-backed** (like storage facilities):
Create a seed script in `scripts/`, create a registry store in `src/shared/`, and hydrate from the cache.

### Step 6: Add Rendering in DeckGLMap

**File:** `src/components/DeckGLMap.ts`

**6a.** Add a data store field (~line 605):
```ts
private hydrogenStations: HydrogenStation[] = [];
```

**6b.** Add a public setter (~line 6819):
```ts
public setHydrogenStations(stations: HydrogenStation[]): void {
  this.hydrogenStations = stations;
  this.render();
}
```

**6c.** Add a rendering block in `buildLayers()` (~line 1920):
```ts
if (mapLayers.hydrogenStations && this.hydrogenStations.length > 0) {
  layers.push(this.createHydrogenStationsLayer());
}
```

**6d.** Implement `createHydrogenStationsLayer()`:
A method returning a `ScatterplotLayer` (points) or `IconLayer` (custom icons):
```ts
private createHydrogenStationsLayer(): ScatterplotLayer {
  return new ScatterplotLayer({
    id: 'hydrogen-stations',
    data: this.hydrogenStations,
    getPosition: d => [d.lon, d.lat],
    getFillColor: COLORS.startupHub,
    getRadius: 5,
    // ...
  });
}
```

### Step 7 (Optional): Add to GlobeMap

**File:** `src/components/GlobeMap.ts`

- Add a `hydrogenStationMarkers: H2Marker[]` data array (~line 540)
- Add a case to `ensureStaticDataForLayer()` (~line 2396)
- Add a public `setHydrogenStations()` method
- Render rings/circles in the marker flush pipeline

### Step 8 (Optional): Add to Map.ts SVG Fallback

**File:** `src/components/Map.ts`

- Add SVG rendering path for the layer
- Add to `ASYNC_DATA_LAYERS` if data is loaded asynchronously

### Step 9: Wire Up Data Loader

**File:** `src/app/data-loader.ts`

If dynamic, add a data-fetching function and call `this.ctx.map?.setHydrogenStations(data)`.

### Step 10: Register CMD+K Command

**File:** `src/config/commands.ts`

Add a command so users can toggle the layer via keyboard.

---

## 10. How to Add a New Region {#add-region}

### For DeckGLMap (deck.gl + MapLibre)

**1. Update `DeckMapView` type** (`src/components/DeckGLMap.ts:190`):
```ts
export type DeckMapView = 'global' | 'america' | 'mena' | 'eu' | 'asia' | 'latam' | 'africa' | 'oceania' | 'taiwan';
```

**2. Add to `VIEW_PRESETS`** (`src/components/DeckGLMap.ts:230-239`):
```ts
const VIEW_PRESETS: Record<DeckMapView, {...}> = {
  // ...existing...
  taiwan: { longitude: 121, latitude: 23.5, zoom: 7 },
};
```

**3. Update the UI dropdown** (`src/components/DeckGLMap.ts` ~5360):
Add an `<option value="taiwan">Taiwan</option>` to the `.view-select` element.

### For Map.ts SVG Fallback

**1. Update `MapView` type** (`src/components/Map.ts:79`):
```ts
export type MapView = 'global' | ... | 'taiwan';
```

**2. Add to `viewSettings`** (`src/components/Map.ts:3690-3699`):
```ts
taiwan: { zoom: 5.5, pan: { x: -280, y: 40 } },
```

### For Both Maps (TypeScript Safety)

Ensure all `switch`/`if-else` branches on `MapView` are exhaustive — TypeScript will flag unhandled cases.

---

## Appendix: Key File Index

| File | Purpose | Lines |
|------|---------|-------|
| `src/config/map-layer-definitions.ts` | Layer registry, variant order, synonyms, explanations | 526 |
| `src/types/index.ts` | `MapLayers` interface (line 632) | 1560 |
| `src/config/panels.ts` | `DEFAULT_MAP_LAYERS`, `LAYER_TO_SOURCE`, variant defaults | 1529 |
| `src/components/DeckGLMap.ts` | Primary WebGL renderer (deck.gl + MapLibre) | 7858 |
| `src/components/GlobeMap.ts` | 3D globe renderer (globe.gl / Three.js) | 3796 |
| `src/components/Map.ts` | SVG/D3 fallback for mobile | 4455 |
| `src/components/MapContainer.ts` | Renderer selection + proxy | 1590 |
| `src/config/geo.ts` | Hotspots, conflict zones, waterways (static) | 776 |
| `src/config/geo-map.ts` | Cables, nuclear, economic, spaceports, minerals, sanctions | 2745 |
| `src/config/pipelines.ts` | Pipeline network coordinates | 1035 |
| `src/config/ports.ts` | Strategic port locations | — |
| `src/config/irradiators.ts` | Gamma irradiator facilities | — |
| `src/config/trade-routes.ts` | Trade route waypoints | — |
| `src/config/military-bases.ts` | Military base locations (lazy chunk) | — |
| `src/config/ai-datacenters.ts` | AI data center locations | — |
| `src/config/tech-geo.ts` | Startup hubs, tech HQs, accelerators, cloud regions | — |
| `src/app/data-loader.ts` | Central data dispatch to map renderers | — |
| `src/config/index.ts` | Config barrel (tree-shaken per variant) | 164 |
| `src/components/map/conflict-zone-cull.ts` | Viewport culling for heavy GeoJSON | — |
| `src/components/map/deferred-layer-commit.ts` | Two-phase commit for heavy layers | — |
| `src/shared/fuel-shortage-registry-store.ts` | Redis-backed fuel shortage registry cache | — |
| `src/shared/pipeline-registry-store.ts` | Redis-backed pipeline registry cache | — |
| `src/shared/storage-facility-registry-store.ts` | Redis-backed storage facility registry cache | — |
