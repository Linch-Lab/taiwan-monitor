// Vercel Cron: seed oil/energy data to Upstash Redis every 30 minutes
export const config = { runtime: 'edge' };

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || '';
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || '';
const CRON_SECRET = process.env.CRON_SECRET || 'taiwan-monitor-seed';

async function redisSet(key: string, value: string) {
  if (!REDIS_URL) return;
  await fetch(`${REDIS_URL}/set/${key}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, 'Content-Type': 'text/plain' },
    body: value,
  });
}

async function yahooQuote(symbol: string) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1mo`;
  const resp = await fetch(url);
  const data = await resp.json();
  const result = data.chart?.result?.[0];
  if (!result) return null;
  const quotes = result.indicators?.quote?.[0];
  const closes = quotes?.close?.filter(Boolean) || [];
  const latest = closes[closes.length - 1];
  const previous = closes[closes.length - 2] || latest;
  return {
    price: latest,
    change: latest - previous,
    changePercent: previous ? ((latest - previous) / previous * 100).toFixed(2) : 0,
    currency: 'USD',
    updatedAt: new Date().toISOString(),
  };
}

export async function GET(req: Request) {
  // Verify cron authorization
  const auth = req.headers.get('authorization') || '';
  if (auth !== `Bearer ${CRON_SECRET}`) {
    return Response.json({ error: 'Forbidden' }, { status: 403 });
  }

  const [wti, brent] = await Promise.all([
    yahooQuote('CL=F'),
    yahooQuote('BZ=F'),
  ]);

  // Store oil prices
  await redisSet('market:oil-prices', JSON.stringify({ wti, brent }));

  // Build inventory data (simplified — Yahoo doesn't provide EIA inventories)
  const weeks = wti ? [{ period: new Date().toISOString().slice(0, 7), value: wti.price, price: wti.price, unit: 'Price (USD)' }] : [];

  await redisSet('economic:crude-inventories:v1', JSON.stringify({
    weeks,
    latestPeriod: weeks[0]?.period || '',
    wtiPrice: wti?.price,
    brentPrice: brent?.price,
    updatedAt: new Date().toISOString(),
  }));

  return Response.json({ ok: true, wti, brent });
}
