import { withTheme } from '../config';
import {
  AirbnbRating,
  TapRatingProps,
} from '@rneui/base/dist/AirbnbRating/index';

export { AirbnbRating };
export type { TapRatingProps };
export const AirbnbRatingDefault = withTheme(AirbnbRating, 'AirbnbRating');
