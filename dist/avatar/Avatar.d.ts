import React from 'react';
import { StyleProp, ViewStyle, TextStyle, ImageSourcePropType, ImageStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { IconObject } from '../icons/Icon';
import { ImageProps } from '../image/Image';
interface AvatarIcon extends IconObject {
    iconStyle?: StyleProp<TextStyle>;
}
export declare type AvatarProps = {
    Component?: typeof React.Component;
    onPress?(): void;
    onLongPress?(): void;
    containerStyle?: StyleProp<ViewStyle>;
    source?: ImageSourcePropType;
    avatarStyle?: ImageStyle;
    rounded?: boolean;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    overlayContainerStyle?: StyleProp<TextStyle>;
    activeOpacity?: number;
    icon?: AvatarIcon;
    iconStyle?: StyleProp<TextStyle>;
    size?: ('small' | 'medium' | 'large' | 'xlarge') | number;
    placeholderStyle?: StyleProp<ViewStyle>;
    renderPlaceholderContent?: React.ReactElement<{}>;
    imageProps?: Partial<ImageProps>;
    ImageComponent?: React.ComponentClass;
};
interface Avatar extends RneFunctionComponent<AvatarProps> {
}
declare const Avatar: React.NamedExoticComponent<AvatarProps & Partial<import("../config").ThemeProps<AvatarProps>>>;
export { Avatar };
declare const ThemedAvatar: (React.FunctionComponent<Pick<AvatarProps & Partial<import("../config").ThemeProps<AvatarProps>>, "source" | "iconStyle" | "size" | "onPress" | "onLongPress" | "activeOpacity" | "Component" | "containerStyle" | "title" | "ImageComponent" | "placeholderStyle" | "icon" | "avatarStyle" | "rounded" | "titleStyle" | "overlayContainerStyle" | "imageProps" | "renderPlaceholderContent">> & {
    Accessory: React.FunctionComponent<Pick<Partial<import("../icons/Icon").IconProps> & Partial<ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: StyleProp<ViewStyle>;
    } & Partial<import("../config").ThemeProps<import("./Accessory").AccessoryProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "color" | "iconStyle" | "backgroundColor" | "size" | "name" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "Component" | "reverse" | "containerStyle" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand" | "ImageComponent" | "PlaceholderContent" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration">> | React.ForwardRefExoticComponent<Partial<import("../icons/Icon").IconProps> & Partial<ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: StyleProp<ViewStyle>;
    } & Partial<import("../config").ThemeProps<import("./Accessory").AccessoryProps>>>;
}) | (React.ForwardRefExoticComponent<AvatarProps & Partial<import("../config").ThemeProps<AvatarProps>>> & {
    Accessory: React.FunctionComponent<Pick<Partial<import("../icons/Icon").IconProps> & Partial<ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: StyleProp<ViewStyle>;
    } & Partial<import("../config").ThemeProps<import("./Accessory").AccessoryProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "color" | "iconStyle" | "backgroundColor" | "size" | "name" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "Component" | "reverse" | "containerStyle" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand" | "ImageComponent" | "PlaceholderContent" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration">> | React.ForwardRefExoticComponent<Partial<import("../icons/Icon").IconProps> & Partial<ImageProps> & {
        underlayColor?: import("react-native").ColorValue;
        style?: StyleProp<ViewStyle>;
    } & Partial<import("../config").ThemeProps<import("./Accessory").AccessoryProps>>>;
});
export default ThemedAvatar;
