/// <reference types="react" />
import { SpeedDial, SpeedDialProps } from './SpeedDial';
import { SpeedDialActionProps } from './components/SpeedDialAction';
export { SpeedDial };
export type { SpeedDialProps, SpeedDialActionProps };
declare const _default: (import("react").FunctionComponent<Pick<{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    openIcon?: import("../Icon").IconNode;
    overlayColor?: string;
    children?: import("react").ReactChild[];
    transitionDuration?: number;
} & import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
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
} & Partial<import("../config").ThemeProps<SpeedDialProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "onPress" | "onLongPress" | "containerStyle" | "transitionDuration" | "children" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "overlayColor" | "title" | "icon" | "size" | "titleStyle" | "color" | "background" | "useForeground" | "type" | "raised" | "disabledStyle" | "buttonStyle" | "TouchableComponent" | "loading" | "loadingStyle" | "loadingProps" | "titleProps" | "iconContainerStyle" | "iconRight" | "disabledTitleStyle" | "linearGradientProps" | "ViewComponent" | "iconPosition" | "upperCase" | "placement" | "isOpen" | "onOpen" | "onClose" | "openIcon">> & {
    Action: import("../helpers").RneFunctionComponent<Pick<import("..").FABProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "onPress" | "onLongPress" | "containerStyle" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "title" | "icon" | "titleStyle" | "color" | "background" | "useForeground" | "type" | "raised" | "disabledStyle" | "buttonStyle" | "TouchableComponent" | "loading" | "loadingStyle" | "loadingProps" | "titleProps" | "iconContainerStyle" | "iconRight" | "disabledTitleStyle" | "linearGradientProps" | "ViewComponent" | "iconPosition" | "upperCase" | "placement">>;
}) | (import("react").ForwardRefExoticComponent<{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    openIcon?: import("../Icon").IconNode;
    overlayColor?: string;
    children?: import("react").ReactChild[];
    transitionDuration?: number;
} & import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
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
} & Partial<import("../config").ThemeProps<SpeedDialProps>>> & {
    Action: import("../helpers").RneFunctionComponent<Pick<import("..").FABProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "onPress" | "onLongPress" | "containerStyle" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "title" | "icon" | "titleStyle" | "color" | "background" | "useForeground" | "type" | "raised" | "disabledStyle" | "buttonStyle" | "TouchableComponent" | "loading" | "loadingStyle" | "loadingProps" | "titleProps" | "iconContainerStyle" | "iconRight" | "disabledTitleStyle" | "linearGradientProps" | "ViewComponent" | "iconPosition" | "upperCase" | "placement">>;
});
export default _default;
