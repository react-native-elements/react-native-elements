import { withTheme } from '../config';
import {
  Input,
  InputProps,
} from '@react-native-elements/base/dist/Input/Input';

export { Input };
export type { InputProps };
export default withTheme<InputProps>(Input, 'Input');
