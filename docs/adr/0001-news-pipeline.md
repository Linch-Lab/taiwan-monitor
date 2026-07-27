# ADR-0001: 新聞資料管線

## 決策

使用 Vercel Cron（定時）+ Upstash Redis（快取）架構，而非原版 Railway + Upstash。

## 原因

- Railway 免費層有限，且有 100 個種子服務的管理成本
- Vercel Cron 免費層足夠每 30 分鐘抓一次 RSS
- 台灣版新聞源數量遠少於原版（~10 vs ~200）

## 結果

- 省去 Railway 部署與維護
- 仍用 Upstash Redis 作快取層，保留原版快取架構
- 新聞面板資料格式相容原版 digest 結構
