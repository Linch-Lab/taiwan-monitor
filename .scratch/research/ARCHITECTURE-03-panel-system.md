# ARCHITECTURE-03: Panel System Architecture

> Researched from WorldMonitor codebase at `D:\taiwan-monitor`
> Topic: Panel definition, registration, lifecycle, data binding, lazy loading, persistence, and custom panel creation. All claims cite exact file + line number.

---

## 1. Panel Definition — `src/config/panels.ts`

### 1.1 The `PanelConfig` interface

Defined in `src/types/index.ts:639-644`:

```ts
export interface PanelConfig {
  name: string;
  enabled: boolean;
  priority?: number;           // Lower = higher priority; determines panel order
  premium?: 'locked' | 'enhanced'; // Gating tier
}
```

### 1.2 Variant-based panel sets

The codebase supports 6 site variants, each with its own dedicated panel record:

| Variant | Constant | Lines | Description |
|---|---|---|---|
| `full` | `FULL_PANELS` | 24–133 | Geopolitical: ~109 panels |
| `tech` | `TECH_PANELS` | 268–309 | Tech/AI/Startups: ~42 panels |
| `finance` | `FINANCE_PANELS` | 439–511 | Markets/Trading: ~72 panels |
| `commodity` | `COMMODITY_PANELS` | 764–820 | Commodities/Mining: ~57 panels |
| `energy` | `ENERGY_PANELS` | 951–986 | Energy infrastructure: ~35 panels |
| `happy` | `HAPPY_PANELS` | 640–651 | Good news & progress: 10 panels |

Each variant also has its own `*_MAP_LAYERS` and `*_MOBILE_MAP_LAYERS` constants.

Example entry from `FULL_PANELS` (`panels.ts:24-25`):
```ts
map: { name: 'Global Map', enabled: true, priority: 1 },
'live-news': { name: 'Live News', enabled: true, priority: 1 },
```

### 1.3 Unified registry & variant selection

**Cross-variant master registry** — `panels.ts:1132-1139`:
```ts
export const ALL_PANELS: Record<string, PanelConfig> = {
  ...HAPPY_PANELS, ...COMMODITY_PANELS, ...ENERGY_PANELS,
  ...TECH_PANELS, ...FINANCE_PANELS, ...FULL_PANELS,
};
```
Later-spread variants win on key collision; FULL_PANELS is the last spread and thus canonical for shared keys.

**Variant-to-defaults mapping** — `panels.ts:1116-1149`:
```ts
const VARIANT_PANEL_CONFIGS: Record<PanelVariant, Record<string, PanelConfig>> = { ... };
export const VARIANT_DEFAULTS: Record<string, string[]> = {
  full: Object.keys(VARIANT_PANEL_CONFIGS.full), ...
};
```

**Runtime variant selection** — `panels.ts:1302-1306`:
```ts
export const DEFAULT_PANELS: Record<string, PanelConfig> = Object.fromEntries(
  (VARIANT_DEFAULTS[SITE_VARIANT] ?? VARIANT_DEFAULTS['full'] ?? [])
    .map(key => [key, getEffectivePanelConfig(key, SITE_VARIANT)])
);
```
`SITE_VARIANT` is a build-time constant from `src/config/variant.ts`. The `getEffectivePanelConfig` function (`panels.ts:1185-1190`) applies variant-specific display overrides (name, premium flags) from `VARIANT_PANEL_OVERRIDES` (`panels.ts:1155-1179`).

### 1.4 Premium / entitlement gating

**`isPanelEntitled()`** — `panels.ts:1239-1251`:
```ts
export function isPanelEntitled(key: string, config: PanelConfig, isPro = false): boolean {
  if (!config.premium) return true;
  if (isEntitled()) return true;  // Dodo entitlements unlock everything
  const apiKeyPanels = ['stock-analysis', ...];
  if (apiKeyPanels.includes(key)) {
    return getSecretState('WORLDMONITOR_API_KEY').present || isPro;
  }
  if (config.premium === 'locked') return isDesktopRuntime();
  return true;
}
```
API-key-entitled panels (Stock Analysis, Backtest, Brief, Chat Analyst, etc.) gate on either a desktop runtime or a valid API key. `premium: 'enhanced'` panels gate only on desktop (e.g., `cii`, `strategic-risk`, `supply-chain` in FULL_PANELS).

