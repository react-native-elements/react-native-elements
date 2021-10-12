import React from 'react';
import { SwitchProps as NativeSwitchProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type SwitchProps = NativeSwitchProps & {
    color?: string;
};
declare const Switch: RneFunctionComponent<SwitchProps>;
export { Switch };
declare const _default: React.FunctionComponent<Pick<NativeSwitchProps & {
    color?: string;
} & Partial<import("../config").ThemeProps<SwitchProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "color" | "nativeID" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "tintColor" | "value" | "thumbTintColor" | "onValueChange" | "thumbColor" | "trackColor" | "ios_backgroundColor" | "onTintColor">> | React.ForwardRefExoticComponent<NativeSwitchProps & {
    color?: string;
} & Partial<import("../config").ThemeProps<SwitchProps>>>;
export default _default;
