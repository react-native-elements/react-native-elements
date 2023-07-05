import { withTheme } from '../config';
import { SpeedDial, } from '@rneui/base/dist/SpeedDial/SpeedDial';
import { SpeedDialAction, } from '@rneui/base/dist/SpeedDial/SpeedDial.Action';
export default Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
    Action: withTheme(SpeedDialAction, 'SpeedDialAction'),
});
