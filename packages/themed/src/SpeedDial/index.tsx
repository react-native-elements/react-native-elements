import { withTheme } from '../config';
import { SpeedDial, SpeedDialProps } from '@rneui/base/SpeedDial/SpeedDial';
import {
  SpeedDialAction,
  SpeedDialActionProps,
} from '@rneui/base/SpeedDial/SpeedDial.Action';

export type { SpeedDialProps, SpeedDialActionProps };
export default Object.assign(
  withTheme<SpeedDialProps>(SpeedDial, 'SpeedDial'),
  {
    Action: withTheme<SpeedDialActionProps>(SpeedDialAction, 'SpeedDialAction'),
  }
);
