// Taiwan Monitor: news endpoint — reads from Upstash Redis
export default async function handler(req, res) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!redisUrl) return res.status(200).json({ categories: {}, items: [] });
  try {
    const r = await fetch(`${redisUrl}/get/news:digest:v1:taiwan`, { headers: { Authorization: `Bearer ${redisToken}` } });
    const data = await r.json();
    const digest = JSON.parse(data.result || '{}');
    return res.status(200).json(digest);
  } catch (e) {
    return res.status(200).json({ categories: {}, items: [] });
  }
}