### 1.5 Free-tier panel cap

**`enforceFreePanelLimit()`** — `panels.ts:1269-1297`:
- `FREE_MAX_PANELS = 40` (line 1207)
- The map panel and `cw-*` (custom widget) keys are excluded from counting (`isFreePanelCapCounted`, line 1210-1212)
- Panels are sorted by priority (ascending) then key name; lowest-priority panels past the cap get `enabled: false`
- Applied at every tab write and storage persist to prevent over-cap layouts

---

## 2. Panel Registration — `src/app/panel-layout.ts`

### 2.1 PanelLayoutManager overview

`PanelLayoutManager` implements the `AppModule` interface (`panel-layout.ts:334`). It is constructed with an `AppContext` and callbacks and is the single owner of all panel lifecycle: registration, mounting, gating, drag-and-drop, tab management, and hydration scheduling.

### 2.2 The panel settings map

`ctx.panelSettings: Record<string, PanelConfig>` is the runtime truth for which panels exist and whether they're enabled. It is:

- **Initialized** in `App.ts` (passed to the constructor) by merging `DEFAULT_PANELS` with persisted localStorage under the key `'worldmonitor-panels'` (`STORAGE_KEYS.panels` at `panels.ts:1529`)
- **Persisted** via `saveToStorage(STORAGE_KEYS.panels, ...)` on every tab operation (`panel-layout.ts:1261`)
- **Cross-tab synced** via `window.addEventListener('storage', ...)` in `event-handlers.ts:536-555` — when another tab changes panels, `ctx.panelSettings` is replaced and `applyPanelSettings()` is called

### 2.3 Should-create guard

**`shouldCreatePanel(key)`** — `panel-layout.ts:1474-1476`:
```ts
private shouldCreatePanel(key: string): boolean {
  return Object.prototype.hasOwnProperty.call(this.ctx.panelSettings, key);
}
```
A panel is only instantiated if its key exists in `panelSettings`. This is the gate for all `lazyPanel()` calls.

### 2.4 `createPanels()` — the main entry point

`createPanels()` (`panel-layout.ts:1789`) is called during boot. It:

1. **Pre-fetches the map module** (`import('@/components/MapContainer')`) concurrently with panel registration (line 1808)
2. **Registers news panels** via `createNewsPanel()` — e.g., `politics`, `taiwan-news`, `china-news`, etc. (lines 1810-1816)
3. **Registers feature panels** via `lazyDefaultPanel`, `lazyImportedPanel`, or `lazyPanel` for ~80+ panel keys (lines 1818-2310)
4. **Registers custom widget panels** (`cw-*`) from persisted widget store
5. **Registers MCP panels** (`mcp-*`) from MCP store

### 2.5 News panel creation

**`createNewsPanel(key, labelKey)`** — `panel-layout.ts:1482-1484`:
```ts
private createNewsPanel(key: string, labelKey: string): void {
  this.createNewsPanelWithLabel(key, t(labelKey), ...);
}
```

**`createNewsPanelWithLabel()`** — `panel-layout.ts:1486-1509`:
- Dynamic-imports `NewsPanel` from `@/components/NewsPanel`
- Constructs `new NewsPanel(panelKey, label, tooltip)`
- Attaches `relatedAsset` handlers and risk-score getter
- Registers in `ctx.newsPanels[categoryKey]`
- If existing news items exist in `ctx.newsByCategory`, renders them immediately

### 2.6 Premium gate sets

Two static sets control auth-based gating on the web surface:

**`WEB_PREMIUM_PANELS`** — `panel-layout.ts:111-122`:
```ts
const WEB_PREMIUM_PANELS = new Set([
  'stock-analysis', 'stock-backtest', 'daily-market-brief',
  'market-implications', 'deduction', 'chat-analyst',
  'wsb-ticker-scanner', 'latest-brief', 'regional-intelligence',
  'trade-policy', 'global-procurement',
]);
```
Without auth, these panels render a lock CTA instead of mounting.

