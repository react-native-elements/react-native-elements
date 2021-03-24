import React from 'react';
import { ModalProps, ViewStyle, StyleProp } from 'react-native';
export declare type OverlayProps = ModalProps & {
    isVisible: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: React.ComponentClass;
};
declare const Overlay: React.FunctionComponent<OverlayProps>;
export { Overlay };
declare const _default: React.FunctionComponent<Pick<OverlayProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "nativeID" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "transparent" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "isVisible" | "animated" | "animationType" | "onRequestClose" | "onShow" | "presentationStyle" | "supportedOrientations" | "onDismiss" | "onOrientationChange" | "hardwareAccelerated" | "statusBarTranslucent" | "fullScreen" | "backdropStyle" | "overlayStyle" | "onBackdropPress" | "ModalComponent">> | React.ForwardRefExoticComponent<OverlayProps>;
export default _default;
