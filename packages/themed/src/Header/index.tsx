import { withTheme } from '../config';
import { Header, HeaderProps } from '@rneui/base/Header/Header';

export { Header };
export type { HeaderProps };
export default withTheme<HeaderProps>(Header, 'Header');
