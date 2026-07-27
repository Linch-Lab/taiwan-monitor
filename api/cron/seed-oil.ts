// Vercel Cron: seed oil inventories to Upstash Redis every 30 minutes
export const config = { runtime: 'edge' };

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || '';
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || '';
const EIA_KEY = process.env.EIA_API_KEY || '';

async function redisSet(key: string, value: string) {
  const url = `${REDIS_URL}/set/${key}`;
  return fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, 'Content-Type': 'text/plain' },
    body: value,
  });
}

export async function GET() {
  if (!EIA_KEY) return Response.json({ ok: false, error: 'No EIA_API_KEY' });

  // Fetch crude oil inventories from EIA
  const eiaUrl = `https://api.eia.gov/v2/petroleum/stoc/wstk/data/?api_key=${EIA_KEY}&facets[series][]=WCRSTUS1&sort[0][column]=period&sort[0][direction]=desc&length=52`;
  const resp = await fetch(eiaUrl);
  const data = await resp.json();

  const weeks = (data.response?.data || []).map((d: any) => ({
    period: d.period,
    value: d.value,
    unit: d.units || 'Million Barrels',
  }));

  const result = JSON.stringify({ weeks, latestPeriod: weeks[0]?.period || '', updatedAt: new Date().toISOString() });

  if (REDIS_URL) {
    await redisSet('economic:crude-inventories:v1', result);
  }

  return Response.json({ ok: true, weeks: weeks.length, cached: !!REDIS_URL });
}
