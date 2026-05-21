import { ScreenWidth } from '../../helpers';
import { getElementVisibleWidth } from '../helpers/getTooltipCoordinate';
import { describe, expect, it } from '@jest/globals';

describe('getTooltipCoordinate helper', () => {
  it('should return the correct coordinate', () => {
    const width = getElementVisibleWidth(250, 5, ScreenWidth);
    expect(width).toBe(250);
  });
});
