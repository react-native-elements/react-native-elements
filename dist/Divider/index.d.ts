/// <reference types="react" />
import { Divider, DividerProps } from './Divider';
export { Divider };
export type { DividerProps };
declare const _default: import("react").FunctionComponent<Pick<import("react-native").ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "left" | "right" | "middle";
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    orientation?: "horizontal" | "vertical";
    width?: number;
} & Partial<import("../config").ThemeProps<DividerProps>>, "style" | "onLayout" | "testID" | "width" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "color" | "inset" | "insetType" | "orientation" | "subHeader" | "subHeaderStyle">> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "left" | "right" | "middle";
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    orientation?: "horizontal" | "vertical";
    width?: number;
} & Partial<import("../config").ThemeProps<DividerProps>>>;
export default _default;
