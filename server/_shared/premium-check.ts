export function hasPremiumAccess() { return true; }
export async function checkEntitlement() { return { allowed: true, tier: 'full' }; }
