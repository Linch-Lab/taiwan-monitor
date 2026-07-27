const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();
app.use(cors());
app.use(express.json());

let newsCache = { lastUpdated: null, articles: [] };

const RSS_FEEDS = [
  { name: 'CNA', url: 'https://www.cna.com.tw/cna2018api/api/W/rssxml/' },
  { name: 'LTN', url: 'https://news.ltn.com.tw/rss/all.xml' },
  { name: 'UDN', url: 'https://udn.com/rssfeed/news/1' },
  { name: 'Storm', url: 'https://www.storm.mg/rss/1/' },
  { name: 'Newtalk', url: 'https://newtalk.tw/rss' },
];

async function fetchAllFeeds() {
  const results = [];
  for (const feed of RSS_FEEDS) {
    try {
      const parsed = await parser.parseURL(feed.url);
      const items = (parsed.items || []).slice(0, 10).map(item => ({
        title: item.title,
        link: item.link,
        source: feed.name,
        pubDate: item.pubDate,
        snippet: (item.contentSnippet || item.content || '').substring(0, 200),
      }));
      results.push(...items);
    } catch (e) {
      console.error(`Feed ${feed.name} failed:`, e.message);
    }
  }
  newsCache = { lastUpdated: new Date().toISOString(), articles: results };
  console.log(`Fetched ${results.length} articles from ${RSS_FEEDS.length} feeds`);
}

// Fetch on startup
fetchAllFeeds();

// Cron every 30 minutes
cron.schedule('*/30 * * * *', fetchAllFeeds);

// API endpoint
app.get('/api/news', (req, res) => {
  res.json(newsCache);
});

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'taiwan-monitor-relay', lastUpdated: newsCache.lastUpdated, articleCount: newsCache.articles.length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Taiwan Monitor relay running on port ${PORT}`);
});
