import { Chip, ChipProps } from '@rneui/base/Chip/Chip';
import { withTheme } from '../config';

export { Chip };
export type { ChipProps };
export default withTheme<ChipProps>(Chip, 'Chip');
