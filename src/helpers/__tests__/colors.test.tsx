import { darkColors, lightColors } from '../colors';
import { describe, it, expect } from '@jest/globals';

describe('Color', () => {
  it('Colors (Light) should exist', () => {
    expect(darkColors).not.toBe(null);
  });

  it('Colors (Dark) should exist', () => {
    expect(lightColors).not.toBe(null);
  });
});
