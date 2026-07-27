// Vercel Cron: seed Taiwan news digest to Upstash Redis every 30 min
export const config = { runtime: 'edge' };

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || '';
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || '';

const FEEDS: Array<{ name: string; url: string; category: string }> = [
  // Taiwan → taiwan-news panel
  { name: 'CNA', url: 'https://www.cna.com.tw/cna2018api/api/W/rssxml/', category: 'taiwan-news' },
  { name: 'LTN', url: 'https://news.ltn.com.tw/rss/all.xml', category: 'taiwan-news' },
  { name: 'UDN', url: 'https://udn.com/rssfeed/news/1', category: 'taiwan-news' },
  // China-TW → china-news panel
  { name: 'ChinaTW', url: 'https://news.google.com/rss/search?q=中國+台灣+when:1d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans', category: 'china-news' },
  { name: 'CrossStrait', url: 'https://news.google.com/rss/search?q=兩岸+OR+台海+when:1d&hl=zh-TW&gl=TW&ceid=TW:zh-Hant', category: 'china-news' },
  // International → intl-cross-strait panel
  { name: 'TaiwanNews', url: 'https://news.google.com/rss/search?q=Taiwan+when:1d&hl=en-US&gl=US&ceid=US:en', category: 'intl-cross-strait' },
  { name: 'ChinaTaiwan', url: 'https://news.google.com/rss/search?q=China+Taiwan+cross+strait+when:1d&hl=en-US&gl=US&ceid=US:en', category: 'intl-cross-strait' },
];

interface NewsItem {
  title: string; url: string; source: string; category: string;
  publishedAt: string; snippet: string;
}

async function redisSet(key: string, value: string) {
  if (!REDIS_URL) return;
  await fetch(`${REDIS_URL}/set/${key}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, 'Content-Type': 'text/plain' },
    body: value,
  });
}

async function parseRSS(feed: typeof FEEDS[0]): Promise<NewsItem[]> {
  try {
    const resp = await fetch(feed.url);
    const text = await resp.text();
    const items: NewsItem[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(text)) !== null) {
      const block = match[1];
      const title = (block.match(/<title>(?:<!\[CDATA\[)?([^<\]]+)/)?.[1] || '').trim();
      const link = (block.match(/<link>([^<]+)<\/link>/)?.[1] || '').trim();
      const pubDate = (block.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1] || '').trim();
      const desc = (block.match(/<description>(?:<!\[CDATA\[)?([^<\]]+)/)?.[1] || '').trim();
      if (title && link) items.push({ title, url: link, source: feed.name, category: feed.category, publishedAt: pubDate || new Date().toISOString(), snippet: desc.substring(0, 200) });
    }
    return items;
  } catch (e) { console.error(feed.name, e); return []; }
}

export async function GET() {
  const allItems: NewsItem[] = [];
  for (const feed of FEEDS) { allItems.push(...await parseRSS(feed)); }

  const byCat: Record<string, NewsItem[]> = {};
  for (const item of allItems) {
    if (!byCat[item.category]) byCat[item.category] = [];
    byCat[item.category].push(item);
    // Also add to politics so World News panel shows Taiwan news
    if (!byCat['politics']) byCat['politics'] = [];
    byCat['politics'].push({...item, category: 'politics'});
  }

  const digest = {
    updatedAt: new Date().toISOString(),
    totalItems: allItems.length,
    categories: Object.fromEntries(Object.entries(byCat).map(([k,v])=>[k,{items:v.slice(0,30)}])),
    items: allItems.slice(0, 100),
  };

  await redisSet('news:digest:v1:taiwan', JSON.stringify(digest));
  return Response.json({ ok: true, items: allItems.length });
}
