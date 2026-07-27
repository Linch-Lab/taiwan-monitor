// Taiwan Monitor: simplified gateway — no auth, no rate limiting, no Redis
import { createRouter, type RouteDescriptor } from './router';
import { getCorsHeaders, isDisallowedOrigin } from './cors';

export function createDomainGateway(routes: Record<string, RouteDescriptor>) {
  const router = createRouter(routes);
  
  return async function handler(req: Request): Promise<Response> {
    const origin = req.headers.get('origin') || '';
    if (isDisallowedOrigin(origin)) {
      return new Response('Forbidden', { status: 403 });
    }

    // Handle preflight
    if (req.method === 'OPTIONS') {
      return new Response(null, { headers: getCorsHeaders(origin) });
    }

    try {
      return await router.handle(req);
    } catch (e) {
      console.error('Gateway error:', e);
      return new Response(JSON.stringify({ ok: false, error: String(e) }), {
        status: 500,
        headers: { ...getCorsHeaders(origin), 'content-type': 'application/json' },
      });
    }
  };
}
