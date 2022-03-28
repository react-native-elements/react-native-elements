import { withTheme } from '../config';
import {
  Icon,
  IconProps,
  IconNode,
  IconObject,
  IconType,
} from '@rneui/base/dist/Icon/Icon';

export { Icon };
export type { IconProps, IconNode, IconObject, IconType };
export default withTheme<IconProps>(Icon, 'Icon');
