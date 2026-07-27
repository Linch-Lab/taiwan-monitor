#!/usr/bin/env node
// Seed Taiwan Monitor news digest to Upstash Redis
const https = require('https');
const http = require('http');

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!REDIS_URL || !REDIS_TOKEN) {
  console.error('Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN');
  process.exit(1);
}

const FEEDS = [
  { name: 'CNA', url: 'https://www.cna.com.tw/cna2018api/api/W/rssxml/', category: 'taiwan-news' },
  { name: 'LTN', url: 'https://news.ltn.com.tw/rss/all.xml', category: 'taiwan-news' },
  { name: 'UDN', url: 'https://udn.com/rssfeed/news/1', category: 'taiwan-news' },
  { name: 'ChinaTW', url: 'https://news.google.com/rss/search?q=%E4%B8%AD%E5%9C%8B+%E5%8F%B0%E7%81%A3+when:1d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans', category: 'china-news' },
  { name: 'CrossStrait', url: 'https://news.google.com/rss/search?q=%E5%85%A9%E5%B2%B8+OR+%E5%8F%B0%E6%B5%B7+when:1d&hl=zh-TW&gl=TW&ceid=TW:zh-Hant', category: 'china-news' },
  { name: 'TaiwanNews', url: 'https://news.google.com/rss/search?q=Taiwan+when:1d&hl=en-US&gl=US&ceid=US:en', category: 'intl-cross-strait' },
  { name: 'ChinaTaiwan', url: 'https://news.google.com/rss/search?q=China+Taiwan+cross+strait+when:1d&hl=en-US&gl=US&ceid=US:en', category: 'intl-cross-strait' },
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'TaiwanMonitor/1.0' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseRSS(xml, name) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const b = m[1];
    const t = (b.match(/<title>(?:<!\[CDATA\[)?([^<\]]+)/)?.[1] || '').trim();
    const l = (b.match(/<link>([^<]+)<\/link>/)?.[1] || '').trim();
    const d = (b.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1] || '').trim();
    const desc = (b.match(/<description>(?:<!\[CDATA\[)?([^<\]]+)/)?.[1] || '').substring(0, 200);
    if (t && l) items.push({ title: t, url: l, source: name, publishedAt: d, snippet: desc });
  }
  return items;
}

async function redisSet(key, value) {
  await fetch(`${REDIS_URL}/set/${key}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, 'Content-Type': 'text/plain' },
    body: value,
  });
}

async function main() {
  const all = {};
  for (const feed of FEEDS) {
    try {
      const xml = await fetchUrl(feed.url);
      const items = parseRSS(xml, feed.name);
      if (!all[feed.category]) all[feed.category] = [];
      items.forEach(i => { i.category = feed.category; all[feed.category].push(i); });
      console.log(`  ${feed.name}: ${items.length} items`);
    } catch (e) { console.error(`  ${feed.name}: FAILED - ${e.message}`); }
  }
  const total = Object.values(all).flat().length;
  const digest = {
    updatedAt: new Date().toISOString(),
    totalItems: total,
    categories: Object.fromEntries(Object.entries(all).map(([k,v]) => [k, { items: v.slice(0, 30) }])),
    items: Object.values(all).flat().slice(0, 100),
  };
  await redisSet('news:digest:v1:taiwan', JSON.stringify(digest));
  console.log(`Done: ${total} items written to Redis`);
}
main().catch(e => { console.error(e); process.exit(1); });
