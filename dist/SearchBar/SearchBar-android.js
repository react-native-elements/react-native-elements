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
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle, } from 'react';
import { StyleSheet, View, ActivityIndicator, Keyboard, } from 'react-native';
import { defaultTheme, renderNode } from '../helpers';
import { Input } from '../Input';
import { Icon } from '../Icon';
const defaultSearchIcon = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'material',
        size: 25,
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.android) === null || _c === void 0 ? void 0 : _c.grey,
        name: 'search',
    });
};
const defaultCancelIcon = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'material',
        size: 25,
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.android) === null || _c === void 0 ? void 0 : _c.grey,
        name: 'arrow-back',
    });
};
const defaultClearIcon = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'material',
        size: 25,
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.android) === null || _c === void 0 ? void 0 : _c.grey,
        name: 'clear',
    });
};
const SearchBarAndroid = forwardRef((props, ref) => {
    var _a;
    const { theme = defaultTheme, clearIcon = { name: 'clear' }, containerStyle, leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, searchIcon = { name: 'search' }, cancelIcon = { name: 'arrow-back' }, showLoading = false, loadingProps = {}, onClear = () => null, onCancel = () => null, onFocus = () => null, onBlur = () => null, onChangeText = () => null, onKeyboardHide, value = '' } = props, attributes = __rest(props, ["theme", "clearIcon", "containerStyle", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "searchIcon", "cancelIcon", "showLoading", "loadingProps", "onClear", "onCancel", "onFocus", "onBlur", "onChangeText", "onKeyboardHide", "value"]);
    const [hasFocus, setHasFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(value === '');
    const inputRef = useRef(null);
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
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
            onCancel();
        },
    }));
    const handleFocus = (event) => {
        onFocus(event);
        setHasFocus(true);
        setIsEmpty(value === '');
    };
    const handleBlur = (event) => {
        onBlur(event);
        setHasFocus(false);
    };
    const handleChangeText = (text) => {
        onChangeText(text);
        setIsEmpty(text === '');
    };
    const handleCancel = () => {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        onCancel();
    };
    useEffect(() => {
        let keyboardListener;
        if (onKeyboardHide) {
            keyboardListener = Keyboard.addListener('keyboardDidHide', () => {
                var _a;
                (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
                onKeyboardHide();
            });
        }
        return () => {
            if (keyboardListener) {
                keyboardListener.remove();
            }
        };
    }, [onKeyboardHide]);
    const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest(loadingProps, ["style"]);
    return (React.createElement(View, { testID: "RNE__SearchBar-wrapper", style: StyleSheet.flatten([
            {
                backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.background,
                paddingTop: 8,
                paddingBottom: 8,
            },
            containerStyle,
        ]) },
        React.createElement(Input, Object.assign({ testID: "RNE__SearchBar", value: value, renderErrorMessage: false }, attributes, { onFocus: handleFocus, onBlur: handleBlur, onChangeText: handleChangeText, ref: inputRef, containerStyle: { paddingHorizontal: 0 }, inputStyle: StyleSheet.flatten([styles.input, inputStyle]), inputContainerStyle: StyleSheet.flatten([
                styles.inputContainer,
                inputContainerStyle,
            ]), leftIcon: hasFocus
                ? renderNode(Icon, cancelIcon, Object.assign(Object.assign({}, defaultCancelIcon(theme)), { onPress: handleCancel }))
                : renderNode(Icon, searchIcon, defaultSearchIcon(theme)), leftIconContainerStyle: StyleSheet.flatten([
                styles.leftIconContainerStyle,
                leftIconContainerStyle,
            ]), rightIcon: React.createElement(View, { style: { flexDirection: 'row' } },
                showLoading && (React.createElement(ActivityIndicator, Object.assign({ key: "loading", style: StyleSheet.flatten([{ marginRight: 5 }, loadingStyle]) }, otherLoadingProps))),
                !isEmpty &&
                    renderNode(Icon, clearIcon, Object.assign(Object.assign({}, defaultClearIcon(theme)), { key: 'cancel', onPress: () => {
                            var _a;
                            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.clear();
                            handleChangeText('');
                            onClear();
                        } }))), rightIconContainerStyle: StyleSheet.flatten([
                styles.rightIconContainerStyle,
                rightIconContainerStyle,
            ]) }))));
});
const styles = StyleSheet.create({
    input: {
        marginLeft: 24,
        marginRight: 8,
    },
    inputContainer: {
        borderBottomWidth: 0,
        width: '100%',
    },
    rightIconContainerStyle: {
        marginRight: 8,
    },
    leftIconContainerStyle: {
        marginLeft: 8,
    },
});
export default SearchBarAndroid;
