"use strict";
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
exports.BottomSheet = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
/** Overlay Modal that displays content from the bottom of the screen.
 * This opens from the bottom of the screen.
 * **Note:**
 * Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `BottomSheet`.
 */
const BottomSheet = (_a) => {
    var { containerStyle, isVisible = false, modalProps = {}, children, scrollViewProps = {} } = _a, props = __rest(_a, ["containerStyle", "isVisible", "modalProps", "children", "scrollViewProps"]);
    return (<react_native_1.Modal animationType="slide" transparent={true} visible={isVisible} {...modalProps}>
      <react_native_safe_area_context_1.SafeAreaView style={react_native_1.StyleSheet.flatten([
        styles.safeAreaView,
        containerStyle && containerStyle,
    ])} {...props}>
        <react_native_1.View>
          <react_native_1.ScrollView {...scrollViewProps}>{children}</react_native_1.ScrollView>
        </react_native_1.View>
      </react_native_safe_area_context_1.SafeAreaView>
    </react_native_1.Modal>);
};
exports.BottomSheet = BottomSheet;
const styles = react_native_1.StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        flexDirection: 'column-reverse',
    },
    listContainer: { backgroundColor: 'white' },
});
exports.BottomSheet.displayName = 'BottomSheet';
