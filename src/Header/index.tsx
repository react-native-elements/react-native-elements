import { withTheme } from '../config';
import { Header, HeaderProps } from './Header';

export { Header };
export type { HeaderProps };
/**
 * RNE Header
 *
 * **Preview**
 *
 * ![URL](URL)
 *
 * [**Documentation**](https://reactnativeelements.com/docs/header)
 */
export default withTheme<HeaderProps, {}>(Header, 'Header');
