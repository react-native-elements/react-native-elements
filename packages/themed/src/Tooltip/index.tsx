import { withTheme } from '../config';
import { Tooltip, TooltipProps } from '@rneui/base/Tooltip/Tooltip';

export { Tooltip };
export type { TooltipProps };
export default withTheme<TooltipProps>(Tooltip, 'Tooltip');
