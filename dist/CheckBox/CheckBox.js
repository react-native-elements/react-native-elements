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
exports.CheckBox = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Text_1 = __importDefault(require("../Text"));
const CheckBoxIcon_1 = require("./components/CheckBoxIcon");
const config_1 = require("../config");
/** CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.
 * It provides a clear visual of either a true or false choice. */
const CheckBox = (_a) => {
    var _b, _c;
    var { checked = false, Component = react_native_1.TouchableOpacity, iconRight = false, title, titleProps = {}, center = false, right = false, containerStyle, wrapperStyle, textStyle, checkedTitle, fontFamily, theme, onPress, onLongPress, checkedColor = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary } = _a, rest = __rest(_a, ["checked", "Component", "iconRight", "title", "titleProps", "center", "right", "containerStyle", "wrapperStyle", "textStyle", "checkedTitle", "fontFamily", "theme", "onPress", "onLongPress", "checkedColor"]);
    const accessibilityState = {
        checked: !!checked,
    };
    const iconProps = Object.assign({ checked,
        onLongPress,
        checkedColor }, rest);
    return (<Component accessibilityRole="checkbox" accessibilityState={accessibilityState} testID="checkbox" {...rest} onLongPress={onLongPress} onPress={onPress} style={react_native_1.StyleSheet.flatten([
        styles.container,
        title && styles.containerHasTitle,
        containerStyle && containerStyle,
    ])}>
      <react_native_1.View style={react_native_1.StyleSheet.flatten([
        styles.wrapper,
        right && { justifyContent: 'flex-end' },
        center && { justifyContent: 'center' },
        wrapperStyle && wrapperStyle,
    ])}>
        {!iconRight && (<CheckBoxIcon_1.CheckBoxIcon {...iconProps} checkedColor={checkedColor}/>)}

        {react_1.default.isValidElement(title)
        ? title
        : title !== '' &&
            title && (<Text_1.default testID="checkboxTitle" style={react_native_1.StyleSheet.flatten([
            Object.assign({ marginLeft: 10, marginRight: 10, color: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.grey1 }, react_native_1.Platform.select({
                android: Object.assign({}, config_1.fonts.android.bold),
                default: {
                    fontWeight: 'bold',
                },
            })),
            textStyle && textStyle,
            fontFamily && { fontFamily },
        ])} {...titleProps}>
                {checked ? checkedTitle || title : title}
              </Text_1.default>)}

        {iconRight && (<CheckBoxIcon_1.CheckBoxIcon {...iconProps} checkedColor={checkedColor}/>)}
      </react_native_1.View>
    </Component>);
};
exports.CheckBox = CheckBox;
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
    containerHasTitle: {
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: '#fafafa',
        borderColor: '#ededed',
    },
});
exports.CheckBox.displayName = 'CheckBox';
