# ADR-0003: 能源資料源

## 決策

使用 data.gov.tw 作為台灣能源資料的單一來源，透過 Vercel Cron 定時抓取並存入 Upstash Redis。

## 原因

- 台電官網被 CloudFront 擋（自動化抓取不可行）
- data.gov.tw 是台灣政府開放資料的統一入口
- 提供備轉容量、發電量、能源比例等結構化資料

## 結果

- 需申請 data.gov.tw API key（免費）
- Vercel Cron 定時寫入 Upstash Redis
- 能源面板讀取 Redis 顯示即時/近即時資料
