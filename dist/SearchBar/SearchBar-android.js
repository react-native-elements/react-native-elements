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
exports.SearchBarAndroid = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
const Input_1 = __importDefault(require("../Input"));
const Icon_1 = __importDefault(require("../Icon"));
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
class SearchBarAndroid extends react_1.Component {
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
            this.cancel();
        };
        const { value = '' } = props;
        this.state = {
            hasFocus: false,
            isEmpty: value ? value === '' : true,
        };
        react_native_1.Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    componentWillUnmount() {
        react_native_1.Keyboard.removeListener('keyboardDidHide', this._keyboardDidHide);
    }
    render() {
        var _a;
        const _b = this.props, { theme, clearIcon = { name: 'clear' }, containerStyle, leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, searchIcon = { name: 'search' }, cancelIcon = { name: 'arrow-back' }, showLoading = false, loadingProps = {} } = _b, attributes = __rest(_b, ["theme", "clearIcon", "containerStyle", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "searchIcon", "cancelIcon", "showLoading", "loadingProps"]);
        const { hasFocus, isEmpty } = this.state;
        const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest(loadingProps, ["style"]);
        return (<react_native_1.View style={react_native_1.StyleSheet.flatten([
            {
                backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.white,
                paddingTop: 8,
                paddingBottom: 8,
            },
            containerStyle,
        ])}>
        <Input_1.default testID="searchInput" renderErrorMessage={false} {...attributes} onFocus={this.onFocus} onBlur={this.onBlur} onChangeText={this.onChangeText} ref={(input) => {
            this.input = input;
        }} containerStyle={{ paddingHorizontal: 0 }} inputStyle={react_native_1.StyleSheet.flatten([styles.input, inputStyle])} inputContainerStyle={react_native_1.StyleSheet.flatten([
            styles.inputContainer,
            inputContainerStyle,
        ])} leftIcon={hasFocus
            ? helpers_1.renderNode(Icon_1.default, cancelIcon, Object.assign(Object.assign({}, defaultCancelIcon(theme)), { onPress: this.cancel }))
            : helpers_1.renderNode(Icon_1.default, searchIcon, defaultSearchIcon(theme))} leftIconContainerStyle={react_native_1.StyleSheet.flatten([
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
        ])} rightIcon={<react_native_1.View style={{ flexDirection: 'row' }}>
              {showLoading && (<react_native_1.ActivityIndicator key="loading" style={react_native_1.StyleSheet.flatten([{ marginRight: 5 }, loadingStyle])} {...otherLoadingProps}/>)}
              {!isEmpty &&
            helpers_1.renderNode(Icon_1.default, clearIcon, Object.assign(Object.assign({}, defaultClearIcon(theme)), { key: 'cancel', onPress: this.clear }))}
            </react_native_1.View>} rightIconContainerStyle={react_native_1.StyleSheet.flatten([
            styles.rightIconContainerStyle,
            rightIconContainerStyle,
        ])}/>
      </react_native_1.View>);
    }
}
exports.SearchBarAndroid = SearchBarAndroid;
SearchBarAndroid.defaultProps = {
    onClear: () => null,
    onCancel: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onChangeText: () => null,
};
const styles = react_native_1.StyleSheet.create({
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
