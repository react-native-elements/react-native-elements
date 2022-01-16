import { withTheme } from '../config';
import { AirbnbRating, TapRatingProps } from './AirbnbRating';

export { AirbnbRating };
export type { TapRatingProps };
export const AirbnbRatingDefault = withTheme(AirbnbRating, 'AirbnbRating');
