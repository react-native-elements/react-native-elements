/// <reference types="react" />
import { ListItemProps } from './ListItem';
import { ListItemContentProps } from './ListItem.Content';
import { ListItemChevronProps } from './ListItem.Chevron';
import { ListItemInputProps } from './ListItem.Input';
import { ListItemCheckBoxProps } from './ListItem.CheckBox';
import { ListItemButtonGroupProps } from './ListItem.ButtonGroup';
import { ListItemTitleProps } from './ListItem.Title';
import { ListItemSubtitleProps } from './ListItem.Subtitle';
import { ListItemSwipeableProps } from './ListItem.Swipeable';
import { ListItemAccordionProps } from './ListItem.Accordion';
export declare const ListItem: import("..").RneFunctionComponent<ListItemProps> & {
    Accordion: import("..").RneFunctionComponent<ListItemAccordionProps>;
    ButtonGroup: import("..").RneFunctionComponent<ListItemButtonGroupProps>;
    CheckBox: import("..").RneFunctionComponent<ListItemCheckBoxProps>;
    Chevron: import("..").RneFunctionComponent<ListItemChevronProps>;
    Content: import("..").RneFunctionComponent<ListItemContentProps>;
    Input: import("react").ForwardRefExoticComponent<Pick<ListItemInputProps & {
        theme?: import("..").Theme;
    }, "testID" | "containerStyle" | "disabled" | "onPressIn" | "onPressOut" | "children" | "style" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "value" | "theme" | "onBlur" | "onFocus" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "textAlign" | "textAlignVertical" | "label" | "placeholder" | "key" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "autoFocus" | "defaultValue" | "autoComplete" | "maxLength" | "autoCapitalize" | "autoCorrect" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "editable" | "keyboardType" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "shake" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "ErrorComponent" | "labelStyle" | "labelProps" | "renderErrorMessage"> & import("react").RefAttributes<import("react-native").TextInput>>;
    Subtitle: import("..").RneFunctionComponent<ListItemSubtitleProps>;
    Swipeable: import("..").RneFunctionComponent<ListItemSwipeableProps>;
    Title: import("..").RneFunctionComponent<ListItemTitleProps>;
};
export type { ListItemAccordionProps, ListItemButtonGroupProps, ListItemCheckBoxProps, ListItemChevronProps, ListItemContentProps, ListItemInputProps, ListItemProps, ListItemSubtitleProps, ListItemSwipeableProps, ListItemTitleProps, };
