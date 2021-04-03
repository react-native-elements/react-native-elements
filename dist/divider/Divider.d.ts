import React from 'react';
import { ViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type DividerProps = ViewProps & {
    style?: object | any[];
};
declare const Divider: RneFunctionComponent<DividerProps>;
export { Divider };
declare const _default: React.FunctionComponent<Pick<ViewProps & {
    style?: object | any[];
} & Partial<import("../config").ThemeProps<DividerProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "nativeID" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture">> | React.ForwardRefExoticComponent<ViewProps & {
    style?: object | any[];
} & Partial<import("../config").ThemeProps<DividerProps>>>;
export default _default;
