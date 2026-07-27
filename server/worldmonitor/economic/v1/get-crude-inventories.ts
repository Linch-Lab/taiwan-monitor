// Taiwan Monitor: read from Upstash Redis directly
import type { ServerContext, GetCrudeInventoriesRequest, GetCrudeInventoriesResponse } from '../../../../src/generated/server/worldmonitor/economic/v1/service_server';

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || '';
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || '';

async function redisGet(key: string) {
  try {
    const url = `${REDIS_URL}/get/${key}`;
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    return JSON.parse(data.result || 'null');
  } catch { return null; }
}

export async function getCrudeInventories(
  ctx: ServerContext,
  _req: GetCrudeInventoriesRequest,
): Promise<GetCrudeInventoriesResponse> {
  if (!REDIS_URL) return { weeks: [], latestPeriod: '' };
  const cached = await redisGet('economic:crude-inventories:v1');
  if (!cached?.weeks?.length) return { weeks: [], latestPeriod: '' };
  return { weeks: cached.weeks, latestPeriod: cached.latestPeriod };
}
