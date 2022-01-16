import { withTheme } from '../config';
import {
  Badge,
  BadgeProps,
} from '@react-native-elements/base/dist/Badge/Badge';
import { withBadge } from '@react-native-elements/base/dist/Badge/withBadge';

export { Badge, withBadge };
export type { BadgeProps };
export default withTheme<BadgeProps>(Badge, 'Badge');
