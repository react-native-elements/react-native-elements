/// <reference types="react" />
import { ListItemBaseProps } from './ListItem';
import { ListItemSwipeableProps } from './ListItem.Swipeable';
import { ListItemAccordionProps } from './ListItem.Accordion';
import { RneFunctionComponent } from '../helpers';
declare const ThemedListItemContent: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "right" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
} & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>>;
declare const ThemedListItemChevron: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, "style" | "onLayout" | "borderRadius" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "hitSlop" | "nativeID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "backgroundColor" | "iconStyle" | "size" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "color" | "name" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "background" | "useForeground" | "type" | "reverse" | "raised" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
declare const ThemedListItemInput: import("react").FunctionComponent<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftIcon?: import("../Icon").IconNode;
    leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightIcon?: import("../Icon").IconNode;
    rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    InputComponent?: typeof import("react").Component;
    errorProps?: object;
    errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    errorMessage?: string;
    label?: import("react").ReactNode;
    labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
} & Partial<import("../config").ThemeProps<import("..").InputProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "containerStyle" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "onBlur" | "onFocus" | "placeholder" | "ref" | "label" | "key" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "value" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage">> | import("react").ForwardRefExoticComponent<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftIcon?: import("../Icon").IconNode;
    leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightIcon?: import("../Icon").IconNode;
    rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    InputComponent?: typeof import("react").Component;
    errorProps?: object;
    errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    errorMessage?: string;
    label?: import("react").ReactNode;
    labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
} & Partial<import("../config").ThemeProps<import("..").InputProps>>>;
declare const ThemedListItemCheckBox: import("react").FunctionComponent<Pick<import("react-native").TouchableOpacityProps & import("../CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
    Component?: typeof import("react").Component;
    iconRight?: boolean;
    title?: string | import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    titleProps?: import("react-native").TextProps;
    center?: boolean;
    right?: boolean;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    checkedTitle?: string;
    fontFamily?: string;
} & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "center" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "right" | "title" | "size" | "textStyle" | "titleProps" | "iconRight" | "wrapperStyle" | "checked" | "onIconPress" | "onLongIconPress" | "checkedIcon" | "uncheckedIcon" | "iconType" | "checkedColor" | "uncheckedColor" | "checkedTitle" | "fontFamily">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("../CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
    Component?: typeof import("react").Component;
    iconRight?: boolean;
    title?: string | import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    titleProps?: import("react-native").TextProps;
    center?: boolean;
    right?: boolean;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    checkedTitle?: string;
    fontFamily?: string;
} & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>>;
declare const ThemedListItemButtonGroup: import("react").FunctionComponent<Pick<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>, "onPress" | "Component" | "containerStyle" | "activeOpacity" | "disabled" | "button" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "disabledStyle" | "textStyle" | "buttons" | "selectedIndex" | "selectedIndexes" | "selectMultiple" | "innerBorderStyle" | "buttonStyle" | "buttonContainerStyle" | "selectedTextStyle" | "selectedButtonStyle" | "setOpacityTo" | "disabledTextStyle" | "disabledSelectedStyle" | "disabledSelectedTextStyle" | "vertical">> | import("react").ForwardRefExoticComponent<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>>;
declare const ThemedListItemTitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
    right?: boolean;
}>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "right" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
    right?: boolean;
}>>>;
declare const ThemedListItemSubtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "right" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>>;
declare const ThemedListItemSwipeable: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    leftContent?: import("react").ReactNode;
    rightContent?: import("react").ReactNode;
    leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
    onLeftSwipe?: () => any;
    onRightSwipe?: () => any;
} & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "children" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "disabledStyle" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider" | "leftStyle" | "rightStyle" | "leftContent" | "rightContent" | "leftWidth" | "rightWidth" | "onLeftSwipe" | "onRightSwipe">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    leftContent?: import("react").ReactNode;
    rightContent?: import("react").ReactNode;
    leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
    onLeftSwipe?: () => any;
    onRightSwipe?: () => any;
} & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>>;
declare const ThemedListItemAccordion: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: import("../Icon").IconNode;
    expandIcon?: import("../Icon").IconNode;
    content?: import("react").ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: boolean | {
        type?: "timing" | "spring";
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<ListItemAccordionProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "children" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "icon" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "disabledStyle" | "linearGradientProps" | "ViewComponent" | "content" | "pad" | "bottomDivider" | "topDivider" | "isExpanded" | "expandIcon" | "noRotation" | "noIcon" | "animation">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: import("../Icon").IconNode;
    expandIcon?: import("../Icon").IconNode;
    content?: import("react").ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: boolean | {
        type?: "timing" | "spring";
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<ListItemAccordionProps>>>;
export declare type ListItemProps = RneFunctionComponent<ListItemBaseProps> & {
    Accordion: typeof ThemedListItemAccordion;
    Chevron: typeof ThemedListItemChevron;
    Content: typeof ThemedListItemContent;
    Input: typeof ThemedListItemInput;
    Title: typeof ThemedListItemTitle;
    Subtitle: typeof ThemedListItemSubtitle;
    Swipeable: typeof ThemedListItemSwipeable;
    CheckBox: typeof ThemedListItemCheckBox;
    ButtonGroup: typeof ThemedListItemButtonGroup;
};
export declare const ListItem: ListItemProps;
export type { ListItemAccordionProps, ListItemSwipeableProps };
declare const ThemedListItem: (import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & Partial<import("../config").ThemeProps<ListItemBaseProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "children" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "disabledStyle" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider">> & {
    Accordion: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../Icon").IconNode;
        expandIcon?: import("../Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "timing" | "spring";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<ListItemAccordionProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "children" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "icon" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "disabledStyle" | "linearGradientProps" | "ViewComponent" | "content" | "pad" | "bottomDivider" | "topDivider" | "isExpanded" | "expandIcon" | "noRotation" | "noIcon" | "animation">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../Icon").IconNode;
        expandIcon?: import("../Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "timing" | "spring";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<ListItemAccordionProps>>>;
    Chevron: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, "style" | "onLayout" | "borderRadius" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "hitSlop" | "nativeID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "backgroundColor" | "iconStyle" | "size" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "color" | "name" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "background" | "useForeground" | "type" | "reverse" | "raised" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
    Content: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "right" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>>;
    Input: import("react").FunctionComponent<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../Icon").IconNode;
        rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        InputComponent?: typeof import("react").Component;
        errorProps?: object;
        errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        errorMessage?: string;
        label?: import("react").ReactNode;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & Partial<import("../config").ThemeProps<import("..").InputProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "containerStyle" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "onBlur" | "onFocus" | "placeholder" | "ref" | "label" | "key" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "value" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage">> | import("react").ForwardRefExoticComponent<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../Icon").IconNode;
        rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        InputComponent?: typeof import("react").Component;
        errorProps?: object;
        errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        errorMessage?: string;
        label?: import("react").ReactNode;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & Partial<import("../config").ThemeProps<import("..").InputProps>>>;
    Title: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "right" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    Subtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "right" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>>;
    Swipeable: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "children" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "disabledStyle" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider" | "leftStyle" | "rightStyle" | "leftContent" | "rightContent" | "leftWidth" | "rightWidth" | "onLeftSwipe" | "onRightSwipe">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>>;
    CheckBox: import("react").FunctionComponent<Pick<import("react-native").TouchableOpacityProps & import("../CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
        Component?: typeof import("react").Component;
        iconRight?: boolean;
        title?: string | import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
        titleProps?: import("react-native").TextProps;
        center?: boolean;
        right?: boolean;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        checkedTitle?: string;
        fontFamily?: string;
    } & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "center" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "right" | "title" | "size" | "textStyle" | "titleProps" | "iconRight" | "wrapperStyle" | "checked" | "onIconPress" | "onLongIconPress" | "checkedIcon" | "uncheckedIcon" | "iconType" | "checkedColor" | "uncheckedColor" | "checkedTitle" | "fontFamily">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("../CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
        Component?: typeof import("react").Component;
        iconRight?: boolean;
        title?: string | import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
        titleProps?: import("react-native").TextProps;
        center?: boolean;
        right?: boolean;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        checkedTitle?: string;
        fontFamily?: string;
    } & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>>;
    ButtonGroup: import("react").FunctionComponent<Pick<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>, "onPress" | "Component" | "containerStyle" | "activeOpacity" | "disabled" | "button" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "disabledStyle" | "textStyle" | "buttons" | "selectedIndex" | "selectedIndexes" | "selectMultiple" | "innerBorderStyle" | "buttonStyle" | "buttonContainerStyle" | "selectedTextStyle" | "selectedButtonStyle" | "setOpacityTo" | "disabledTextStyle" | "disabledSelectedStyle" | "disabledSelectedTextStyle" | "vertical">> | import("react").ForwardRefExoticComponent<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>>;
}) | (import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & Partial<import("../config").ThemeProps<ListItemBaseProps>>> & {
    Accordion: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../Icon").IconNode;
        expandIcon?: import("../Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "timing" | "spring";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<ListItemAccordionProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "children" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "icon" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "disabledStyle" | "linearGradientProps" | "ViewComponent" | "content" | "pad" | "bottomDivider" | "topDivider" | "isExpanded" | "expandIcon" | "noRotation" | "noIcon" | "animation">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../Icon").IconNode;
        expandIcon?: import("../Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "timing" | "spring";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<ListItemAccordionProps>>>;
    Chevron: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, "style" | "onLayout" | "borderRadius" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "hitSlop" | "nativeID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "backgroundColor" | "iconStyle" | "size" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "color" | "name" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "background" | "useForeground" | "type" | "reverse" | "raised" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
    Content: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "right" | "h1" | "h2" | "h3" | "h4" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>>;
    Input: import("react").FunctionComponent<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../Icon").IconNode;
        rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        InputComponent?: typeof import("react").Component;
        errorProps?: object;
        errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        errorMessage?: string;
        label?: import("react").ReactNode;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & Partial<import("../config").ThemeProps<import("..").InputProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "containerStyle" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "disabled" | "onBlur" | "onFocus" | "placeholder" | "ref" | "label" | "key" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "value" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage">> | import("react").ForwardRefExoticComponent<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../Icon").IconNode;
        rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        InputComponent?: typeof import("react").Component;
        errorProps?: object;
        errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        errorMessage?: string;
        label?: import("react").ReactNode;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & Partial<import("../config").ThemeProps<import("..").InputProps>>>;
    Title: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "right" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    Subtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "nativeID" | "right" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>>;
    Swipeable: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "children" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "disabledStyle" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider" | "leftStyle" | "rightStyle" | "leftContent" | "rightContent" | "leftWidth" | "rightWidth" | "onLeftSwipe" | "onRightSwipe">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>>;
    CheckBox: import("react").FunctionComponent<Pick<import("react-native").TouchableOpacityProps & import("../CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
        Component?: typeof import("react").Component;
        iconRight?: boolean;
        title?: string | import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
        titleProps?: import("react-native").TextProps;
        center?: boolean;
        right?: boolean;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        checkedTitle?: string;
        fontFamily?: string;
    } & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "center" | "onPress" | "Component" | "onLongPress" | "containerStyle" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "right" | "title" | "size" | "textStyle" | "titleProps" | "iconRight" | "wrapperStyle" | "checked" | "onIconPress" | "onLongIconPress" | "checkedIcon" | "uncheckedIcon" | "iconType" | "checkedColor" | "uncheckedColor" | "checkedTitle" | "fontFamily">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("../CheckBox/components/CheckBoxIcon").CheckBoxIconProps & {
        Component?: typeof import("react").Component;
        iconRight?: boolean;
        title?: string | import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
        titleProps?: import("react-native").TextProps;
        center?: boolean;
        right?: boolean;
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        textStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        checkedTitle?: string;
        fontFamily?: string;
    } & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>>;
    ButtonGroup: import("react").FunctionComponent<Pick<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>, "onPress" | "Component" | "containerStyle" | "activeOpacity" | "disabled" | "button" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "disabledStyle" | "textStyle" | "buttons" | "selectedIndex" | "selectedIndexes" | "selectMultiple" | "innerBorderStyle" | "buttonStyle" | "buttonContainerStyle" | "selectedTextStyle" | "selectedButtonStyle" | "setOpacityTo" | "disabledTextStyle" | "disabledSelectedStyle" | "disabledSelectedTextStyle" | "vertical">> | import("react").ForwardRefExoticComponent<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>>;
});
export default ThemedListItem;
