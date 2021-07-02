import { withTheme } from '../config';
import { Badge, BadgeProps } from './Badge';
import { withBadge } from './withBadge';

export { Badge, withBadge };
export type { BadgeProps };
/**
 * RNE Badge
 *
 * **Preview**
 *
 * ![URL](URL)
 *
 * [**Documentation**](https://reactnativeelements.com/docs/badge)
 */
export default withTheme(Badge, 'Badge');
