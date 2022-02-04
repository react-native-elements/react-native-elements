import {
  Divider,
  DividerProps,
} from '@react-native-elements/base/dist/Divider/Divider';
import { withTheme } from '../config';

export { Divider };
export type { DividerProps };
export default withTheme<DividerProps>(Divider, 'Divider');