**`WEB_CLERK_PRO_ONLY_PANELS`** — `panel-layout.ts:138-140`:
```ts
const WEB_CLERK_PRO_ONLY_PANELS = new Set(['latest-brief']);
```
These require a Clerk-authenticated PRO account specifically (server-side is keyed by Clerk userId).

### 2.7 Deferred panel footprint registry

**`DEFERRED_PANEL_NATURAL_FOOTPRINTS`** — `panel-layout.ts:155-184`:
Maps panel keys to their natural row/col spans for deferred shell creation. Example:
```ts
cii: { rowSpan: 2 },
'china-corridors': { rowSpan: 2, className: 'panel-wide' },
'live-news': { className: 'panel-wide' },
```
This must match the panel constructor's `defaultRowSpan` and `className` — drift is caught by CI (`tests/panel-config-guardrails.test.mjs`) and dev-only console warnings (`warnOnDeferredFootprintDrift`, line 212-224).

---

## 3. Panel Base Class — `src/components/Panel.ts`

### 3.1 Constructor (`Panel.ts:168-307`)

```ts
constructor(options: PanelOptions) {
  this.panelId = options.id;
  // Creates DOM tree: .panel > .panel-header + .panel-content
  // Header: title span + severity dot + freshness badge + info tooltip + PRO badge + count + collapse/close buttons
  // Content: .panel-content div
  // Adds vertical resize handle (.panel-resize-handle)
  // Adds horizontal resize handle (.panel-col-resize-handle)
  // Applies defaultRowSpan class
  // Restores saved row span, col span, and collapsed state
  // Calls this.showLoading()
}
```

`PanelOptions` (`Panel.ts:33-44`):
```ts
export interface PanelOptions {
  id: string;
  title: string;
  showCount?: boolean;
  className?: string;         // e.g., 'panel-wide' for 2-col default
  trackActivity?: boolean;    // Enables "new" badge
  infoTooltip?: string;
  premium?: 'locked' | 'enhanced';
  closable?: boolean;
  collapsible?: boolean;
  defaultRowSpan?: number;    // 1-4
}
```

### 3.2 Key DOM structure built by constructor

```
div.panel [data-panel=id]
  div.panel-header
    div.panel-header-left
      span.panel-title        ← options.title
      span.panel-severity-dot ← severity indicator (hidden when 'none')
      span.panel-freshness-badge ← auto-subscribes to dataFreshness (60s refresh)
      [button.panel-info-btn] ← if options.infoTooltip
      [span.panel-pro-badge]  ← if premium and no API key
    span.panel-data-badge      ← setDataBadge() (live/cached/unavailable)
    [span.panel-count]         ← if options.showCount
    [button.panel-collapse-btn] ← if options.collapsible
    [button.panel-close-btn]   ← if options.closable !== false
  div.panel-content#${id}Content
  div.panel-resize-handle      ← vertical (row span) resize
  div.panel-col-resize-handle  ← horizontal (col span) resize
```

### 3.3 Lifecycle state machine

```
Constructor → showLoading()
                    ↓
              loadRegisteredPanel()
                    ↓
         ┌─────────┼─────────┐
         ↓         ↓         ↓
   showLocked   setContent  showError
   (premium)    (data)      (failure)
         ↓                     ↓
   unlockPanel            showRetrying
                              ↓
                         setContent
                              ↓
                         destroy()
```

**`showLoading(message)`** — line 845: Renders radar animation + loading text. Guarded by `_locked`.

**`showError(message, onRetry, autoRetrySeconds)`** — line 860: Renders error radar + message + countdown. Auto-retry uses exponential backoff (`Math.min(15 * 2^attempt, 180)` seconds).

**`showRetrying(message, countdownSeconds)`** — line 1092: Explicit retry state with countdown.

**`showLocked(features)`** — line 913: Saves content snapshot, hides content-area siblings, adds `panel-is-locked` class, renders lock icon + "Upgrade to Pro" CTA. Used pre-auth (desktop/web premium panels).

**`showGatedCta(reason, onAction)`** — line 1008: Auth-aware locked state. Renders contextual CTAs: "Sign In" (ANONYMOUS), "Upgrade to Pro" (FREE_TIER), "Update Payment" (PAYMENT_ON_HOLD), "Refresh Status" (RENEWAL_PENDING), "Manage Billing" (RENEWAL_FAILED), "Resubscribe" (LAPSED). Deduplicated by `_lastGateReason`.

