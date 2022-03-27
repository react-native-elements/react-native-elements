import { withTheme } from '../config';
import {
  SpeedDial,
  SpeedDialProps,
} from '@rneui/base/dist/SpeedDial/SpeedDial';
import {
  SpeedDialAction,
  SpeedDialActionProps,
} from '@rneui/base/dist/SpeedDial/SpeedDial.Action';

export type { SpeedDialProps, SpeedDialActionProps };
export default Object.assign(
  withTheme<SpeedDialProps>(SpeedDial, 'SpeedDial'),
  {
    Action: withTheme<SpeedDialActionProps>(SpeedDialAction, 'SpeedDialAction'),
  }
);
