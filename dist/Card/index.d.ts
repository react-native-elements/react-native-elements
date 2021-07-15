/// <reference types="react" />
import { RneFunctionComponent } from '../helpers';
import { CardBaseProps } from './Card';
declare const ThemedCardDivider: import("react").FunctionComponent<Pick<import("react-native").ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "left" | "right" | "middle";
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    orientation?: "horizontal" | "vertical";
    width?: number;
} & Partial<import("../config").ThemeProps<import("..").DividerProps>>, "style" | "onLayout" | "testID" | "width" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "color" | "inset" | "insetType" | "orientation" | "subHeader" | "subHeaderStyle">> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    color?: string;
    inset?: boolean;
    insetType?: "left" | "right" | "middle";
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    orientation?: "horizontal" | "vertical";
    width?: number;
} & Partial<import("../config").ThemeProps<import("..").DividerProps>>>;
declare const ThemedCardFeaturedSubtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
declare const ThemedCardFeaturedTitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
declare const ThemedCardImage: import("react").FunctionComponent<Pick<import("react-native").ImageProps & {
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: import("react").ComponentType<any>;
    PlaceholderContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
} & Partial<import("../config").ThemeProps<import("..").ImageProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "ImageComponent" | "PlaceholderContent" | "containerStyle" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration">> | import("react").ForwardRefExoticComponent<import("react-native").ImageProps & {
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: import("react").ComponentType<any>;
    PlaceholderContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
} & Partial<import("../config").ThemeProps<import("..").ImageProps>>>;
declare const ThemedCardTitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
export declare type CardProps = RneFunctionComponent<CardBaseProps> & {
    Divider: typeof ThemedCardDivider;
    Image: typeof ThemedCardImage;
    Title: typeof ThemedCardTitle;
    FeaturedTitle: typeof ThemedCardFeaturedTitle;
    FeaturedSubTitle: typeof ThemedCardFeaturedSubtitle;
};
export declare const Card: CardProps;
declare const ThemedCard: (import("react").FunctionComponent<Pick<CardBaseProps & Partial<import("../config").ThemeProps<CardBaseProps>>, "containerStyle" | "wrapperStyle">> & {
    Divider: import("react").FunctionComponent<Pick<import("react-native").ViewProps & {
        color?: string;
        inset?: boolean;
        insetType?: "left" | "right" | "middle";
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        subHeader?: string;
        subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        orientation?: "horizontal" | "vertical";
        width?: number;
    } & Partial<import("../config").ThemeProps<import("..").DividerProps>>, "style" | "onLayout" | "testID" | "width" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "color" | "inset" | "insetType" | "orientation" | "subHeader" | "subHeaderStyle">> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
        color?: string;
        inset?: boolean;
        insetType?: "left" | "right" | "middle";
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        subHeader?: string;
        subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        orientation?: "horizontal" | "vertical";
        width?: number;
    } & Partial<import("../config").ThemeProps<import("..").DividerProps>>>;
    Image: import("react").FunctionComponent<Pick<import("react-native").ImageProps & {
        Component?: typeof import("react").Component;
        onPress?(): void;
        onLongPress?(): void;
        ImageComponent?: import("react").ComponentType<any>;
        PlaceholderContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        transition?: boolean;
        transitionDuration?: number;
    } & Partial<import("../config").ThemeProps<import("..").ImageProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "ImageComponent" | "PlaceholderContent" | "containerStyle" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration">> | import("react").ForwardRefExoticComponent<import("react-native").ImageProps & {
        Component?: typeof import("react").Component;
        onPress?(): void;
        onLongPress?(): void;
        ImageComponent?: import("react").ComponentType<any>;
        PlaceholderContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        transition?: boolean;
        transitionDuration?: number;
    } & Partial<import("../config").ThemeProps<import("..").ImageProps>>>;
    Title: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
    FeaturedTitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
    FeaturedSubtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
}) | (import("react").ForwardRefExoticComponent<CardBaseProps & Partial<import("../config").ThemeProps<CardBaseProps>>> & {
    Divider: import("react").FunctionComponent<Pick<import("react-native").ViewProps & {
        color?: string;
        inset?: boolean;
        insetType?: "left" | "right" | "middle";
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        subHeader?: string;
        subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        orientation?: "horizontal" | "vertical";
        width?: number;
    } & Partial<import("../config").ThemeProps<import("..").DividerProps>>, "style" | "onLayout" | "testID" | "width" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "color" | "inset" | "insetType" | "orientation" | "subHeader" | "subHeaderStyle">> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
        color?: string;
        inset?: boolean;
        insetType?: "left" | "right" | "middle";
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        subHeader?: string;
        subHeaderStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        orientation?: "horizontal" | "vertical";
        width?: number;
    } & Partial<import("../config").ThemeProps<import("..").DividerProps>>>;
    Image: import("react").FunctionComponent<Pick<import("react-native").ImageProps & {
        Component?: typeof import("react").Component;
        onPress?(): void;
        onLongPress?(): void;
        ImageComponent?: import("react").ComponentType<any>;
        PlaceholderContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        transition?: boolean;
        transitionDuration?: number;
    } & Partial<import("../config").ThemeProps<import("..").ImageProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "ImageComponent" | "PlaceholderContent" | "containerStyle" | "childrenContainerStyle" | "placeholderStyle" | "transition" | "transitionDuration">> | import("react").ForwardRefExoticComponent<import("react-native").ImageProps & {
        Component?: typeof import("react").Component;
        onPress?(): void;
        onLongPress?(): void;
        ImageComponent?: import("react").ComponentType<any>;
        PlaceholderContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        transition?: boolean;
        transitionDuration?: number;
    } & Partial<import("../config").ThemeProps<import("..").ImageProps>>>;
    Title: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
    FeaturedTitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
    FeaturedSubtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & Partial<import("../config").ThemeProps<import("..").TextProps>>>;
});
export default ThemedCard;
