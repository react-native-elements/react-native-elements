"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogLoading = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
/** `DialogLoader` allows adding loader to the Dialog. Loader is simply ActivityIndicator. */
const DialogLoading = ({ loadingStyle, loadingProps, theme, }) => {
    var _a, _b, _c;
    return (<react_native_1.View style={styles.loadingView}>
      <react_native_1.ActivityIndicator style={react_native_1.StyleSheet.flatten([styles.loading, loadingStyle])} color={(_a = loadingProps === null || loadingProps === void 0 ? void 0 : loadingProps.color) !== null && _a !== void 0 ? _a : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary} size={(_c = loadingProps === null || loadingProps === void 0 ? void 0 : loadingProps.size) !== null && _c !== void 0 ? _c : 'large'} testID="Dialog__Loading" {...loadingProps}/>
    </react_native_1.View>);
};
exports.DialogLoading = DialogLoading;
exports.DialogLoading.defaultProps = {
    loadingProps: { size: 'large' },
};
const styles = react_native_1.StyleSheet.create({
    loading: {
        marginVertical: 20,
    },
    loadingView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
exports.DialogLoading.displayName = 'Dialog.Loading';
