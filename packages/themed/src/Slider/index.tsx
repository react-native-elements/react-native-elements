import { withTheme } from '../config';
import { Slider, SliderProps } from '@rneui/base/Slider/Slider';

export { Slider };
export type { SliderProps };
export default withTheme<SliderProps>(Slider, 'Slider');
