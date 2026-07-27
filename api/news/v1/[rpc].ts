// Taiwan Monitor: news RPC — reads from Upstash Redis
export const config = { runtime: 'edge' };

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || '';
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || '';

export async function POST() {
  if (!REDIS_URL) return Response.json({ ok: true, result: { categories: {}, items: [] } });

  try {
    const resp = await fetch(`${REDIS_URL}/get/news:digest:v1:taiwan`, {
      headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
    });
    const data = await resp.json();
    const digest = JSON.parse(data.result || '{}');
    return Response.json({ ok: true, result: digest });
  } catch {
    return Response.json({ ok: true, result: { categories: {}, items: [] } });
  }
}
