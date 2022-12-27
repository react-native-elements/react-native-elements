import { withTheme } from '../config';
import { Badge, BadgeProps } from '@rneui/base/Badge/Badge';
import { withBadge } from '@rneui/base/Badge/withBadge';

export { Badge, withBadge };
export type { BadgeProps };
export default withTheme<BadgeProps>(Badge, 'Badge');
