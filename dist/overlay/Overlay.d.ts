import React from 'react';
import { ModalProps, ViewStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type OverlayProps = ModalProps & {
    isVisible: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: typeof React.Component;
};
declare const Overlay: RneFunctionComponent<OverlayProps>;
export { Overlay };
declare const _default: React.FunctionComponent<Pick<import("react-native").ModalBaseProps & import("react-native").ModalPropsIOS & import("react-native").ModalPropsAndroid & import("react-native").ViewProps & {
    isVisible: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: typeof React.Component;
} & Partial<import("../config").ThemeProps<OverlayProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "nativeID" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "transparent" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "isVisible" | "animated" | "animationType" | "onRequestClose" | "onShow" | "presentationStyle" | "supportedOrientations" | "onDismiss" | "onOrientationChange" | "hardwareAccelerated" | "statusBarTranslucent" | "fullScreen" | "backdropStyle" | "overlayStyle" | "onBackdropPress" | "ModalComponent">> | React.ForwardRefExoticComponent<import("react-native").ModalBaseProps & import("react-native").ModalPropsIOS & import("react-native").ModalPropsAndroid & import("react-native").ViewProps & {
    isVisible: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: typeof React.Component;
} & Partial<import("../config").ThemeProps<OverlayProps>>>;
export default _default;
