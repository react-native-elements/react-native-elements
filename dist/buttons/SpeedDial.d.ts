import React from 'react';
import { FABProps } from './FAB';
import { IconNode } from '../icons/Icon';
import { RneFunctionComponent } from '../helpers';
export declare type SpeedDialActionProps = Omit<FABProps, 'size'>;
export declare type SpeedDialProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    openIcon?: IconNode;
    overlayColor?: string;
    children?: React.ReactChild[];
    transitionDuration?: number;
} & FABProps;
declare const SpeedDial: RneFunctionComponent<SpeedDialProps>;
export { SpeedDial };
declare const _default: (React.FunctionComponent<Pick<{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    openIcon?: IconNode;
    overlayColor?: string;
    children?: React.ReactChild[];
    transitionDuration?: number;
} & import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("..").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof React.Component;
    ViewComponent?: typeof React.Component;
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
} & Partial<import("../config").ThemeProps<SpeedDialProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "raised" | "disabled" | "color" | "size" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "containerStyle" | "disabledStyle" | "children" | "title" | "transitionDuration" | "overlayColor" | "icon" | "titleStyle" | "loading" | "titleProps" | "buttonStyle" | "loadingStyle" | "loadingProps" | "iconContainerStyle" | "iconRight" | "linearGradientProps" | "TouchableComponent" | "ViewComponent" | "disabledTitleStyle" | "iconPosition" | "placement" | "onOpen" | "onClose" | "upperCase" | "isOpen" | "openIcon">> & {
    Action: RneFunctionComponent<Pick<FABProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "raised" | "disabled" | "color" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "containerStyle" | "disabledStyle" | "title" | "icon" | "titleStyle" | "loading" | "titleProps" | "buttonStyle" | "loadingStyle" | "loadingProps" | "iconContainerStyle" | "iconRight" | "linearGradientProps" | "TouchableComponent" | "ViewComponent" | "disabledTitleStyle" | "iconPosition" | "placement" | "upperCase">>;
}) | (React.ForwardRefExoticComponent<{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    openIcon?: IconNode;
    overlayColor?: string;
    children?: React.ReactChild[];
    transitionDuration?: number;
} & import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("..").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof React.Component;
    ViewComponent?: typeof React.Component;
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
    Action: RneFunctionComponent<Pick<FABProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "raised" | "disabled" | "color" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "containerStyle" | "disabledStyle" | "title" | "icon" | "titleStyle" | "loading" | "titleProps" | "buttonStyle" | "loadingStyle" | "loadingProps" | "iconContainerStyle" | "iconRight" | "linearGradientProps" | "TouchableComponent" | "ViewComponent" | "disabledTitleStyle" | "iconPosition" | "placement" | "upperCase">>;
});
export default _default;
