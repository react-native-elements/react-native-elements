import { SpeedDial } from './SpeedDial';
import { SpeedDialAction } from './SpeedDial.Action';
const DefaultSpeedDial = Object.assign(SpeedDial, {
    Action: SpeedDialAction,
});
export { DefaultSpeedDial as SpeedDial };
