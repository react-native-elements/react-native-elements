import { withTheme } from '../config';
import {
  Header,
  HeaderProps,
} from '@react-native-elements/base/dist/Header/Header';

export { Header };
export type { HeaderProps };
export default withTheme<HeaderProps>(Header, 'Header');
