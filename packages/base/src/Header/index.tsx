import { withTheme } from '../config';
import { Header, HeaderProps } from './Header';

export { Header };
export type { HeaderProps };
export default withTheme<HeaderProps, {}>(Header, 'Header');
