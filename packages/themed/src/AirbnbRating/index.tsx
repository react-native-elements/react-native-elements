import { withTheme } from '../config';
import {
  AirbnbRating,
  TapRatingProps,
} from '@react-native-elements/base/dist/AirbnbRating/AirbnbRating';

export { AirbnbRating };
export type { TapRatingProps };
export default withTheme(AirbnbRating, 'AirbnbRating');
