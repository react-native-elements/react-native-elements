import { withTheme } from '../config';
import {
  Tooltip,
  TooltipProps,
} from '@react-native-elements/base/dist/Tooltip/Tooltip';

export { Tooltip };
export type { TooltipProps };
export default withTheme<TooltipProps>(Tooltip, 'Tooltip');
