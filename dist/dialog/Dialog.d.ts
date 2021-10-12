import React from 'react';
import { OverlayProps } from '../overlay/Overlay';
import { Theme } from '../config/theme';
import DialogLoading from './DialogLoading';
import DialogTitle from './DialogTitle';
import DialogButton from './DialogButton';
import DialogActions from './DialogActions';
export declare type DialogProps = Omit<OverlayProps, 'fullScreen'> & {
    theme?: Theme;
    children?: any;
};
interface Dialog extends React.FunctionComponent<DialogProps> {
    Loading: typeof DialogLoading;
    Title: typeof DialogTitle;
    Actions: typeof DialogActions;
    Button: typeof DialogButton;
}
declare const Dialog: Dialog;
export { Dialog };
declare const ThemedDialog: (React.FunctionComponent<Pick<DialogProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "nativeID" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "transparent" | "children" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "isVisible" | "animated" | "animationType" | "onRequestClose" | "onShow" | "presentationStyle" | "supportedOrientations" | "onDismiss" | "onOrientationChange" | "hardwareAccelerated" | "statusBarTranslucent" | "backdropStyle" | "overlayStyle" | "onBackdropPress" | "ModalComponent">> & {
    Loading: React.FunctionComponent<Pick<import("./DialogLoading").DialogLoadingProps, "loadingStyle" | "loadingProps">> | React.ForwardRefExoticComponent<import("./DialogLoading").DialogLoadingProps>;
    Title: React.FunctionComponent<Pick<import("./DialogTitle").DialogTitleProps, "title" | "titleStyle" | "titleProps">> | React.ForwardRefExoticComponent<import("./DialogTitle").DialogTitleProps>;
    Actions: React.FunctionComponent<Pick<import("./DialogActions").DialogActionsProps, "children">> | React.ForwardRefExoticComponent<import("./DialogActions").DialogActionsProps>;
    Button: React.FunctionComponent<Pick<import("..").ButtonProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "containerStyle" | "disabledStyle" | "title" | "icon" | "titleStyle" | "loading" | "titleProps" | "buttonStyle" | "loadingStyle" | "loadingProps" | "iconContainerStyle" | "iconRight" | "linearGradientProps" | "TouchableComponent" | "ViewComponent" | "disabledTitleStyle" | "iconPosition">> | React.ForwardRefExoticComponent<import("..").ButtonProps>;
}) | (React.ForwardRefExoticComponent<DialogProps> & {
    Loading: React.FunctionComponent<Pick<import("./DialogLoading").DialogLoadingProps, "loadingStyle" | "loadingProps">> | React.ForwardRefExoticComponent<import("./DialogLoading").DialogLoadingProps>;
    Title: React.FunctionComponent<Pick<import("./DialogTitle").DialogTitleProps, "title" | "titleStyle" | "titleProps">> | React.ForwardRefExoticComponent<import("./DialogTitle").DialogTitleProps>;
    Actions: React.FunctionComponent<Pick<import("./DialogActions").DialogActionsProps, "children">> | React.ForwardRefExoticComponent<import("./DialogActions").DialogActionsProps>;
    Button: React.FunctionComponent<Pick<import("..").ButtonProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "containerStyle" | "disabledStyle" | "title" | "icon" | "titleStyle" | "loading" | "titleProps" | "buttonStyle" | "loadingStyle" | "loadingProps" | "iconContainerStyle" | "iconRight" | "linearGradientProps" | "TouchableComponent" | "ViewComponent" | "disabledTitleStyle" | "iconPosition">> | React.ForwardRefExoticComponent<import("..").ButtonProps>;
});
export default ThemedDialog;
