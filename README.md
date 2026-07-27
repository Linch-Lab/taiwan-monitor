# Taiwan Monitor 台灣監視器

台灣視角全球情報平台——破除單一媒體控制，同一事件多方觀點並列。

## 願景

讓台灣民眾不再被單一媒體餵養。每個重大事件，同時呈現台灣媒體、中國官媒、西方媒體、日本媒體的不同報導角度。讀者自己判斷，不做立場標籤。

## 功能

- **全球 3D 地圖**：deck.gl + MapLibre GL 即時渲染
- **新聞聚合**：台灣媒體（中央社、自由、聯合、公視...）+ 國際媒體 + Google News RSS
- **AI 主題聚類**：DeepSeek API 自動將同事件不同報導歸類並列
- **氫能強化層**：全球加氫站地圖 + 綠氫生產據點（IEA + OpenStreetMap）
- **台股金融**：TWSE 加權指數即時報價（TWSE MIS API，免金鑰）
- **安全防禦**：台海 AIS 船舶、GPS 干擾、網路威脅、軍事動態
- **開源**：AGPL-3.0，任何人可 Fork 自建

## 技術棧

| 層 | 技術 |
|------|------|
| 前端 | Vanilla TypeScript + Vite + deck.gl + MapLibre GL |
| 後端 | Supabase Edge Functions + Render relay |
| AI | DeepSeek chat API（主題聚類） |
| 部署 | Hostinger 靜態（LiteSpeed）+ GitHub 自動部署 |
| 資料 | IEA Hydrogen DB + OpenStreetMap + TWSE MIS + Google News RSS |

## 快速開始

```bash
git clone https://github.com/Linch-Lab/taiwan-monitor.git
cd taiwan-monitor
npm install
npm run dev
```

## 部署

Hostinger 綁定 GitHub repo → 自動部署 → `taiwan-monitor.billlinch.com`

## 授權

AGPL-3.0 — 基於 [WorldMonitor](https://github.com/koala73/worldmonitor) 二次開發
