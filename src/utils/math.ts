/**
 * Keep value between 0 and 1
 */
export const clamp = (value: number = 0): number =>
  Math.max(0, Math.min(value, 1)) || 0;
