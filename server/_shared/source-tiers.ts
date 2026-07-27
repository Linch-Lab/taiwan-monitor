export const SOURCE_TIERS = { low: [], medium: [], high: [] } as const;
export function getSourceTier() { return 'low' as const; }
