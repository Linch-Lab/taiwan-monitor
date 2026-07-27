// Filesystem catch-all for otherwise-unmatched `/api/*` paths.
// Inlined 404 handler (was imported from api/not-found.ts, deleted in Taiwan Monitor cleanup).

export const config = { runtime: 'edge' };

export default function handler(_req: Request) {
  return new Response(
    JSON.stringify({ error: 'Not Found', message: 'The requested API endpoint does not exist.' }),
    { status: 404, headers: { 'content-type': 'application/json' } },
  );
}
