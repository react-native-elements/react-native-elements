import { SpeedDial, SpeedDialProps } from './SpeedDial';
import { SpeedDialAction, SpeedDialActionProps } from './SpeedDial.Action';

const DefaultSpeedDial = Object.assign(SpeedDial, {
  Action: SpeedDialAction,
});
export { DefaultSpeedDial as SpeedDial };
export type { SpeedDialProps, SpeedDialActionProps };