**`unlockPanel()`** — line 1043: Removes lock state, re-attaches saved DOM nodes (preserving listeners and subclass references), clears snapshot.

**`destroy()`** — line 1317: Aborts AbortController, cancels timers, disconnects observers, removes document/window listeners, clears content snapshot.

### 3.4 Content rendering with debounce

**`setContentHtml(html, afterUpdate?)`** — `Panel.ts:1187-1212`:
Content updates are batch-debounced at 150ms (`contentDebounceMs`, line 139). If the same HTML is pending, only the callback updates. If the current innerHTML already matches, the callback fires immediately without DOM mutation.

**`setContentImmediate(html)`** — `Panel.ts:1214-1227`:
Forces immediate render (used by the debounce timer). Uses `setTrustedHtml()`.

### 3.5 Viewport-aware loading

**`observeNearViewport(callback, marginPx=200)`** — `Panel.ts:786-815`:
Uses `IntersectionObserver` to fire `callback` once when the panel scrolls near the viewport. Idempotent — repeat calls are ignored.

**`runWhenConnected(callback)`** — `Panel.ts:720-730`:
If the element is already connected, fires immediately. Otherwise queues the callback. `notifyConnected()` (`Panel.ts:732-734`) is called by `mountPanelElement()` to flush queued callbacks.

**`canHostLiveMedia()`** — `Panel.ts:714-718`:
Returns true only when connected, not hidden, and not collapsed — prevents media creation in invisible content areas.

### 3.6 Resize system

**Row (height) resize**: `panel-resize-handle` — drag changes `span-1` through `span-4` class. Saves via `savePanelSpan()` to localStorage key `'worldmonitor-panel-spans'`. Double-click resets. Supports both mouse and touch.

**Column (width) resize**: `panel-col-resize-handle` — drag changes `col-span-1` through `col-span-3`. Saves via `savePanelColSpan()` to localStorage key `'worldmonitor-panel-col-spans'`. Double-click resets. Enforces `maxColSpan` from grid CSS custom property.

### 3.7 Data freshness badge

**`updateFreshnessBadge()`** — `Panel.ts:637-649`:
Subscribes to `dataFreshness` service in constructor. Refreshes every 60s (`FRESHNESS_BADGE_REFRESH_MS`, line 52). Shows age-colored badge (green/amber/red) with tooltip.

### 3.8 Content snapshot for lock/unlock

**`_snapshotContentForRestore()`** — `Panel.ts:1087-1090`:
Captures `this.content.childNodes` as DOM nodes on first lock transition. The cache is never overwritten during re-entrant lock states and only cleared by `unlockPanel()` or `destroy()`.

**`clearSensitiveContent()`** — `Panel.ts:1072-1081`:
Drops the snapshot, pending HTML, and clears the content DOM — called on sign-out or downgrade so `unlockPanel()` cannot resurrect pre-entitlement data.

### 3.9 Retry and error state

**`setRetryCallback(fn)`** — line 1134: Panels can set a retry function; the content div listens for clicks on `[data-panel-retry]` (`Panel.ts:270-274`).

**`setErrorState(hasError, tooltip?)`** — line 1174: Toggles `panel-header-error` class on header.

**`setFetching(v)`** — line 1138: Disables retry button during active fetch.

**`clearErrorState()`** — line 907: Drops error badge, countdown, and backoff — called by panels that bypass `setContentHtml`.

---

## 4. Lazy Panel Loading

### 4.1 Three-tier lazy API

The panel-layout offers three laziness levels:

| Method | Lines | Purpose |
|---|---|---|
| `lazyPanel()` | 3102–3137 | Core: registers a load function |
| `lazyImportedPanel()` | 3076–3090 | Dynamic import + custom factory |
| `lazyDefaultPanel()` | 3092–3100 | Sugar: dynamic import + `new PanelClass()` |

### 4.2 `lazyPanel()` — the core

