import { darkColors, lightColors } from '../colors';

describe('Color', () => {
  it('Colors (Light) should exist', () => {
    expect(darkColors).not.toBe(null);
  });

  it('Colors (Dark) should exist', () => {
    expect(lightColors).not.toBe(null);
  });
});
