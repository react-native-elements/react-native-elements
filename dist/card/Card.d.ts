import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type CardProps = {
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
};
interface Card extends RneFunctionComponent<CardProps> {
}
declare const Card: Card;
export { Card };
declare const ThemedCard: (React.FunctionComponent<Pick<CardProps & Partial<import("../config").ThemeProps<CardProps>>, "containerStyle" | "wrapperStyle">> & {
    Divider: React.FunctionComponent<Pick<import("react-native").ViewProps & {
        color?: string;
        inset?: boolean;
        insetType?: "middle" | "left" | "right";
        style?: StyleProp<ViewStyle>;
        subHeader?: string;
        subHeaderStyle?: StyleProp<import("react-native").TextStyle>;
        orientation?: "horizontal" | "vertical";
        width?: number;
    } & Partial<import("../config").ThemeProps<import("..").DividerProps>>, "style" | "onLayout" | "testID" | "width" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "color" | "nativeID" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "inset" | "insetType" | "orientation" | "subHeader" | "subHeaderStyle">> | React.ForwardRefExoticComponent<import("react-native").ViewProps & {
        color?: string;
        inset?: boolean;
        insetType?: "middle" | "left" | "right";
        style?: StyleProp<ViewStyle>;
        subHeader?: string;
        subHeaderStyle?: StyleProp<import("react-native").TextStyle>;
        orientation?: "horizontal" | "vertical";
        width?: number;
    } & Partial<import("../config").ThemeProps<import("..").DividerProps>>>;
    Image: React.FunctionComponent<Pick<import("react-native").ImageProps & {
        Component?: typeof React.Component;
        onPress?(): void;
        onLongPress?(): void;
        ImageComponent?: React.ComponentType<any>;
        PlaceholderContent?: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        containerStyle?: StyleProp<ViewStyle>;
        childrenContainerStyle?: StyleProp<ViewStyle>;
        placeholderStyle?: StyleProp<ViewStyle>;
        transition?: boolean;
        transitionDuration?: number;
    } & Partial<import("../config").ThemeProps<import("..").ImageProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "Component" | "containerStyle" | "ImageComponent" | "PlaceholderContent" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration">> | React.ForwardRefExoticComponent<import("react-native").ImageProps & {
        Component?: typeof React.Component;
        onPress?(): void;
        onLongPress?(): void;
        ImageComponent?: React.ComponentType<any>;
        PlaceholderContent?: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        containerStyle?: StyleProp<ViewStyle>;
        childrenContainerStyle?: StyleProp<ViewStyle>;
        placeholderStyle?: StyleProp<ViewStyle>;
        transition?: boolean;
        transitionDuration?: number;
    } & Partial<import("../config").ThemeProps<import("..").ImageProps>>>;
    Title: React.FunctionComponent<Pick<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
    FeaturedTitle: React.FunctionComponent<Pick<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
    FeaturedSubtitle: React.FunctionComponent<Pick<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
}) | (React.ForwardRefExoticComponent<CardProps & Partial<import("../config").ThemeProps<CardProps>>> & {
    Divider: React.FunctionComponent<Pick<import("react-native").ViewProps & {
        color?: string;
        inset?: boolean;
        insetType?: "middle" | "left" | "right";
        style?: StyleProp<ViewStyle>;
        subHeader?: string;
        subHeaderStyle?: StyleProp<import("react-native").TextStyle>;
        orientation?: "horizontal" | "vertical";
        width?: number;
    } & Partial<import("../config").ThemeProps<import("..").DividerProps>>, "style" | "onLayout" | "testID" | "width" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "color" | "nativeID" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "inset" | "insetType" | "orientation" | "subHeader" | "subHeaderStyle">> | React.ForwardRefExoticComponent<import("react-native").ViewProps & {
        color?: string;
        inset?: boolean;
        insetType?: "middle" | "left" | "right";
        style?: StyleProp<ViewStyle>;
        subHeader?: string;
        subHeaderStyle?: StyleProp<import("react-native").TextStyle>;
        orientation?: "horizontal" | "vertical";
        width?: number;
    } & Partial<import("../config").ThemeProps<import("..").DividerProps>>>;
    Image: React.FunctionComponent<Pick<import("react-native").ImageProps & {
        Component?: typeof React.Component;
        onPress?(): void;
        onLongPress?(): void;
        ImageComponent?: React.ComponentType<any>;
        PlaceholderContent?: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        containerStyle?: StyleProp<ViewStyle>;
        childrenContainerStyle?: StyleProp<ViewStyle>;
        placeholderStyle?: StyleProp<ViewStyle>;
        transition?: boolean;
        transitionDuration?: number;
    } & Partial<import("../config").ThemeProps<import("..").ImageProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "Component" | "containerStyle" | "ImageComponent" | "PlaceholderContent" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration">> | React.ForwardRefExoticComponent<import("react-native").ImageProps & {
        Component?: typeof React.Component;
        onPress?(): void;
        onLongPress?(): void;
        ImageComponent?: React.ComponentType<any>;
        PlaceholderContent?: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        containerStyle?: StyleProp<ViewStyle>;
        childrenContainerStyle?: StyleProp<ViewStyle>;
        placeholderStyle?: StyleProp<ViewStyle>;
        transition?: boolean;
        transitionDuration?: number;
    } & Partial<import("../config").ThemeProps<import("..").ImageProps>>>;
    Title: React.FunctionComponent<Pick<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
    FeaturedTitle: React.FunctionComponent<Pick<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
    FeaturedSubtitle: React.FunctionComponent<Pick<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
});
export default ThemedCard;
