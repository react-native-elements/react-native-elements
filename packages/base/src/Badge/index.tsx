import { withTheme } from '../config';
import { Badge, BadgeProps } from './Badge';
import { withBadge } from './withBadge';

export { Badge, withBadge };
export type { BadgeProps };
export default withTheme(Badge, 'Badge');
