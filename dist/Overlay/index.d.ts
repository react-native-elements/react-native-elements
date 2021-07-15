/// <reference types="react" />
import { Overlay, OverlayProps } from './Overlay';
export { Overlay };
export type { OverlayProps };
declare const _default: import("react").FunctionComponent<Pick<import("react-native").ModalBaseProps & import("react-native").ModalPropsIOS & import("react-native").ModalPropsAndroid & import("react-native").ViewProps & {
    isVisible: boolean;
    backdropStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    overlayStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: typeof import("react").Component;
} & Partial<import("../config").ThemeProps<OverlayProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "transparent" | "isVisible" | "animated" | "animationType" | "onRequestClose" | "onShow" | "presentationStyle" | "supportedOrientations" | "onDismiss" | "onOrientationChange" | "hardwareAccelerated" | "statusBarTranslucent" | "fullScreen" | "backdropStyle" | "overlayStyle" | "onBackdropPress" | "ModalComponent">> | import("react").ForwardRefExoticComponent<import("react-native").ModalBaseProps & import("react-native").ModalPropsIOS & import("react-native").ModalPropsAndroid & import("react-native").ViewProps & {
    isVisible: boolean;
    backdropStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    overlayStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: typeof import("react").Component;
} & Partial<import("../config").ThemeProps<OverlayProps>>>;
export default _default;
