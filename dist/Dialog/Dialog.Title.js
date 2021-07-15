"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogTitle = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
/** `DialogTitle` allows you to add title to the Dialog. */
const DialogTitle = ({ title, titleStyle, titleProps, }) => {
    return (<react_native_1.Text style={react_native_1.StyleSheet.flatten([styles.title, titleStyle])} testID="Dialog__Title" {...titleProps}>
      {title}
    </react_native_1.Text>);
};
exports.DialogTitle = DialogTitle;
const styles = react_native_1.StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: react_native_1.Platform.OS === 'ios' ? '600' : '700',
        marginBottom: 10,
    },
});
exports.DialogTitle.displayName = 'Dialog.Title';
