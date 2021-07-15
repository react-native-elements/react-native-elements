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
exports.ListItemTitle = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Text_1 = __importDefault(require("../Text"));
const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';
const ListItemTitle = (_a) => {
    var { style, right, children } = _a, props = __rest(_a, ["style", "right", "children"]);
    return (<Text_1.default testID="listItemTitle" style={react_native_1.StyleSheet.flatten([
        styles.title,
        right && styles.rightTitle,
        style,
    ])} {...props}>
      {children}
    </Text_1.default>);
};
exports.ListItemTitle = ListItemTitle;
/** Allows adding a title to the ListItem.
 * This, Receives all [Text](text.md#props) props. */
const styles = react_native_1.StyleSheet.create({
    title: Object.assign({ backgroundColor: 'transparent' }, react_native_1.Platform.select({
        ios: {
            fontSize: 17,
        },
        default: {
            fontSize: 16,
        },
    })),
    rightTitle: {
        color: ANDROID_SECONDARY,
    },
});
exports.ListItemTitle.displayName = 'ListItem.Title';