```ts
private lazyPanel<T extends Panel>(
  key: string,
  loader: () => Promise<T | null>,
  setup?: (panel: T) => void,
  lockedFeatures?: string[],
): void {
  if (!this.shouldCreatePanel(key)) return;
  if (this.ctx.panels[key] || this.lazyPanelRegistrations.has(key)) return;
  this.lazyPanelRegistrations.set(key, {
    loading: null,
    load: async () => {
      if (this.ctx.isDestroyed) return null;
      const panel = await loader();
      if (!panel) return null;
      if (this.ctx.isDestroyed) { panel.destroy?.(); return null; }
      this.ctx.panels[key] = panel;
      if (lockedFeatures) {
        panel.showLocked(lockedFeatures);
      } else {
        this.updatePanelGating(getAuthState());  // Re-apply auth gating
        await replayPendingCalls(key, panel);     // Replay queued data
        if (this.ctx.isDestroyed) { panel.destroy?.(); return null; }
        if (setup) setup(panel);
      }
      return panel;
    },
  });
}
```

Key behaviors:
- **Prevents double registration**: checks `ctx.panels[key]` and `lazyPanelRegistrations.has(key)`
- **Destroy guard**: checks `ctx.isDestroyed` before and after async operations
- **Pending call replay**: `replayPendingCalls(key, panel)` replays any data calls that arrived before the panel was loaded
- **Auth gating**: `updatePanelGating()` is called after load to apply current entitlement state

### 4.3 `lazyImportedPanel()` — dynamic import + custom factory

```ts
private lazyImportedPanel<M extends object, K extends keyof M & string>(
  key: string,
  importer: () => Promise<M>,
  exportName: K,
  createPanel: (PanelClass, module) => ImportedPanel | null,
  setup?, lockedFeatures?,
): void
```
(`panel-layout.ts:3076-3090`)

Used when panels need custom construction. Examples:
```ts
// MonitorPanel: custom constructor taking ctx.monitors
this.lazyImportedPanel('monitors', () => import('@/components/MonitorPanel'), 'MonitorPanel',
  (MonitorPanel) => {
    const panel = new MonitorPanel(this.ctx.monitors);
    panel.onChanged((monitors) => { /* persist */ });
    return panel;
  });

// LiveNewsPanel: custom creation with module-level extras
this.lazyImportedPanel('live-news', () => import('@/components/LiveNewsPanel'), 'LiveNewsPanel',
  (LiveNewsPanel, module) => {
    const panel = new LiveNewsPanel();
    /* wire module exports */
    return panel;
  });
```

### 4.4 `lazyDefaultPanel()` — sugar

```ts
private lazyDefaultPanel<M extends object, K extends keyof M & string>(
  key: string,
  importer: () => Promise<M>,
  exportName: K,
  setup?, lockedFeatures?,
): void {
  this.lazyImportedPanel(key, importer, exportName,
    (PanelClass) => new PanelClass() as ImportedPanel<M, K>,
    setup, lockedFeatures);
}
```
(`panel-layout.ts:3092-3100`)

Just calls `lazyImportedPanel` with a default `new PanelClass()` factory. Used for most feature panels:
```ts
this.lazyDefaultPanel('heatmap', () => import('@/components/MarketPanel'), 'HeatmapPanel');
this.lazyDefaultPanel('markets', () => import('@/components/MarketPanel'), 'MarketPanel');
this.lazyDefaultPanel('polymarket', () => import('@/components/PredictionPanel'), 'PredictionPanel');
```

### 4.5 `importPanel()` — the dynamic import helper

```ts
private async importPanel<M, K>(
  key: string, importer: () => Promise<M>,
  exportName: K, createPanel: (PanelClass, module) => ImportedPanel | null,
): Promise<ImportedPanel | null>
```
(`panel-layout.ts:3055-3074`)

Handles the dynamic import, validates the export, and returns the panel or null on failure.

### 4.6 `loadRegisteredPanel()` — deduplication

```ts
private async loadRegisteredPanel(key: string): Promise<Panel | null>
```
(`panel-layout.ts:3139-3161`)

Checks `ctx.panels[key]` first (already loaded). If not loaded but registered, calls `registration.load()`. The load promise is cached so concurrent callers share one load. On success, the registration is removed from the map.

### 4.7 Deferred mounting system

