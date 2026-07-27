#!/usr/bin/env bash
set -euo pipefail
cd "D:/taiwan-monitor/api"
LOGFILE="D:/taiwan-monitor/.scratch/wayfinder/T04-cleanup-log.md"

echo "# T04 Cleanup Log — Taiwan Monitor API Cleanup" > "$LOGFILE"
echo "" >> "$LOGFILE"
echo "**Timestamp:** $(date -Iseconds)" >> "$LOGFILE"
echo "" >> "$LOGFILE"

# === DIRECTORIES TO DELETE (recursively) ===
echo "## Deleted Directories" >> "$LOGFILE"
for d in \
  aviation batch conflict consumer-prices discord displacement \
  economic forecast giving imagery intelligence internal leads \
  mcp natural oauth positive-events prediction radiation \
  referral research sanctions scenario seismology skills \
  slack thermal trade unrest user v2 webcam youtube \
  me security data \
; do
  if [ -d "$d" ]; then
    echo "- \`api/$d/\`" >> "$LOGFILE"
    rm -r "$d"
  fi
done

# === INDIVIDUAL FILES TO DELETE ===
echo "" >> "$LOGFILE"
echo "## Deleted Files" >> "$LOGFILE"
for f in \
  a2a.ts agent-auth.ts ask.ts chat-analyst.ts \
  create-checkout.ts customer-portal.ts docs-mcp.ts download.js \
  fwdstart.js mcp.ts mcp-proxy.ts notification-channels.ts notify.ts \
  opensky.js oref-alerts.js polymarket.js product-catalog.js \
  reverse-geocode.js seed-contract-probe.ts story.js symbol-search.ts \
  user-prefs.ts version.js widget-agent.ts wm-session.js \
  wm-session.test.mjs product-catalog.test.mjs \
  oauth-authorization-server.ts oauth-protected-resource.ts \
  og-story.js og-story.test.mjs \
  not-found.ts cache-purge.js \
  http-message-signatures-directory.ts invalidate-user-api-key-cache.ts \
  api-route-exceptions.json \
  loaders-xml-wms-regression.test.mjs \
; do
  if [ -f "$f" ]; then
    echo "- \`api/$f\`" >> "$LOGFILE"
    rm "$f"
  fi
done

echo "" >> "$LOGFILE"
echo "## Post-Cleanup Summary" >> "$LOGFILE"
echo "- Entries: $(ls -1 | wc -l)" >> "$LOGFILE"
echo "- Directories: $(ls -1d */ 2>/dev/null | wc -l)" >> "$LOGFILE"  
echo "- Files: $(ls -1p | grep -v / | wc -l)" >> "$LOGFILE"
echo "" >> "$LOGFILE"
echo "## Remaining Entries" >> "$LOGFILE"
echo '```' >> "$LOGFILE"
ls -1 >> "$LOGFILE"
echo '```' >> "$LOGFILE"
echo "DONE" >&2
