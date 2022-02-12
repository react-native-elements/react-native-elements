import { withTheme } from '../config';
import {
  SocialIcon,
  SocialIconProps,
} from '@react-native-elements/base/dist/SocialIcon/SocialIcon';

export { SocialIcon };
export type { SocialIconProps };
export default withTheme<SocialIconProps>(SocialIcon, 'SocialIcon');
