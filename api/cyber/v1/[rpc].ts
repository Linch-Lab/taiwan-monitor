// Taiwan Monitor stub — returns empty arrays so panels render without error
export const config = { runtime: 'edge' };

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const method = body.method || '';
  // Return empty results — panels will show "no data" instead of error
  return Response.json({ ok: true, result: [] });
}
