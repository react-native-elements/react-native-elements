import React from 'react';
import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { ButtonProps } from '../buttons/Button';
import { RneFunctionComponent } from '../helpers';
export declare type TabItemProps = ButtonProps & {
    active?: boolean;
    variant?: 'primary' | 'default';
};
declare const TabItem: RneFunctionComponent<TabItemProps>;
export declare type TabProps = ViewProps & {
    value?: number;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: StyleProp<ViewStyle>;
    variant?: 'primary' | 'default';
};
interface Tab extends RneFunctionComponent<TabProps> {
    Item: typeof TabItem;
}
declare const Tab: Tab;
export { Tab };
declare const _default: (React.FunctionComponent<Pick<ViewProps & {
    value?: number;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: StyleProp<ViewStyle>;
    variant?: "primary" | "default";
} & Partial<import("../config").ThemeProps<TabProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "nativeID" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "value" | "indicatorStyle" | "onChange" | "variant" | "disableIndicator">> & {
    Item: React.FunctionComponent<Pick<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
        title?: string | React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleProps?: import("..").TextProps;
        buttonStyle?: StyleProp<ViewStyle>;
        type?: "solid" | "clear" | "outline";
        loading?: boolean;
        loadingStyle?: StyleProp<ViewStyle>;
        loadingProps?: import("react-native").ActivityIndicatorProps;
        containerStyle?: StyleProp<ViewStyle>;
        icon?: import("../icons/Icon").IconNode;
        iconContainerStyle?: StyleProp<ViewStyle>;
        iconRight?: boolean;
        linearGradientProps?: object;
        TouchableComponent?: typeof React.Component;
        ViewComponent?: typeof React.Component;
        disabled?: boolean;
        disabledStyle?: StyleProp<ViewStyle>;
        disabledTitleStyle?: StyleProp<import("react-native").TextStyle>;
        raised?: boolean;
        iconPosition?: "bottom" | "left" | "right" | "top";
    } & {
        active?: boolean;
        variant?: "primary" | "default";
    } & Partial<import("../config").ThemeProps<TabItemProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "containerStyle" | "disabledStyle" | "title" | "icon" | "titleStyle" | "loading" | "titleProps" | "buttonStyle" | "loadingStyle" | "loadingProps" | "iconContainerStyle" | "iconRight" | "linearGradientProps" | "TouchableComponent" | "ViewComponent" | "disabledTitleStyle" | "iconPosition" | "active" | "variant">> | React.ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
        title?: string | React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleProps?: import("..").TextProps;
        buttonStyle?: StyleProp<ViewStyle>;
        type?: "solid" | "clear" | "outline";
        loading?: boolean;
        loadingStyle?: StyleProp<ViewStyle>;
        loadingProps?: import("react-native").ActivityIndicatorProps;
        containerStyle?: StyleProp<ViewStyle>;
        icon?: import("../icons/Icon").IconNode;
        iconContainerStyle?: StyleProp<ViewStyle>;
        iconRight?: boolean;
        linearGradientProps?: object;
        TouchableComponent?: typeof React.Component;
        ViewComponent?: typeof React.Component;
        disabled?: boolean;
        disabledStyle?: StyleProp<ViewStyle>;
        disabledTitleStyle?: StyleProp<import("react-native").TextStyle>;
        raised?: boolean;
        iconPosition?: "bottom" | "left" | "right" | "top";
    } & {
        active?: boolean;
        variant?: "primary" | "default";
    } & Partial<import("../config").ThemeProps<TabItemProps>>>;
}) | (React.ForwardRefExoticComponent<ViewProps & {
    value?: number;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: StyleProp<ViewStyle>;
    variant?: "primary" | "default";
} & Partial<import("../config").ThemeProps<TabProps>>> & {
    Item: React.FunctionComponent<Pick<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
        title?: string | React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleProps?: import("..").TextProps;
        buttonStyle?: StyleProp<ViewStyle>;
        type?: "solid" | "clear" | "outline";
        loading?: boolean;
        loadingStyle?: StyleProp<ViewStyle>;
        loadingProps?: import("react-native").ActivityIndicatorProps;
        containerStyle?: StyleProp<ViewStyle>;
        icon?: import("../icons/Icon").IconNode;
        iconContainerStyle?: StyleProp<ViewStyle>;
        iconRight?: boolean;
        linearGradientProps?: object;
        TouchableComponent?: typeof React.Component;
        ViewComponent?: typeof React.Component;
        disabled?: boolean;
        disabledStyle?: StyleProp<ViewStyle>;
        disabledTitleStyle?: StyleProp<import("react-native").TextStyle>;
        raised?: boolean;
        iconPosition?: "bottom" | "left" | "right" | "top";
    } & {
        active?: boolean;
        variant?: "primary" | "default";
    } & Partial<import("../config").ThemeProps<TabItemProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "containerStyle" | "disabledStyle" | "title" | "icon" | "titleStyle" | "loading" | "titleProps" | "buttonStyle" | "loadingStyle" | "loadingProps" | "iconContainerStyle" | "iconRight" | "linearGradientProps" | "TouchableComponent" | "ViewComponent" | "disabledTitleStyle" | "iconPosition" | "active" | "variant">> | React.ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
        title?: string | React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleProps?: import("..").TextProps;
        buttonStyle?: StyleProp<ViewStyle>;
        type?: "solid" | "clear" | "outline";
        loading?: boolean;
        loadingStyle?: StyleProp<ViewStyle>;
        loadingProps?: import("react-native").ActivityIndicatorProps;
        containerStyle?: StyleProp<ViewStyle>;
        icon?: import("../icons/Icon").IconNode;
        iconContainerStyle?: StyleProp<ViewStyle>;
        iconRight?: boolean;
        linearGradientProps?: object;
        TouchableComponent?: typeof React.Component;
        ViewComponent?: typeof React.Component;
        disabled?: boolean;
        disabledStyle?: StyleProp<ViewStyle>;
        disabledTitleStyle?: StyleProp<import("react-native").TextStyle>;
        raised?: boolean;
        iconPosition?: "bottom" | "left" | "right" | "top";
    } & {
        active?: boolean;
        variant?: "primary" | "default";
    } & Partial<import("../config").ThemeProps<TabItemProps>>>;
});
export default _default;
