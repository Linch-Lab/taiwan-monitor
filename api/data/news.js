export default async function handler(req, res) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  if (!redisUrl) return res.json({ categories: {}, feedStatuses: {}, generatedAt: new Date().toISOString() });
  try {
    const r = await fetch(`${redisUrl}/get/news:digest:v1:taiwan`, { headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` } });
    const data = await r.json();
    const raw = JSON.parse(data.result || '{}');
    
    // Transform items to match ListFeedDigestResponse / NewsItem format
    const categories = {};
    for (const [cat, bucket] of Object.entries(raw.categories || {})) {
      categories[cat] = {
        items: (bucket.items || []).map(i => ({
          source: i.source || '',
          title: i.title || '',
          link: i.url || i.link || '',
          publishedAt: Date.parse(i.publishedAt) || Date.now(),
          isAlert: false,
          importanceScore: 5,
          corroborationCount: 1,
          snippet: i.snippet || '',
          tickers: [],
          threat: { level: 0, category: '', confidence: 0, source: '' },
          storyMeta: { firstSeen: Date.now(), mentionCount: 1, sourceCount: 1, phase: 'active' },
        }))
      };
    }
    
    res.json({
      categories,
      feedStatuses: {},
      generatedAt: new Date().toISOString(),
    });
  } catch (e) {
    res.json({ categories: {}, feedStatuses: {}, generatedAt: new Date().toISOString() });
  }
}
