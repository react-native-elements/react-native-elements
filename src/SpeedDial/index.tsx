import { withTheme } from '../config';
import { SpeedDial, SpeedDialProps } from './SpeedDial';
import {
  SpeedDialAction,
  SpeedDialActionProps,
} from './components/SpeedDialAction';

export { SpeedDial };
export type { SpeedDialProps, SpeedDialActionProps };
/**
 * RNE SpeedDial
 *
 * **Preview**
 *
 * ![URL](URL)
 *
 * [**Documentation**](https://reactnativeelements.com/docs/speeddial)
 */
export default Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
  Action: SpeedDialAction,
});
