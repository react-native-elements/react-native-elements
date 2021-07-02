import { Chip, ChipProps } from './Chip';
import { withTheme } from '../config';

export { Chip };
export type { ChipProps };
/**
 * RNE Chip
 *
 * **Preview**
 *
 * ![URL](URL)
 *
 * [**Documentation**](https://reactnativeelements.com/docs/chip)
 */
export default withTheme<ChipProps, {}>(Chip, 'Chip');
