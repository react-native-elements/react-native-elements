/// <reference types="react" />
import { Badge, BadgeProps } from './Badge';
import { withBadge } from './withBadge';
export { Badge, withBadge };
export type { BadgeProps };
declare const _default: import("react").FunctionComponent<Pick<BadgeProps & Partial<import("../config").ThemeProps<BadgeProps>>, "onPress" | "Component" | "containerStyle" | "textStyle" | "textProps" | "badgeStyle" | "value" | "status">> | import("react").ForwardRefExoticComponent<BadgeProps & Partial<import("../config").ThemeProps<BadgeProps>>>;
export default _default;
