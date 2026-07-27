// Taiwan Monitor: fetch from EIA API directly (free tier)
import type { ServerContext, GetCrudeInventoriesRequest, GetCrudeInventoriesResponse } from '../../../../src/generated/server/worldmonitor/economic/v1/service_server';

const EIA_API_KEY = process.env.EIA_API_KEY || '';
const EIA_URL = 'https://api.eia.gov/v2/petroleum/stoc/wstk/data/?api_key=' + EIA_API_KEY + '&facets[series][]=WCRSTUS1&sort[0][column]=period&sort[0][direction]=desc&length=52';

export async function getCrudeInventories(
  ctx: ServerContext,
  _req: GetCrudeInventoriesRequest,
): Promise<GetCrudeInventoriesResponse> {
  try {
    if (!EIA_API_KEY) return { weeks: [], latestPeriod: '' };
    const resp = await fetch(EIA_URL);
    const data = await resp.json();
    const weeks = (data.response?.data || []).map((d: any) => ({
      period: d.period,
      value: d.value,
      unit: d.units || 'Million Barrels',
    }));
    return { weeks, latestPeriod: weeks[0]?.period || '' };
  } catch (e) {
    console.error('[getCrudeInventories] EIA fetch failed:', e);
    return { weeks: [], latestPeriod: '' };
  }
}
