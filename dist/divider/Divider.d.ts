import React from 'react';
import { ViewProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type DividerProps = ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: 'left' | 'right' | 'middle';
    style?: StyleProp<ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: StyleProp<TextStyle>;
    orientation?: 'horizontal' | 'vertical';
    width?: number;
};
declare const Divider: RneFunctionComponent<DividerProps>;
export { Divider };
declare const _default: React.FunctionComponent<Pick<ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "middle" | "left" | "right";
    style?: StyleProp<ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: StyleProp<TextStyle>;
    orientation?: "horizontal" | "vertical";
    width?: number;
} & Partial<import("../config").ThemeProps<DividerProps>>, "style" | "onLayout" | "testID" | "width" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "color" | "nativeID" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "inset" | "insetType" | "orientation" | "subHeader" | "subHeaderStyle">> | React.ForwardRefExoticComponent<ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "middle" | "left" | "right";
    style?: StyleProp<ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: StyleProp<TextStyle>;
    orientation?: "horizontal" | "vertical";
    width?: number;
} & Partial<import("../config").ThemeProps<DividerProps>>>;
export default _default;
