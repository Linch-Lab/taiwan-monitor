# Taiwan Monitor — Wayfinder 地圖

## Destination
一週內部署台灣視角全球情報平台到 Hostinger（你的自有網域），從 WorldMonitor fork，AGPL-3.0 開源。

## Notes
- 基礎：WorldMonitor v2.10.0（TypeScript + Vite + deck.gl）
- 後端：Supabase Edge Functions + Render relay + Upstash Redis
- 前端部署：Hostinger 靜態（LiteSpeed）
- AI：DeepSeek chat API（主題聚類，非立場判斷）
- 氫能層：全球加氫站 + 綠氫生產據點（特色強化）

## Decisions so far
1. ✅ Fork WorldMonitor，保留 19 核心 API，砍 50+
2. ✅ 中文化 + 台灣/中國新聞源（含央視、新華社）
3. ✅ 全球氫能站地圖層
4. ✅ 台股金融連動
5. ✅ DeepSeek API 替代 Ollama/Groq 鏈
6. ✅ AGPL-3.0 授權
7. ✅ 一週部署上線

## Not yet specified
- 氫能站資料源（API 或靜態 JSON）
- 台股指數 API（台灣證券交易所？FinMind？）
- 中國新聞 RSS 可用性（需測試）

## Out of scope
- Tauri 桌面應用
- MCP 伺服器
- 收費/Paywall
- 多語言（僅繁體中文）
- 加密貨幣
- 衛星追蹤
- 航空追蹤
