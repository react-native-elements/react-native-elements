"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBarIOS = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Input_1 = __importDefault(require("../Input"));
const Icon_1 = __importDefault(require("../Icon"));
const helpers_1 = require("../helpers");
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
class SearchBarIOS extends react_1.Component {
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
                react_native_1.LayoutAnimation.configureNext(react_native_1.LayoutAnimation.Presets.easeInEaseOut);
                this.setState({ hasFocus: false });
            }
            setTimeout(() => {
                this.blur();
                this.props.onCancel();
            }, 0);
        };
        this.onFocus = (event) => {
            this.props.onFocus(event);
            react_native_1.LayoutAnimation.configureNext(react_native_1.LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                hasFocus: true,
                isEmpty: this.props.value === '',
            });
        };
        this.onBlur = (event) => {
            this.props.onBlur(event);
            if (!this.props.showCancel) {
                react_native_1.LayoutAnimation.configureNext(react_native_1.LayoutAnimation.Presets.easeInEaseOut);
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
        const _h = this.props, { theme, cancelButtonProps, cancelButtonTitle, clearIcon, containerStyle, leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, placeholderTextColor, showLoading, loadingProps, searchIcon, showCancel } = _h, attributes = __rest(_h, ["theme", "cancelButtonProps", "cancelButtonTitle", "clearIcon", "containerStyle", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "placeholderTextColor", "showLoading", "loadingProps", "searchIcon", "showCancel"]);
        const { hasFocus, isEmpty } = this.state;
        const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest(loadingProps, ["style"]);
        const { buttonStyle, buttonTextStyle, color: buttonColor, disabled: buttonDisabled, buttonDisabledStyle, buttonDisabledTextStyle } = cancelButtonProps, otherCancelButtonProps = __rest(cancelButtonProps, ["buttonStyle", "buttonTextStyle", "color", "disabled", "buttonDisabledStyle", "buttonDisabledTextStyle"]);
        return (<react_native_1.View style={react_native_1.StyleSheet.flatten([
            styles.container,
            { backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.white },
            containerStyle,
        ])}>
        <Input_1.default testID="searchInput" renderErrorMessage={false} {...attributes} onFocus={this.onFocus} onBlur={this.onBlur} onChangeText={this.onChangeText} ref={(input) => {
            this.input = input;
        }} inputStyle={react_native_1.StyleSheet.flatten([styles.input, inputStyle])} containerStyle={{
            paddingHorizontal: 0,
        }} inputContainerStyle={react_native_1.StyleSheet.flatten([
            styles.inputContainer,
            { backgroundColor: (_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.platform) === null || _c === void 0 ? void 0 : _c.ios) === null || _d === void 0 ? void 0 : _d.searchBg },
            hasFocus && {
                marginRight: this.state.cancelButtonWidth
                    ? this.state.cancelButtonWidth
                    : 0,
            },
            inputContainerStyle,
        ])} leftIcon={helpers_1.renderNode(Icon_1.default, searchIcon, defaultSearchIcon(theme))} leftIconContainerStyle={react_native_1.StyleSheet.flatten([
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
        ])} placeholderTextColor={placeholderTextColor || ((_g = (_f = (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.platform) === null || _f === void 0 ? void 0 : _f.ios) === null || _g === void 0 ? void 0 : _g.grey)} rightIcon={<react_native_1.View style={{ flexDirection: 'row' }}>
              {showLoading && (<react_native_1.ActivityIndicator key="loading" style={react_native_1.StyleSheet.flatten([{ marginRight: 5 }, loadingStyle])} {...otherLoadingProps}/>)}
              {!isEmpty &&
            helpers_1.renderNode(Icon_1.default, clearIcon, Object.assign(Object.assign({}, defaultClearIcon(theme)), { key: 'cancel', onPress: this.clear }))}
            </react_native_1.View>} rightIconContainerStyle={react_native_1.StyleSheet.flatten([
            styles.rightIconContainerStyle,
            rightIconContainerStyle,
        ])}/>

        <react_native_1.View style={react_native_1.StyleSheet.flatten([
            styles.cancelButtonContainer,
            {
                opacity: this.state.cancelButtonWidth === null ? 0 : 1,
                right: hasFocus
                    ? 0
                    : this.state.cancelButtonWidth && -this.state.cancelButtonWidth,
            },
        ])} onLayout={(event) => this.setState({ cancelButtonWidth: event.nativeEvent.layout.width })}>
          <react_native_1.TouchableOpacity accessibilityRole="button" onPress={this.cancel} disabled={buttonDisabled} {...otherCancelButtonProps}>
            <react_native_1.View style={[buttonStyle, buttonDisabled && buttonDisabledStyle]}>
              <react_native_1.Text style={[
            styles.buttonTextStyle,
            buttonColor && { color: buttonColor },
            buttonTextStyle,
            buttonDisabled &&
                (buttonDisabledTextStyle || styles.buttonTextDisabled),
        ]}>
                {cancelButtonTitle}
              </react_native_1.Text>
            </react_native_1.View>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
      </react_native_1.View>);
    }
}
exports.SearchBarIOS = SearchBarIOS;
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
const styles = react_native_1.StyleSheet.create({
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
