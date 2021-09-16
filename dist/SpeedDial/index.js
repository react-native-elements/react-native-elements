import { withTheme } from '../config';
import { SpeedDial } from './SpeedDial';
import { SpeedDialAction } from './SpeedDial.Action';
export default Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
    Action: withTheme(SpeedDialAction, 'SpeedDialAction'),
});
