import { withTheme } from '../config';
import { AirbnbRating, TapRatingProps } from '@rneui/base/AirbnbRating';

export { AirbnbRating };
export type { TapRatingProps };
export const AirbnbRatingDefault = withTheme(AirbnbRating, 'AirbnbRating');