**`deferPanelMount(key, panel, grid, withShell)`** — `panel-layout.ts:1597`:
Creates a deferred mount entry with an optional placeholder shell. The shell is a lightweight DOM element that reserves grid space until the panel loads.

**`mountDeferredPanel(key, grid?)`** — `panel-layout.ts:1661`:
Triggers actual panel loading via `loadRegisteredPanel()`, then replaces the placeholder shell with the real panel element via `mountPanelElement()`.

**Deferred retry**: max 3 attempts with 1s delay (`DEFERRED_PANEL_RETRY_DELAY_MS`, `DEFERRED_PANEL_MAX_RETRY_ATTEMPTS`, lines 191-192).

**`mountPanelElement(grid, key, panel, placeholder?)`** — `panel-layout.ts:1571-1584`:
- Attaches drag-and-drop via `makeDraggable()`
- If a placeholder exists, replaces it inline; otherwise inserts by priority order
- Calls `panel.notifyConnected()` to flush queued `runWhenConnected` callbacks
- Applies mobile panel nav classes

The `DeferredPanelMount` interface (`panel-layout.ts:312-321`):
```ts
interface DeferredPanelMount {
  panel: Panel | null;
  placeholder: HTMLElement | null;
  observer: IntersectionObserver | null;  // Viewport-triggered loading
  mounted: boolean;
  loading: Promise<void> | null;
  retryTimer: ReturnType<typeof setTimeout> | null;
  retryAttempts: number;
  failed: boolean;
}
```

---

## 5. Panel Settings Persistence and Restore

### 5.1 Panel configuration persistence

**Storage key**: `'worldmonitor-panels'` — `STORAGE_KEYS.panels` (`panels.ts:1529`)

Stores the full `Record<string, PanelConfig>` map (which panels exist and whether enabled). Written:
- On tab switch / add / delete (`panel-layout.ts:1261`)
- On panel close from custom widget / MCP panels (`event-handlers.ts:568, 580`)
- On free-tier cap enforcement (always the clamped version)

Read on boot in `App.ts` and cross-tab via `storage` event listener (`event-handlers.ts:536-555`):
```ts
if (e.key === STORAGE_KEYS.panels && e.newValue) {
  this.ctx.panelSettings = JSON.parse(e.newValue);
  this.applyPanelSettings();
}
```

### 5.2 Panel layout persistence (`src/utils/panel-storage.ts`)

Three separate localStorage keys:

| Key | Constant | Line | Content |
|---|---|---|---|
| `'worldmonitor-panel-spans'` | `PANEL_SPANS_KEY` | 1 | `Record<string, number>` — row spans |
| `'worldmonitor-panel-col-spans'` | `PANEL_COL_SPANS_KEY` | 2 | `Record<string, number>` — col spans |
| `'worldmonitor-panel-collapsed'` | `PANEL_COLLAPSED_KEY` | 3 | `Record<string, boolean>` — collapsed state |

All use **in-memory caching** with `Object.freeze()` for immutability. Cache is invalidated via `window.addEventListener('storage', ...)` listener (`panel-storage.ts:13-21`).

**Save/load API** (`panel-storage.ts:48-164`):
- `loadPanelSpans()` / `savePanelSpan(id, span)` / `clearPanelSpan(id)`
- `loadPanelColSpans()` / `savePanelColSpan(id, span)` / `clearPanelColSpan(id)`
- `loadPanelCollapsed()` / `savePanelCollapsed(id, collapsed)`

### 5.3 Restore in Panel constructor

In the Panel constructor (`Panel.ts:266-268, 291-304`):

1. **Collapsed state**: If `loadPanelCollapsed()[this.panelId]` is true, applies collapsed state immediately
2. **Default row span**: Applies `span-N` class from `options.defaultRowSpan`
3. **Saved row span override**: `loadPanelSpans()[this.panelId]` wins over default
4. **Saved col span**: `restoreSavedColSpan()` (`Panel.ts:309-326`) applies saved col span, clear-and-store logic if same as natural
5. **Col span reattachment**: `reconcileColSpanAfterAttach()` (`Panel.ts:328-348`) retries up to 3 rAF frames waiting for grid column count to be ready

### 5.4 Tab system persistence

