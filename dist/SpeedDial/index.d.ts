/// <reference types="react" />
import { SpeedDialProps } from './SpeedDial';
import { SpeedDialActionProps } from './SpeedDial.Action';
export type { SpeedDialProps, SpeedDialActionProps };
declare const _default: (import("react").FunctionComponent<Omit<{
    isOpen: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    openIcon?: import("../Icon").IconNode;
    overlayColor?: string;
    children?: import("react").ReactChild[];
    transitionDuration?: number;
    backdropPressableProps?: import("react-native").PressableProps;
} & import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("..").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: import("../Icon").IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    raised?: boolean;
    iconPosition?: "bottom" | "left" | "right" | "top";
} & {
    color?: string;
    size?: "small" | "large";
    placement?: "left" | "right";
    visible?: boolean;
    upperCase?: boolean;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & Partial<import("../config").ThemeProps<SpeedDialProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<{
    isOpen: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    openIcon?: import("../Icon").IconNode;
    overlayColor?: string;
    children?: import("react").ReactChild[];
    transitionDuration?: number;
    backdropPressableProps?: import("react-native").PressableProps;
} & import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("..").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: import("../Icon").IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    raised?: boolean;
    iconPosition?: "bottom" | "left" | "right" | "top";
} & {
    color?: string;
    size?: "small" | "large";
    placement?: "left" | "right";
    visible?: boolean;
    upperCase?: boolean;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & Partial<import("../config").ThemeProps<SpeedDialProps>>>) & {
    Action: import("react").FunctionComponent<Omit<SpeedDialActionProps & Partial<import("../config").ThemeProps<SpeedDialActionProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<SpeedDialActionProps & Partial<import("../config").ThemeProps<SpeedDialActionProps>>>;
};
export default _default;
