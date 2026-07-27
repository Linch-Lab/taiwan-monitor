const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();
app.use(cors());
app.use(express.json());

let newsCache = { lastUpdated: null, articles: [] };

const ALL_FEEDS = [
  // Taiwan direct RSS
  { name: 'CNA', url: 'https://www.cna.com.tw/cna2018api/api/W/rssxml/', region: 'tw' },
  { name: 'LTN', url: 'https://news.ltn.com.tw/rss/all.xml', region: 'tw' },
  { name: 'UDN', url: 'https://udn.com/rssfeed/news/1', region: 'tw' },
  { name: 'Storm', url: 'https://www.storm.mg/rss/1/', region: 'tw' },
  // Cross-Strait via Google News
  { name: 'Taiwan News', url: 'https://news.google.com/rss/search?q=Taiwan+when:1d&hl=en-US&gl=US&ceid=US:en', region: 'tw-en' },
  { name: '台灣新聞', url: 'https://news.google.com/rss/search?q=台灣+when:1d&hl=zh-TW&gl=TW&ceid=TW:zh-Hant', region: 'tw-zh' },
  { name: '中國新聞', url: 'https://news.google.com/rss/search?q=中國+when:1d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans', region: 'cn-zh' },
  { name: '兩岸新聞', url: 'https://news.google.com/rss/search?q=兩岸+OR+台海+when:1d&hl=zh-TW&gl=TW&ceid=TW:zh-Hant', region: 'xs' },
  { name: 'China-Taiwan', url: 'https://news.google.com/rss/search?q=China+Taiwan+cross+strait+when:1d&hl=en-US&gl=US&ceid=US:en', region: 'xs-en' },
];

async function fetchAllFeeds() {
  const results = [];
  for (const feed of ALL_FEEDS) {
    try {
      const parsed = await parser.parseURL(feed.url);
      const items = (parsed.items || []).slice(0, 10).map(item => ({
        title: item.title,
        link: item.link,
        source: feed.name,
        region: feed.region,
        pubDate: item.pubDate,
        snippet: (item.contentSnippet || item.content || '').substring(0, 200),
      }));
      results.push(...items);
    } catch (e) {
      console.error(`Feed ${feed.name} failed:`, e.message);
    }
  }
  newsCache = { lastUpdated: new Date().toISOString(), articles: results };
  console.log(`Fetched ${results.length} articles from ${ALL_FEEDS.length} feeds`);
}

fetchAllFeeds();
cron.schedule('*/30 * * * *', fetchAllFeeds);

app.get('/api/news', (req, res) => {
  const region = req.query.region;
  const data = region
    ? { ...newsCache, articles: newsCache.articles.filter(a => a.region === region) }
    : newsCache;
  res.json(data);
});

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'taiwan-monitor-relay', lastUpdated: newsCache.lastUpdated, articleCount: newsCache.articles.length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Taiwan Monitor relay running on port ${PORT}`));
