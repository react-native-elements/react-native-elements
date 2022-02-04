import { withTheme } from '../config';
import {
  Slider,
  SliderProps,
} from '@react-native-elements/base/dist/Slider/Slider';

export { Slider };
export type { SliderProps };
export default withTheme<SliderProps>(Slider, 'Slider');
