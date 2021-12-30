import { withTheme } from '../config';
import { SpeedDial, SpeedDialProps } from './SpeedDial';
import { SpeedDialAction, SpeedDialActionProps } from './SpeedDial.Action';

const Default = Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
  Action: withTheme(SpeedDialAction, 'SpeedDialAction'),
});
export { Default as SpeedDial };
export type { SpeedDialProps, SpeedDialActionProps };
