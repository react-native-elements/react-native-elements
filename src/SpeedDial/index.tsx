import { withTheme } from '../config';
import { SpeedDial, SpeedDialProps } from './SpeedDial';
import {
  SpeedDialAction,
  SpeedDialActionProps,
} from './components/SpeedDialAction';

export type { SpeedDialProps, SpeedDialActionProps };
export default Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
  Action: withTheme(SpeedDialAction, 'SpeedDialAction'),
});
