# ADR-0002: 地圖圖層資料策略

## 決策

台灣版新增圖層使用靜態 GeoJSON，不用 Redis 快取。

## 原因

- 氫能研究重鎮、加氫站、再生能源場域都是低頻更新資料（每季）
- Redis 快取對此類資料價值低，增加架構複雜度
- 靜態 GeoJSON 零延遲、零成本、零維護

## 結果

- 三個新圖層資料放 src/plugin-taiwan/
- 每季手動更新一次
- 不走 Vercel Cron / Upstash
- 每個圖層獨立 toggle
