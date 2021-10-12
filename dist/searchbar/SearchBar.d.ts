import React from 'react';
import IOSSearchBar, { SearchBarIosProps } from './SearchBar-ios';
import { SearchBarAndroidProps } from './SearchBar-android';
import { SearchBarDefaultProps } from './SearchBar-default';
import { ActivityIndicatorProps, StyleProp, TextStyle, ViewStyle, TextInput } from 'react-native';
import { IconNode } from '../icons/Icon';
import { ThemeProps } from '../config';
export declare type SearchBarBaseProps = React.ComponentPropsWithRef<typeof TextInput> & {
    platform: 'default' | 'ios' | 'android';
    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    clearIcon?: IconNode;
    searchIcon?: IconNode;
    inputStyle?: StyleProp<TextStyle>;
    loadingProps?: ActivityIndicatorProps;
    showLoading?: boolean;
    leftIconContainerStyle?: StyleProp<ViewStyle>;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    onClear?(): void;
    onFocus?(): void;
    onBlur?(): void;
    onChangeText?(text: string): void;
    onCancel?(): void;
};
export declare type SearchBarProps = SearchBarBaseProps & SearchBarDefaultProps & SearchBarAndroidProps & SearchBarIosProps;
declare class SearchBar extends React.Component<SearchBarProps & Partial<ThemeProps<SearchBarProps>>> {
    searchbar: IOSSearchBar;
    static defaultProps: {
        platform: "default";
    };
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    render(): JSX.Element;
}
export { SearchBar };
declare const _default: React.FunctionComponent<Pick<import("react-native").TextInputProps & React.RefAttributes<TextInput> & {
    platform: "ios" | "android" | "default";
    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    clearIcon?: IconNode;
    searchIcon?: IconNode;
    inputStyle?: StyleProp<TextStyle>;
    loadingProps?: ActivityIndicatorProps;
    showLoading?: boolean;
    leftIconContainerStyle?: StyleProp<ViewStyle>;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    onClear?(): void;
    onFocus?(): void;
    onBlur?(): void;
    onChangeText?(text: string): void;
    onCancel?(): void;
} & {
    value: string;
    loadingProps: {};
    showLoading: boolean;
    lightTheme: boolean;
    round: boolean;
    onClear: () => any;
    onFocus: () => any;
    onBlur: () => any;
    onChangeText: () => any;
} & {
    containerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: StyleProp<TextStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    leftIcon?: IconNode;
    leftIconContainerStyle?: StyleProp<ViewStyle>;
    rightIcon?: IconNode;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    InputComponent?: typeof React.Component;
    errorProps?: object;
    errorStyle?: StyleProp<TextStyle>;
    errorMessage?: string;
    label?: React.ReactNode;
    labelStyle?: StyleProp<TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
} & {
    onClear: () => any;
    onCancel: () => any;
    onFocus: () => any;
    onBlur: () => any;
    onChangeText: () => any;
} & {
    cancelIcon?: IconNode;
} & {
    value: string;
    cancelButtonTitle: string;
    loadingProps: {};
    cancelButtonProps: {};
    showLoading: boolean;
    onClear: () => any;
    onCancel: () => any;
    onFocus: () => any;
    onBlur: () => any;
    onChangeText: () => any;
    searchIcon: {
        name: string;
    };
    clearIcon: {
        name: string;
    };
    showCancel: boolean;
} & {
    cancelButtonProps?: Partial<import("react-native").TouchableOpacityProps> & {
        buttonStyle?: StyleProp<ViewStyle>;
        buttonTextStyle?: StyleProp<TextStyle>;
        color?: string;
        buttonDisabledStyle?: StyleProp<ViewStyle>;
        buttonDisabledTextStyle?: StyleProp<ViewStyle>;
    };
    cancelButtonTitle?: string;
    showCancel?: boolean;
} & Partial<ThemeProps<SearchBarProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "allowFontScaling" | "numberOfLines" | "nativeID" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "hitSlop" | "onBlur" | "onFocus" | "hasTVPreferredFocus" | "tvParallaxProperties" | "containerStyle" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "platform" | "ref" | "label" | "onClear" | "placeholder" | "key" | "value" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "loadingProps" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "textAlign" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage" | "clearIcon" | "searchIcon" | "showLoading" | "onCancel" | "cancelButtonTitle" | "cancelButtonProps" | "showCancel" | "cancelIcon" | "lightTheme" | "round">> | React.ForwardRefExoticComponent<import("react-native").TextInputProps & React.RefAttributes<TextInput> & {
    platform: "ios" | "android" | "default";
    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    clearIcon?: IconNode;
    searchIcon?: IconNode;
    inputStyle?: StyleProp<TextStyle>;
    loadingProps?: ActivityIndicatorProps;
    showLoading?: boolean;
    leftIconContainerStyle?: StyleProp<ViewStyle>;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    onClear?(): void;
    onFocus?(): void;
    onBlur?(): void;
    onChangeText?(text: string): void;
    onCancel?(): void;
} & {
    value: string;
    loadingProps: {};
    showLoading: boolean;
    lightTheme: boolean;
    round: boolean;
    onClear: () => any;
    onFocus: () => any;
    onBlur: () => any;
    onChangeText: () => any;
} & {
    containerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: StyleProp<TextStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    leftIcon?: IconNode;
    leftIconContainerStyle?: StyleProp<ViewStyle>;
    rightIcon?: IconNode;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    InputComponent?: typeof React.Component;
    errorProps?: object;
    errorStyle?: StyleProp<TextStyle>;
    errorMessage?: string;
    label?: React.ReactNode;
    labelStyle?: StyleProp<TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
} & {
    onClear: () => any;
    onCancel: () => any;
    onFocus: () => any;
    onBlur: () => any;
    onChangeText: () => any;
} & {
    cancelIcon?: IconNode;
} & {
    value: string;
    cancelButtonTitle: string;
    loadingProps: {};
    cancelButtonProps: {};
    showLoading: boolean;
    onClear: () => any;
    onCancel: () => any;
    onFocus: () => any;
    onBlur: () => any;
    onChangeText: () => any;
    searchIcon: {
        name: string;
    };
    clearIcon: {
        name: string;
    };
    showCancel: boolean;
} & {
    cancelButtonProps?: Partial<import("react-native").TouchableOpacityProps> & {
        buttonStyle?: StyleProp<ViewStyle>;
        buttonTextStyle?: StyleProp<TextStyle>;
        color?: string;
        buttonDisabledStyle?: StyleProp<ViewStyle>;
        buttonDisabledTextStyle?: StyleProp<ViewStyle>;
    };
    cancelButtonTitle?: string;
    showCancel?: boolean;
} & Partial<ThemeProps<SearchBarProps>>>;
export default _default;
