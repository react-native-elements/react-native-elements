var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useRef, forwardRef, useImperativeHandle, } from 'react';
import { Pressable, LayoutAnimation, StyleSheet, View, ActivityIndicator, Text, } from 'react-native';
import { Input } from '../Input';
import { Icon } from '../Icon';
import { defaultTheme, renderNode } from '../helpers';
const defaultSearchIcon = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'ionicon',
        size: 20,
        name: 'search',
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.ios) === null || _c === void 0 ? void 0 : _c.grey,
    });
};
const defaultClearIcon = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'ionicon',
        name: 'close-circle',
        size: 20,
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.ios) === null || _c === void 0 ? void 0 : _c.grey,
    });
};
const SearchBarIOS = forwardRef((props, ref) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { theme = defaultTheme, cancelButtonProps = {}, cancelButtonTitle = 'Cancel', clearIcon = { name: 'close-circle' }, containerStyle, leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, placeholderTextColor, showLoading = false, loadingProps = {}, searchIcon = { name: 'search' }, showCancel = false, value = '', onClear = () => null, onCancel = () => null, onFocus = () => null, onBlur = () => null, onChangeText = () => null } = props, attributes = __rest(props, ["theme", "cancelButtonProps", "cancelButtonTitle", "clearIcon", "containerStyle", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "placeholderTextColor", "showLoading", "loadingProps", "searchIcon", "showCancel", "value", "onClear", "onCancel", "onFocus", "onBlur", "onChangeText"]);
    const inputRef = useRef(null);
    const [hasFocus, setHasFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(value === '');
    const [cancelButtonWidth, setCancelButtonWidth] = useState(null);
    useImperativeHandle(ref, () => ({
        focus: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        blur: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur(); },
        clear: () => {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.clear();
            handleChangeText('');
            onClear();
        },
        cancel: () => {
            handleChangeText('');
            if (showCancel) {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setHasFocus(false);
            }
            setTimeout(() => {
                var _a;
                (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
                onCancel();
            }, 0);
        },
    }));
    const handleFocus = (event) => {
        onFocus(event);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setHasFocus(true);
        setIsEmpty(value === '');
    };
    const handleBlur = (event) => {
        onBlur(event);
        if (!showCancel) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setHasFocus(false);
        }
    };
    const handleChangeText = (text) => {
        onChangeText(text);
        setIsEmpty(text === '');
    };
    const handleClear = () => {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.clear();
        handleChangeText('');
        onClear();
    };
    const handleCancel = () => {
        handleChangeText('');
        if (showCancel) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setHasFocus(false);
        }
        setTimeout(() => {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
            onCancel();
        }, 0);
    };
    const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest(loadingProps, ["style"]);
    const { buttonStyle, buttonTextStyle, color: buttonColor, disabled: buttonDisabled, buttonDisabledStyle, buttonDisabledTextStyle } = cancelButtonProps, otherCancelButtonProps = __rest(cancelButtonProps, ["buttonStyle", "buttonTextStyle", "color", "disabled", "buttonDisabledStyle", "buttonDisabledTextStyle"]);
    return (React.createElement(View, { testID: "RNE__SearchBar-wrapper", style: StyleSheet.flatten([
            styles.container,
            { backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.background },
            containerStyle,
        ]) },
        React.createElement(Input, Object.assign({ testID: "RNE__SearchBar", renderErrorMessage: false, value: value }, attributes, { onFocus: handleFocus, onBlur: handleBlur, onChangeText: handleChangeText, ref: inputRef, inputStyle: StyleSheet.flatten([styles.input, inputStyle]), containerStyle: {
                paddingHorizontal: 0,
            }, inputContainerStyle: StyleSheet.flatten([
                styles.inputContainer,
                { backgroundColor: (_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.platform) === null || _c === void 0 ? void 0 : _c.ios) === null || _d === void 0 ? void 0 : _d.searchBg },
                hasFocus && {
                    marginRight: cancelButtonWidth ? cancelButtonWidth : 0,
                },
                inputContainerStyle,
            ]), leftIcon: renderNode(Icon, searchIcon, defaultSearchIcon(theme)), leftIconContainerStyle: StyleSheet.flatten([
                styles.leftIconContainerStyle,
                leftIconContainerStyle,
            ]), placeholderTextColor: placeholderTextColor || ((_g = (_f = (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.platform) === null || _f === void 0 ? void 0 : _f.ios) === null || _g === void 0 ? void 0 : _g.grey), rightIcon: React.createElement(View, { style: { flexDirection: 'row' } },
                showLoading && (React.createElement(ActivityIndicator, Object.assign({ key: "loading", style: StyleSheet.flatten([{ marginRight: 5 }, loadingStyle]) }, otherLoadingProps))),
                !isEmpty &&
                    renderNode(Icon, clearIcon, Object.assign(Object.assign({}, defaultClearIcon(theme)), { key: 'cancel', onPress: handleClear }))), rightIconContainerStyle: StyleSheet.flatten([
                styles.rightIconContainerStyle,
                rightIconContainerStyle,
            ]) })),
        React.createElement(View, { style: StyleSheet.flatten([
                styles.cancelButtonContainer,
                {
                    opacity: cancelButtonWidth === null ? 0 : 1,
                    right: hasFocus ? 0 : cancelButtonWidth && -cancelButtonWidth,
                },
            ]), onLayout: (event) => setCancelButtonWidth(event.nativeEvent.layout.width), testID: "RNE__SearchBar-cancelButtonContainer" },
            React.createElement(Pressable, Object.assign({ accessibilityRole: "button", onPress: handleCancel, disabled: buttonDisabled }, otherCancelButtonProps),
                React.createElement(View, { style: StyleSheet.flatten([
                        buttonStyle,
                        buttonDisabled && buttonDisabledStyle,
                    ]), testID: "RNE__SearchBar-cancelButton" },
                    React.createElement(Text, { style: StyleSheet.flatten([
                            styles.buttonTextStyle,
                            buttonColor && { color: buttonColor },
                            buttonTextStyle,
                            buttonDisabled &&
                                (buttonDisabledTextStyle || styles.buttonTextDisabled),
                        ]) }, cancelButtonTitle))))));
});
const styles = StyleSheet.create({
    container: {
        paddingBottom: 13,
        paddingTop: 13,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
    },
    input: {
        marginLeft: 6,
        overflow: 'hidden',
    },
    inputContainer: {
        borderBottomWidth: 0,
        borderRadius: 9,
        minHeight: 36,
        marginLeft: 8,
        marginRight: 8,
    },
    rightIconContainerStyle: {
        marginRight: 8,
    },
    leftIconContainerStyle: {
        marginLeft: 8,
    },
    buttonTextStyle: {
        color: '#007aff',
        textAlign: 'center',
        padding: 8,
        fontSize: 18,
    },
    buttonTextDisabled: {
        color: '#cdcdcd',
    },
    cancelButtonContainer: {
        position: 'absolute',
    },
});
export default SearchBarIOS;
