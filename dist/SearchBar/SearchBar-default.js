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
import { ActivityIndicator, StyleSheet, View, } from 'react-native';
import { defaultTheme, renderNode } from '../helpers';
import { Input } from '../Input';
import { Icon } from '../Icon';
const defaultSearchIcon = (theme) => {
    var _a;
    return ({
        type: 'material',
        size: 18,
        name: 'search',
        color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3,
    });
};
const defaultClearIcon = (theme) => {
    var _a;
    return ({
        type: 'material',
        size: 18,
        name: 'clear',
        color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3,
    });
};
const SearchBarDefault = forwardRef((props, ref) => {
    var _a, _b, _c, _d, _e, _f;
    const { theme = defaultTheme, value = '', loadingProps = {}, showLoading = false, lightTheme = false, round = false, onClear = () => null, onFocus = () => null, onBlur = () => null, onChangeText = () => null, clearIcon = defaultClearIcon(theme), containerStyle, searchIcon = defaultSearchIcon(theme), leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, placeholderTextColor = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3 } = props, attributes = __rest(props, ["theme", "value", "loadingProps", "showLoading", "lightTheme", "round", "onClear", "onFocus", "onBlur", "onChangeText", "clearIcon", "containerStyle", "searchIcon", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "placeholderTextColor"]);
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
        cancel: () => { },
    }));
    const handleFocus = (event) => {
        onFocus(event);
        setIsEmpty(value === '');
    };
    const handleBlur = (event) => {
        onBlur(event);
    };
    const handleChangeText = (text) => {
        onChangeText(text);
        setIsEmpty(text === '');
    };
    const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest(loadingProps, ["style"]);
    return (React.createElement(View, { testID: "RNE__SearchBar-wrapper", style: StyleSheet.flatten([
            {
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderBottomColor: '#000',
                borderTopColor: '#000',
                padding: 8,
                backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey0,
            },
            lightTheme && {
                borderTopColor: '#e1e1e1',
                borderBottomColor: '#e1e1e1',
                backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.grey5,
            },
            containerStyle,
        ]) },
        React.createElement(Input, Object.assign({ testID: "RNE__SearchBar", renderErrorMessage: false, value: value }, attributes, { onFocus: handleFocus, onBlur: handleBlur, onChangeText: handleChangeText, ref: inputRef, placeholderTextColor: placeholderTextColor, inputStyle: StyleSheet.flatten([
                {
                    color: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.grey3,
                    marginLeft: 10,
                },
                inputStyle,
            ]), inputContainerStyle: StyleSheet.flatten([
                {
                    borderBottomWidth: 0,
                    borderRadius: 3,
                    overflow: 'hidden',
                    minHeight: 30,
                    backgroundColor: (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.searchBg,
                },
                lightTheme && {
                    backgroundColor: (_f = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _f === void 0 ? void 0 : _f.grey4,
                },
                round && styles.round,
                inputContainerStyle,
            ]), containerStyle: styles.inputContainer, leftIcon: renderNode(Icon, searchIcon, defaultSearchIcon(theme)), leftIconContainerStyle: StyleSheet.flatten([
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
    rightIconContainerStyle: {
        marginRight: 8,
    },
    leftIconContainerStyle: {
        marginLeft: 8,
    },
    inputContainer: {
        paddingHorizontal: 0,
    },
    round: {
        borderRadius: 15,
    },
});
export default SearchBarDefault;
