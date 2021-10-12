import React from 'react';
import { StyleProp, ViewStyle, ColorValue } from 'react-native';
import { ImageProps } from '../image/Image';
import { IconProps } from '../icons/Icon';
export declare type AccessoryProps = Partial<IconProps> & Partial<ImageProps> & {
    underlayColor?: ColorValue;
    style?: StyleProp<ViewStyle>;
};
declare const _default: React.FunctionComponent<Pick<Partial<IconProps> & Partial<ImageProps> & {
    underlayColor?: ColorValue;
    style?: StyleProp<ViewStyle>;
} & Partial<import("../config").ThemeProps<AccessoryProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "color" | "iconStyle" | "backgroundColor" | "size" | "name" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "Component" | "reverse" | "containerStyle" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand" | "ImageComponent" | "PlaceholderContent" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration">> | React.ForwardRefExoticComponent<Partial<IconProps> & Partial<ImageProps> & {
    underlayColor?: ColorValue;
    style?: StyleProp<ViewStyle>;
} & Partial<import("../config").ThemeProps<AccessoryProps>>>;
export default _default;
