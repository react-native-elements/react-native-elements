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
import { Pressable, LayoutAnimation, StyleSheet, View, ActivityIndicator, Text, } from 'react-native';
import { Input } from '../Input';
import { Icon } from '../Icon';
import { defaultTheme, renderNode } from '../helpers';
const defaultSearchIcon = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'ionicon',
        size: 20,
        name: 'ios-search',
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.ios) === null || _c === void 0 ? void 0 : _c.grey,
    });
};
const defaultClearIcon = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'ionicon',
        name: 'ios-close-circle',
        size: 20,
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.ios) === null || _c === void 0 ? void 0 : _c.grey,
    });
};
export class SearchBarIOS extends Component {
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
            this.onChangeText('');
            if (this.props.showCancel) {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                this.setState({ hasFocus: false });
            }
            setTimeout(() => {
                this.blur();
                this.props.onCancel();
            }, 0);
        };
        this.onFocus = (event) => {
            this.props.onFocus(event);
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                hasFocus: true,
                isEmpty: this.props.value === '',
            });
        };
        this.onBlur = (event) => {
            this.props.onBlur(event);
            if (!this.props.showCancel) {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                this.setState({
                    hasFocus: false,
                });
            }
        };
        this.onChangeText = (text) => {
            this.props.onChangeText(text);
            this.setState({ isEmpty: text === '' });
        };
        const { value } = props;
        this.state = {
            hasFocus: false,
            isEmpty: value ? value === '' : true,
            cancelButtonWidth: null,
        };
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        const _h = this.props, { theme = defaultTheme, cancelButtonProps, cancelButtonTitle, clearIcon, containerStyle, leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, placeholderTextColor, showLoading, loadingProps, searchIcon, showCancel } = _h, attributes = __rest(_h, ["theme", "cancelButtonProps", "cancelButtonTitle", "clearIcon", "containerStyle", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "placeholderTextColor", "showLoading", "loadingProps", "searchIcon", "showCancel"]);
        const { hasFocus, isEmpty } = this.state;
        const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest(loadingProps, ["style"]);
        const { buttonStyle, buttonTextStyle, color: buttonColor, disabled: buttonDisabled, buttonDisabledStyle, buttonDisabledTextStyle } = cancelButtonProps, otherCancelButtonProps = __rest(cancelButtonProps, ["buttonStyle", "buttonTextStyle", "color", "disabled", "buttonDisabledStyle", "buttonDisabledTextStyle"]);
        return (React.createElement(View, { testID: "RNE__SearchBar-wrapper", style: StyleSheet.flatten([
                styles.container,
                { backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.background },
                containerStyle,
            ]) },
            React.createElement(Input, Object.assign({ testID: "RNE__SearchBar", renderErrorMessage: false }, attributes, { onFocus: this.onFocus, onBlur: this.onBlur, onChangeText: this.onChangeText, ref: (input) => {
                    this.input = input;
                }, inputStyle: StyleSheet.flatten([styles.input, inputStyle]), containerStyle: {
                    paddingHorizontal: 0,
                }, inputContainerStyle: StyleSheet.flatten([
                    styles.inputContainer,
                    { backgroundColor: (_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.platform) === null || _c === void 0 ? void 0 : _c.ios) === null || _d === void 0 ? void 0 : _d.searchBg },
                    hasFocus && {
                        marginRight: this.state.cancelButtonWidth
                            ? this.state.cancelButtonWidth
                            : 0,
                    },
                    inputContainerStyle,
                ]), leftIcon: renderNode(Icon, searchIcon, defaultSearchIcon(theme)), leftIconContainerStyle: StyleSheet.flatten([
                    styles.leftIconContainerStyle,
                    leftIconContainerStyle,
                ]), placeholderTextColor: placeholderTextColor || ((_g = (_f = (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.platform) === null || _f === void 0 ? void 0 : _f.ios) === null || _g === void 0 ? void 0 : _g.grey), rightIcon: React.createElement(View, { style: { flexDirection: 'row' } },
                    showLoading && (React.createElement(ActivityIndicator, Object.assign({ key: "loading", style: StyleSheet.flatten([{ marginRight: 5 }, loadingStyle]) }, otherLoadingProps))),
                    !isEmpty &&
                        renderNode(Icon, clearIcon, Object.assign(Object.assign({}, defaultClearIcon(theme)), { key: 'cancel', onPress: this.clear }))), rightIconContainerStyle: StyleSheet.flatten([
                    styles.rightIconContainerStyle,
                    rightIconContainerStyle,
                ]) })),
            React.createElement(View, { style: StyleSheet.flatten([
                    styles.cancelButtonContainer,
                    {
                        opacity: this.state.cancelButtonWidth === null ? 0 : 1,
                        right: hasFocus
                            ? 0
                            : this.state.cancelButtonWidth && -this.state.cancelButtonWidth,
                    },
                ]), onLayout: (event) => this.setState({ cancelButtonWidth: event.nativeEvent.layout.width }), testID: "RNE__SearchBar-cancelButtonContainer" },
                React.createElement(Pressable, Object.assign({ accessibilityRole: "button", onPress: this.cancel, disabled: buttonDisabled }, otherCancelButtonProps),
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
    }
}
SearchBarIOS.defaultProps = {
    value: '',
    cancelButtonTitle: 'Cancel',
    loadingProps: {},
    cancelButtonProps: {},
    showLoading: false,
    onClear: () => null,
    onCancel: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onChangeText: () => null,
    searchIcon: { name: 'ios-search' },
    clearIcon: { name: 'ios-close-circle' },
    showCancel: false,
};
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
