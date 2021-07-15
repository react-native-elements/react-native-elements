"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogActions = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
/** Define Dialog Actions using this component. */
const DialogActions = ({ children, }) => {
    return (<react_native_1.View style={styles.actionsView} testID="Button__View">
      {children}
    </react_native_1.View>);
};
exports.DialogActions = DialogActions;
const styles = react_native_1.StyleSheet.create({
    actionsView: {
        marginTop: 10,
        marginRight: -35,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
    },
});
exports.DialogActions.displayName = 'Dialog.Actions';
