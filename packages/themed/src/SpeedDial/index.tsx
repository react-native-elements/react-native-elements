import { withTheme } from '../config';
import {
  SpeedDial,
  SpeedDialProps,
} from '@react-native-elements/base/dist/SpeedDial/SpeedDial';
import {
  SpeedDialAction,
  SpeedDialActionProps,
} from '@react-native-elements/base/dist/SpeedDial/SpeedDial.Action';

export type { SpeedDialProps, SpeedDialActionProps };
export default Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
  Action: withTheme(SpeedDialAction, 'SpeedDialAction'),
});