The dashboard tab system captures snapshots of the full panel state:
- `captureCurrentTabState()` (`panel-layout.ts:1138`): Saves `panelSettings`, `panelOrder`, and `bottomSet`
- Tabs are stored in localStorage via `saveTabsState()` / `loadTabsState()` (`src/services/tab-store.ts`)
- On tab switch, `applyTabPanelState()` replaces `ctx.panelSettings`, then `applyPanelSettings()` creates/destroys/toggles panels to match
- Free-tier clamping is applied to every tab snapshot on load and write (`panel-layout.ts:1105-1114`)

---

## 6. Adding a New Custom Panel with Filtered Content

### Step-by-step procedure

#### Step 1: Define in `src/config/panels.ts`

Add your panel key to the appropriate variant's panel set. For Taiwan Monitor (full variant), add to `FULL_PANELS`:

```ts
// In FULL_PANELS (panels.ts:24-133)
'taiwan-filtered-content': {
  name: 'Taiwan Filtered Content',
  enabled: true,
  priority: 1,  // Lower = appears earlier in grid
},
```

#### Step 2: Create the panel component

Create `src/components/TaiwanFilteredContentPanel.ts` extending the `Panel` base class:

```ts
import { Panel } from './Panel';
import type { PanelOptions } from './Panel';

export class TaiwanFilteredContentPanel extends Panel {
  constructor() {
    super({
      id: 'taiwan-filtered-content',
      title: 'Taiwan Filtered Content',
      className: 'panel-wide',      // 2-col default
      defaultRowSpan: 2,            // 2-row default
      collapsible: true,
      closable: true,
    });
  }

  // Override to add custom loading logic
  async loadData(): Promise<void> {
    this.showLoading();
    try {
      const response = await fetch('/api/taiwan-filtered-content');
      const data = await response.json();
      this.renderContent(data);
    } catch (err) {
      this.showError('Failed to load content', () => this.loadData());
    }
  }

  private renderContent(data: any): void {
    // Build HTML and set via inherited method
    const html = `<div>...</div>`;
    this.setContent(html);  // Calls setContentHtml with 150ms debounce
  }
}
```

Key inherited methods available:
- `showLoading()`, `showError()`, `showRetrying()` — lifecycle states
- `setContent()` (via `setContentHtml`) — debounced content rendering
- `setCount(n)` — updates the header count badge
- `setNewBadge(count, pulse)` — "new items" badge
- `setSeverity(level)` — severity dot (critical/high/medium/low/none)
- `setDataBadge(state, detail)` — live/cached/unavailable indicator
- `runWhenConnected(callback)` — defer execution until DOM-attached
- `observeNearViewport(callback)` — trigger on scroll proximity
- Protected `this.signal` — AbortSignal for fetch cancellation
- Protected `isAbortError(error)` — detect DOMException AbortError

#### Step 3: Register in `src/app/panel-layout.ts`

In `createPanels()` (`panel-layout.ts:1789`), add a lazy registration:

```ts
// For a simple default constructor panel:
this.lazyDefaultPanel(
  'taiwan-filtered-content',
  () => import('@/components/TaiwanFilteredContentPanel'),
  'TaiwanFilteredContentPanel'
);

// Or for custom construction/initialization:
this.lazyImportedPanel(
  'taiwan-filtered-content',
  () => import('@/components/TaiwanFilteredContentPanel'),
  'TaiwanFilteredContentPanel',
  (TaiwanPanel) => {
    const panel = new TaiwanPanel();
    // Optional: setup data callbacks, wire to context
    return panel;
  }
);
```

#### Step 4: Add to deferred footprint registry (if needed)

If your panel is `panel-wide` or has `defaultRowSpan > 1`, add to `DEFERRED_PANEL_NATURAL_FOOTPRINTS` (`panel-layout.ts:155-184`):

```ts
'taiwan-filtered-content': { rowSpan: 2, className: 'panel-wide' },
```

This ensures the deferred shell reserves the correct grid space before the panel loads. CI (`tests/panel-config-guardrails.test.mjs`) enforces consistency.

#### Step 5: Wire data flow

Panels receive data through one of these patterns:

