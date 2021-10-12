/// <reference types="react" />
import { ListItemProps } from './ListItemBase';
import ListItemContent from './ListItemContent';
import ListItemChevron from './ListItemChevron';
import ListItemInput from './ListItemInput';
import ListItemCheckBox from './ListItemCheckBox';
import ListItemButtonGroup from './ListItemButtonGroup';
import ListItemTitle from './ListItemTitle';
import ListItemSubtitle from './ListItemSubtitle';
import ListItemSwipeable from './ListItemSwipeable';
import ListItemAccordion from './ListItemAccordion';
import { RneFunctionComponent } from '../helpers';
interface ListItem extends RneFunctionComponent<ListItemProps> {
    Accordion: typeof ListItemAccordion;
    Chevron: typeof ListItemChevron;
    Content: typeof ListItemContent;
    Input: typeof ListItemInput;
    Title: typeof ListItemTitle;
    Subtitle: typeof ListItemSubtitle;
    Swipeable: typeof ListItemSwipeable;
    CheckBox: typeof ListItemCheckBox;
    ButtonGroup: typeof ListItemButtonGroup;
}
declare const ListItem: ListItem;
export { ListItem };
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
} & Partial<import("../config").ThemeProps<ListItemProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "Component" | "containerStyle" | "disabledStyle" | "children" | "linearGradientProps" | "ViewComponent" | "pad" | "topDivider" | "bottomDivider">> & {
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
        icon?: import("../icons/Icon").IconNode;
        expandIcon?: import("../icons/Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "spring" | "timing";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<import("./ListItemAccordion").ListItemAccordionProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "Component" | "containerStyle" | "disabledStyle" | "children" | "icon" | "linearGradientProps" | "ViewComponent" | "pad" | "topDivider" | "bottomDivider" | "isExpanded" | "expandIcon" | "content" | "noRotation" | "noIcon" | "animation">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
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
        icon?: import("../icons/Icon").IconNode;
        expandIcon?: import("../icons/Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "spring" | "timing";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<import("./ListItemAccordion").ListItemAccordionProps>>>;
    Chevron: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, "style" | "onLayout" | "borderRadius" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "color" | "iconStyle" | "backgroundColor" | "size" | "name" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "Component" | "reverse" | "containerStyle" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
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
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
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
    }>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "right" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
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
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
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
    }>>>;
    Input: import("react").FunctionComponent<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../icons/Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../icons/Icon").IconNode;
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
    } & Partial<import("../config").ThemeProps<import("..").InputProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "allowFontScaling" | "numberOfLines" | "nativeID" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "hitSlop" | "onBlur" | "onFocus" | "hasTVPreferredFocus" | "tvParallaxProperties" | "containerStyle" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "ref" | "label" | "placeholder" | "key" | "value" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage">> | import("react").ForwardRefExoticComponent<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../icons/Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../icons/Icon").IconNode;
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
    }>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "right">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    Subtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "right">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    Swipeable: RneFunctionComponent<import("./ListItemSwipeable").ListItemSwipeableProps>;
    CheckBox: import("react").FunctionComponent<Pick<import("react-native").TouchableOpacityProps & import("../checkbox/CheckBoxIcon").CheckBoxIconProps & {
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
    } & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "center" | "disabled" | "size" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "Component" | "containerStyle" | "title" | "right" | "textStyle" | "titleProps" | "iconRight" | "wrapperStyle" | "checked" | "onIconPress" | "onLongIconPress" | "checkedIcon" | "uncheckedIcon" | "iconType" | "checkedColor" | "uncheckedColor" | "checkedTitle" | "fontFamily">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("../checkbox/CheckBoxIcon").CheckBoxIconProps & {
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
    ButtonGroup: import("react").FunctionComponent<Pick<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>, "button" | "disabled" | "onPress" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "Component" | "containerStyle" | "disabledStyle" | "textStyle" | "buttonStyle" | "buttons" | "selectedTextStyle" | "selectedButtonStyle" | "selectedIndex" | "selectedIndexes" | "setOpacityTo" | "innerBorderStyle" | "buttonContainerStyle" | "selectMultiple" | "disabledTextStyle" | "disabledSelectedStyle" | "disabledSelectedTextStyle" | "vertical">> | import("react").ForwardRefExoticComponent<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>>;
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
} & Partial<import("../config").ThemeProps<ListItemProps>>> & {
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
        icon?: import("../icons/Icon").IconNode;
        expandIcon?: import("../icons/Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "spring" | "timing";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<import("./ListItemAccordion").ListItemAccordionProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "Component" | "containerStyle" | "disabledStyle" | "children" | "icon" | "linearGradientProps" | "ViewComponent" | "pad" | "topDivider" | "bottomDivider" | "isExpanded" | "expandIcon" | "content" | "noRotation" | "noIcon" | "animation">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
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
        icon?: import("../icons/Icon").IconNode;
        expandIcon?: import("../icons/Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "spring" | "timing";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<import("./ListItemAccordion").ListItemAccordionProps>>>;
    Chevron: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, "style" | "onLayout" | "borderRadius" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "color" | "iconStyle" | "backgroundColor" | "size" | "name" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "Component" | "reverse" | "containerStyle" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
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
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
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
    }>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "right" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
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
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
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
    }>>>;
    Input: import("react").FunctionComponent<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../icons/Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../icons/Icon").IconNode;
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
    } & Partial<import("../config").ThemeProps<import("..").InputProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "allowFontScaling" | "numberOfLines" | "nativeID" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "hitSlop" | "onBlur" | "onFocus" | "hasTVPreferredFocus" | "tvParallaxProperties" | "containerStyle" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "ref" | "label" | "placeholder" | "key" | "value" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage">> | import("react").ForwardRefExoticComponent<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../icons/Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../icons/Icon").IconNode;
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
    }>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "right">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    Subtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "right">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    Swipeable: RneFunctionComponent<import("./ListItemSwipeable").ListItemSwipeableProps>;
    CheckBox: import("react").FunctionComponent<Pick<import("react-native").TouchableOpacityProps & import("../checkbox/CheckBoxIcon").CheckBoxIconProps & {
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
    } & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "center" | "disabled" | "size" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "Component" | "containerStyle" | "title" | "right" | "textStyle" | "titleProps" | "iconRight" | "wrapperStyle" | "checked" | "onIconPress" | "onLongIconPress" | "checkedIcon" | "uncheckedIcon" | "iconType" | "checkedColor" | "uncheckedColor" | "checkedTitle" | "fontFamily">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("../checkbox/CheckBoxIcon").CheckBoxIconProps & {
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
    ButtonGroup: import("react").FunctionComponent<Pick<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>, "button" | "disabled" | "onPress" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "Component" | "containerStyle" | "disabledStyle" | "textStyle" | "buttonStyle" | "buttons" | "selectedTextStyle" | "selectedButtonStyle" | "selectedIndex" | "selectedIndexes" | "setOpacityTo" | "innerBorderStyle" | "buttonContainerStyle" | "selectMultiple" | "disabledTextStyle" | "disabledSelectedStyle" | "disabledSelectedTextStyle" | "vertical">> | import("react").ForwardRefExoticComponent<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>>;
});
export default ThemedListItem;
