export default async function handler(req, res) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  if (!redisUrl) return res.json({ error: 'no URL' });
  const r = await fetch(`${redisUrl}/get/news:digest:v1:taiwan`, { headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` } });
  const data = await r.json();
  res.json(JSON.parse(data.result || '{}'));
}
