# Taiwan Monitor 領域詞彙

## 核心概念

- **面板 (Panel)**：儀表板中一個獨立的資料展示區塊。
- **圖層 (Layer)**：地圖上可獨立開關的視覺疊加層。
- **Mission**：預設面板 + 圖層組合。Taiwan Cluster 是預設。
- **Plugin**：台灣版特有程式碼，放 src/plugin-taiwan/，Vite alias 覆蓋引擎。

## 資料管線

- 新聞：RSS → Vercel Cron → Upstash Redis → Edge Function → 面板
- 能源：Vercel Cron → data.gov.tw → Upstash Redis → 面板
- 圖層：靜態 GeoJSON（每季更新）
