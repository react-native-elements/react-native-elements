/// <reference types="react" />
import { Badge, BadgeProps } from './Badge';
import { withBadge } from './withBadge';
export { Badge, withBadge };
export type { BadgeProps };
declare const _default: import("react").FunctionComponent<Omit<{
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    badgeStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textProps?: import("react-native").TextProps;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    value?: import("react").ReactNode;
    Component?: typeof import("react").Component;
    status?: "primary" | "success" | "warning" | "error";
} & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & Partial<import("../config").ThemeProps<BadgeProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<{
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    badgeStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textProps?: import("react-native").TextProps;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    value?: import("react").ReactNode;
    Component?: typeof import("react").Component;
    status?: "primary" | "success" | "warning" | "error";
} & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & Partial<import("../config").ThemeProps<BadgeProps>>>;
export default _default;
