import React from 'react';
import { StyleProp, TouchableHighlightProps, ViewStyle } from 'react-native';
import ListItemContent from './ListItemContent';
import ListItemChevron from './ListItemChevron';
import ListItemInput from './ListItemInput';
import ListItemCheckBox from './ListItemCheckBox';
import ListItemButtonGroup from './ListItemButtonGroup';
import ListItemTitle from './ListItemTitle';
import ListItemSubtitle from './ListItemSubtitle';
import { Theme } from '../config/theme';
export declare type ListItemProps = TouchableHighlightProps & {
    containerStyle?: StyleProp<ViewStyle>;
    disabledStyle?: StyleProp<ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    linearGradientProps?: any;
    theme?: Theme;
    children?: any;
};
interface ListItem extends React.FunctionComponent<ListItemProps> {
    Chevron: typeof ListItemChevron;
    Content: typeof ListItemContent;
    Input: typeof ListItemInput;
    Title: typeof ListItemTitle;
    Subtitle: typeof ListItemSubtitle;
    CheckBox: typeof ListItemCheckBox;
    ButtonGroup: typeof ListItemButtonGroup;
}
declare const ListItem: ListItem;
export { ListItem };
declare const ThemedListItem: (React.FunctionComponent<Pick<ListItemProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "onPress" | "onLongPress" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "Component" | "containerStyle" | "disabledStyle" | "children" | "linearGradientProps" | "ViewComponent" | "pad" | "topDivider" | "bottomDivider">> & {
    Chevron: React.FunctionComponent<Pick<Partial<import("..").IconProps>, "style" | "onLayout" | "borderRadius" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "color" | "iconStyle" | "backgroundColor" | "size" | "name" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "Component" | "reverse" | "containerStyle" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | React.ForwardRefExoticComponent<Partial<import("..").IconProps>>;
    Content: React.FunctionComponent<Pick<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
        theme?: Partial<import("../config").FullTheme>;
    } & {
        right?: boolean;
    }, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "right" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
        theme?: Partial<import("../config").FullTheme>;
    } & {
        right?: boolean;
    }>;
    Input: React.FunctionComponent<Pick<import("..").InputProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "allowFontScaling" | "numberOfLines" | "nativeID" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "hitSlop" | "onBlur" | "onFocus" | "hasTVPreferredFocus" | "tvParallaxProperties" | "containerStyle" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "label" | "placeholder" | "value" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage">> | React.ForwardRefExoticComponent<import("..").InputProps>;
    Title: React.FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    }, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "right">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    }>;
    Subtitle: React.FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    }, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "right">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    }>;
    CheckBox: React.FunctionComponent<Pick<import("..").CheckBoxProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "center" | "disabled" | "size" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "Component" | "containerStyle" | "title" | "right" | "textStyle" | "titleProps" | "iconRight" | "wrapperStyle" | "checked" | "onIconPress" | "onLongIconPress" | "checkedIcon" | "uncheckedIcon" | "iconType" | "checkedColor" | "uncheckedColor" | "checkedTitle" | "fontFamily">> | React.ForwardRefExoticComponent<import("..").CheckBoxProps>;
    ButtonGroup: React.FunctionComponent<Pick<import("..").ButtonGroupProps, "button" | "disabled" | "onPress" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "Component" | "containerStyle" | "disabledStyle" | "textStyle" | "buttonStyle" | "buttons" | "selectedTextStyle" | "selectedButtonStyle" | "selectedIndex" | "selectedIndexes" | "setOpacityTo" | "innerBorderStyle" | "buttonContainerStyle" | "selectMultiple" | "disabledTextStyle" | "disabledSelectedStyle" | "disabledSelectedTextStyle" | "vertical">> | React.ForwardRefExoticComponent<import("..").ButtonGroupProps>;
}) | (React.ForwardRefExoticComponent<ListItemProps> & {
    Chevron: React.FunctionComponent<Pick<Partial<import("..").IconProps>, "style" | "onLayout" | "borderRadius" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "raised" | "disabled" | "color" | "iconStyle" | "backgroundColor" | "size" | "name" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "background" | "useForeground" | "type" | "Component" | "reverse" | "containerStyle" | "iconProps" | "reverseColor" | "disabledStyle" | "solid" | "brand">> | React.ForwardRefExoticComponent<Partial<import("..").IconProps>>;
    Content: React.FunctionComponent<Pick<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
        theme?: Partial<import("../config").FullTheme>;
    } & {
        right?: boolean;
    }, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "right" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
        theme?: Partial<import("../config").FullTheme>;
    } & {
        right?: boolean;
    }>;
    Input: React.FunctionComponent<Pick<import("..").InputProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "allowFontScaling" | "numberOfLines" | "nativeID" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "hitSlop" | "onBlur" | "onFocus" | "hasTVPreferredFocus" | "tvParallaxProperties" | "containerStyle" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "label" | "placeholder" | "value" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage">> | React.ForwardRefExoticComponent<import("..").InputProps>;
    Title: React.FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    }, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "right">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    }>;
    Subtitle: React.FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    }, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "right">> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    }>;
    CheckBox: React.FunctionComponent<Pick<import("..").CheckBoxProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "center" | "disabled" | "size" | "onPress" | "onLongPress" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "hitSlop" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "Component" | "containerStyle" | "title" | "right" | "textStyle" | "titleProps" | "iconRight" | "wrapperStyle" | "checked" | "onIconPress" | "onLongIconPress" | "checkedIcon" | "uncheckedIcon" | "iconType" | "checkedColor" | "uncheckedColor" | "checkedTitle" | "fontFamily">> | React.ForwardRefExoticComponent<import("..").CheckBoxProps>;
    ButtonGroup: React.FunctionComponent<Pick<import("..").ButtonGroupProps, "button" | "disabled" | "onPress" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "underlayColor" | "Component" | "containerStyle" | "disabledStyle" | "textStyle" | "buttonStyle" | "buttons" | "selectedTextStyle" | "selectedButtonStyle" | "selectedIndex" | "selectedIndexes" | "setOpacityTo" | "innerBorderStyle" | "buttonContainerStyle" | "selectMultiple" | "disabledTextStyle" | "disabledSelectedStyle" | "disabledSelectedTextStyle" | "vertical">> | React.ForwardRefExoticComponent<import("..").ButtonGroupProps>;
});
export default ThemedListItem;
