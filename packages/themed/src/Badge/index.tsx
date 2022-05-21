import { withTheme } from '../config';
import { Badge, BadgeProps } from '@rneui/base/dist/Badge/Badge';
import { withBadge } from '@rneui/base/dist/Badge/withBadge';

export { Badge, withBadge };
export type { BadgeProps };
export default withTheme<BadgeProps>(Badge, 'Badge');
