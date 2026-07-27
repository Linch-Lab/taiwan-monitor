export default async function handler(req, res) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!redisUrl) return res.json({ error: 'no URL', keys: Object.keys(process.env) });
  try {
    const r = await fetch(`${redisUrl}/get/news:digest:v1:taiwan`, {
      headers: { Authorization: `Bearer ${redisToken}` }
    });
    const text = await r.text();
    const data = JSON.parse(text);
    const result = data.result;
    if (!result) return res.json({ error: 'null result', status: r.status, raw: text.substring(0, 100) });
    const digest = JSON.parse(result);
    return res.json(digest);
  } catch (e) {
    return res.json({ error: e.message, stack: e.stack });
  }
}