1. **Self-fetching**: Panel calls its own API endpoint in `loadData()` — like `LatestBriefPanel`
2. **Replay system**: Panel exposes methods (e.g., `renderNews()`) and `replayPendingCalls()` replays data buffered in `pending-panel-data.ts` — used by `NewsPanel`, `CIIPanel`
3. **Refresh scheduler**: The `loadAllData` callback fires periodically; panels re-fetch their data

For content filtering, the standard approach is:
- Accept filter parameters via constructor options or setter methods
- Override `renderNews()` or create custom render method that applies filters
- Use the `filterItemsByTimeRange()` pattern (`panel-layout.ts:1500`) for time-based filtering

---

## 7. Key Architectural Patterns

### 7.1 Priority-based panel ordering

Panels are ordered by `priority` (ascending), then alphabetically by key. Insertion uses `insertByOrder()` (`panel-layout.ts`) which walks the grid children to find the correct position based on the `resolvedPanelOrder` array.

### 7.2 Module-scoped state vs. instance state

- **Panel DOM**: Fully instance-scoped. Each panel owns its DOM tree.
- **Panel settings**: Stored in `ctx.panelSettings` (shared module state, synced across tabs).
- **Data freshness**: Global `dataFreshness` singleton; panels subscribe in constructor.
- **Auth state**: Global `getAuthState()` / `subscribeAuthState()`; gating is applied reactively.

### 7.3 Safety guards

- **Destroy guard**: `ctx.isDestroyed` checked before and after every async operation in lazy loading (`panel-layout.ts:3113, 3117, 3128`)
- **Double-registration guard**: `ctx.panels[key]` and `lazyPanelRegistrations.has(key)` checks (`panel-layout.ts:3109`)
- **Lock guard**: All content-setting methods check `this._locked` before mutating DOM
- **Snapshot immutability**: `panel-storage.ts` uses `Object.freeze()` for all cached maps
- **Footprint drift**: Dev-only console warnings + CI test catch mismatches between deferred shells and real panels

### 7.4 Taiwan Monitor-specific panels

The Taiwan Monitor fork adds three custom news panels registered in `createPanels()` (`panel-layout.ts:1812-1814`):

```ts
this.createNewsPanelWithLabel('taiwan-news', '台灣新聞 Taiwan News', '台灣本地即時新聞', 'taiwan-news');
this.createNewsPanelWithLabel('china-news', '中國涉台新聞 China-TW News', '中國媒體涉台報導', 'china-news');
this.createNewsPanelWithLabel('intl-cross-strait', '國際涉台新聞 International', '國際媒體兩岸報導', 'intl-cross-strait');
```

These are standard `NewsPanel` instances with Traditional Chinese labels and tooltips, categorized separately from the main politics feed.

There is also a dedicated `TaiwanNewsPanel.ts` (`src/components/TaiwanNewsPanel.ts`) component.

---

## File Index

| File | Purpose | Key Lines |
|---|---|---|
| `src/types/index.ts` | `PanelConfig` interface | 639–644 |
| `src/config/panels.ts` | Panel definitions, variants, entitlements, free cap | 24–1534 |
| `src/config/variant.ts` | `SITE_VARIANT` build constant | — |
| `src/components/Panel.ts` | Base class: DOM, lifecycle, resize, gating | 102–1406 |
| `src/app/panel-layout.ts` | PanelLayoutManager: registration, lazy loading, deferred mount, tabs | 334–3569 |
| `src/utils/panel-storage.ts` | localStorage persistence for spans + collapsed state | 1–164 |
| `src/utils/panel-grid.ts` | Column span clamping utilities | — |
| `src/app/event-handlers.ts` | Cross-tab sync + panel close handling | 536–583 |
| `src/services/panel-gating.ts` | `PanelGateReason` enum, `getPanelGateReason()` | — |
| `src/services/data-freshness.ts` | `dataFreshness` singleton for freshness badges | — |
| `src/app/pending-panel-data.ts` | Buffered data replay for not-yet-loaded panels | — |
| `src/app/panel-mount-deferral.ts` | Deferred shell creation, IntersectionObserver hydration | — |
| `src/services/tab-store.ts` | Dashboard tab persistence (`loadTabsState`, `saveTabsState`) | — |
| `src/components/TaiwanNewsPanel.ts` | Taiwan-specific news panel | — |
