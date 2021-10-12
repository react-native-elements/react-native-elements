import React from 'react';
import { TextStyle, StyleProp, TextProps, ViewProps, StatusBarProps, StatusBarStyle, ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { IconObject } from '../icons/Icon';
interface HeaderIcon extends IconObject {
    icon?: string;
    text?: string;
    color?: string;
    style?: StyleProp<TextStyle>;
}
declare type HeaderSubComponent = React.ReactElement<{}> | TextProps | HeaderIcon;
export declare type HeaderProps = ViewProps & {
    ViewComponent?: typeof React.Component;
    linearGradientProps?: Object;
    statusBarProps?: StatusBarProps;
    barStyle?: StatusBarStyle;
    leftComponent?: HeaderSubComponent;
    centerComponent?: HeaderSubComponent;
    rightComponent?: HeaderSubComponent;
    backgroundColor?: string;
    backgroundImage?: ImageSourcePropType;
    backgroundImageStyle?: ImageStyle;
    placement?: 'left' | 'center' | 'right';
    containerStyle?: StyleProp<ViewStyle>;
    centerContainerStyle?: StyleProp<ViewStyle>;
    leftContainerStyle?: StyleProp<ViewStyle>;
    rightContainerStyle?: StyleProp<ViewStyle>;
    children?: JSX.Element[];
    elevated?: boolean;
};
declare const Header: RneFunctionComponent<HeaderProps>;
export { Header };
declare const _default: React.FunctionComponent<Pick<HeaderProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "backgroundColor" | "nativeID" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "containerStyle" | "children" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "linearGradientProps" | "ViewComponent" | "placement" | "statusBarProps" | "barStyle" | "leftComponent" | "centerComponent" | "rightComponent" | "backgroundImage" | "backgroundImageStyle" | "centerContainerStyle" | "leftContainerStyle" | "rightContainerStyle" | "elevated">> | React.ForwardRefExoticComponent<HeaderProps>;
export default _default;
