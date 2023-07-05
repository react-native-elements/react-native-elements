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
import React, { Component } from 'react';
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
export class SearchBarAndroid extends Component {
    constructor(props) {
        super(props);
        this.focus = () => {
            this.input.focus();
        };
        this.blur = () => {
            this.input.blur();
        };
        this.clear = () => {
            this.input.clear();
            this.onChangeText('');
            this.props.onClear();
        };
        this.cancel = () => {
            this.blur();
            this.props.onCancel();
        };
        this.onFocus = (event) => {
            this.props.onFocus(event);
            this.setState({
                hasFocus: true,
                isEmpty: this.props.value === '',
            });
        };
        this.onBlur = (event) => {
            this.props.onBlur(event);
            this.setState({ hasFocus: false });
        };
        this.onChangeText = (text) => {
            this.props.onChangeText(text);
            this.setState({ isEmpty: text === '' });
        };
        this._keyboardDidHide = () => {
            var _a, _b;
            this.blur();
            (_b = (_a = this.props).onKeyboardHide) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        const { value = '' } = props;
        this.state = {
            hasFocus: false,
            isEmpty: value ? value === '' : true,
        };
        if (this.props.onKeyboardHide) {
            this.keyboardListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        }
    }
    componentWillUnmount() {
        if (this.keyboardListener) {
            this.keyboardListener.remove();
        }
    }
    render() {
        var _a;
        const _b = this.props, { theme = defaultTheme, clearIcon = { name: 'clear' }, containerStyle, leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, searchIcon = { name: 'search' }, cancelIcon = { name: 'arrow-back' }, showLoading = false, loadingProps = {} } = _b, attributes = __rest(_b, ["theme", "clearIcon", "containerStyle", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "searchIcon", "cancelIcon", "showLoading", "loadingProps"]);
        const { hasFocus, isEmpty } = this.state;
        const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest(loadingProps, ["style"]);
        return (React.createElement(View, { testID: "RNE__SearchBar-wrapper", style: StyleSheet.flatten([
                {
                    backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.background,
                    paddingTop: 8,
                    paddingBottom: 8,
                },
                containerStyle,
            ]) },
            React.createElement(Input, Object.assign({ testID: "RNE__SearchBar", renderErrorMessage: false }, attributes, { onFocus: this.onFocus, onBlur: this.onBlur, onChangeText: this.onChangeText, ref: (input) => {
                    this.input = input;
                }, containerStyle: { paddingHorizontal: 0 }, inputStyle: StyleSheet.flatten([styles.input, inputStyle]), inputContainerStyle: StyleSheet.flatten([
                    styles.inputContainer,
                    inputContainerStyle,
                ]), leftIcon: hasFocus
                    ? renderNode(Icon, cancelIcon, Object.assign(Object.assign({}, defaultCancelIcon(theme)), { onPress: this.cancel }))
                    : renderNode(Icon, searchIcon, defaultSearchIcon(theme)), leftIconContainerStyle: StyleSheet.flatten([
                    styles.leftIconContainerStyle,
                    leftIconContainerStyle,
                ]), rightIcon: React.createElement(View, { style: { flexDirection: 'row' } },
                    showLoading && (React.createElement(ActivityIndicator, Object.assign({ key: "loading", style: StyleSheet.flatten([{ marginRight: 5 }, loadingStyle]) }, otherLoadingProps))),
                    !isEmpty &&
                        renderNode(Icon, clearIcon, Object.assign(Object.assign({}, defaultClearIcon(theme)), { key: 'cancel', onPress: this.clear }))), rightIconContainerStyle: StyleSheet.flatten([
                    styles.rightIconContainerStyle,
                    rightIconContainerStyle,
                ]) }))));
    }
}
SearchBarAndroid.defaultProps = {
    onClear: () => null,
    onCancel: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onChangeText: () => null,
};
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
