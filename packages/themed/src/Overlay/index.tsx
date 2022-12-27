import { withTheme } from '../config';
import { Overlay, OverlayProps } from '@rneui/base/Overlay/Overlay';

export { Overlay };
export type { OverlayProps };
export default withTheme<OverlayProps>(Overlay, 'Overlay');
