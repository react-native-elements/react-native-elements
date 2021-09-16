/// <reference types="react" />
import { Icon, IconProps, IconNode, IconObject, IconType } from './Icon';
export { Icon };
export type { IconProps, IconNode, IconObject, IconType };
declare const _default: import("react").FunctionComponent<Omit<import("react-native-vector-icons/Icon").IconButtonProps & {
    type?: string;
    Component?: typeof import("react").Component;
    reverse?: boolean;
    raised?: boolean;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconProps?: import("react-native-vector-icons/Icon").IconProps;
    reverseColor?: string;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    solid?: boolean;
    brand?: boolean;
} & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & Partial<import("../config").ThemeProps<IconProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native-vector-icons/Icon").IconButtonProps & {
    type?: string;
    Component?: typeof import("react").Component;
    reverse?: boolean;
    raised?: boolean;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconProps?: import("react-native-vector-icons/Icon").IconProps;
    reverseColor?: string;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    solid?: boolean;
    brand?: boolean;
} & Partial<{
    pressableProps: Omit<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">;
} & Pick<import("react-native").PressableProps, "onPress" | "onLongPress" | "onPressIn" | "onPressOut">> & Partial<import("../config").ThemeProps<IconProps>>>;
export default _default;
