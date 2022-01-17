import { Chip, ChipProps } from '@react-native-elements/base/dist/Chip/Chip';
import { withTheme } from '../config';

export { Chip };
export type { ChipProps };
export default withTheme<ChipProps>(Chip, 'Chip');
