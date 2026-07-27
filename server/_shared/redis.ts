// Taiwan Monitor: Redis stub — no caching, always returns null
export const redis = {
  get: async () => null,
  set: async () => null,
  del: async () => null,
  incr: async () => 1,
  expire: async () => null,
  pipeline: () => ({
    get: () => ({ exec: async () => [[null, null]] }),
    set: () => null,
    expire: () => null,
    exec: async () => [],
  }),
};

// Allow the gateway to skip rate-limit checks
export async function checkRateLimit() { return { allowed: true, remaining: 999 }; }
export function createRedisClient() { return redis; }
