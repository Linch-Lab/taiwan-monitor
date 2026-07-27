# T04 — Fork WorldMonitor 並清理程式碼庫

**type:** task（AFK）

## 問題
Fork WorldMonitor 後，砍掉 50+ 不需要的 API 功能，保留 19 核心。

## 步驟
1. git clone WorldMonitor 到 `D:\taiwan-monitor\`
2. 刪除不需要的 api/ 目錄（conflict, unrest, aviation, discord, slack 等）
3. 刪除不需要的 panels（加密貨幣、ETF、NATO 等）
4. 刪除不需要的 map layers
5. 保留 19 個核心 API 功能
6. 驗證 `npm install && npm run build` 仍可編譯
7. git init 為新 repo

## 輸出
- 可編譯的最小化程式碼庫
- `D:\taiwan-monitor\.scratch\wayfinder\T04-cleanup-log.md` 記錄砍掉的項目清單
