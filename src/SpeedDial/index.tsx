import { withTheme } from '../config';
import { SpeedDial, SpeedDialProps } from './SpeedDial';
import { SpeedDialActionProps } from './components/SpeedDialAction';

export { SpeedDial };
export type { SpeedDialProps, SpeedDialActionProps };
export default withTheme(SpeedDial, 'SpeedDial');
