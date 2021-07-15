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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = __importDefault(require("../config/theme"));
/**  Dividers are visual separators of content.
 * Use Divider when you want to make a distinction between sections of content.
 * Our divider offers adding inset, color, orientation and subHeader to the component using props.
 * Also receives all [View](https://reactnative.dev/docs/view#props) props. */
const Divider = (_a) => {
    var { color, inset = false, insetType = 'left', orientation = 'horizontal', style, subHeader, subHeaderStyle, theme, width } = _a, rest = __rest(_a, ["color", "inset", "insetType", "orientation", "style", "subHeader", "subHeaderStyle", "theme", "width"]);
    return (<>
    <react_native_1.View style={react_native_1.StyleSheet.flatten([
        styles.divider,
        style,
        inset &&
            (insetType === 'left'
                ? styles.leftInset
                : insetType === 'right'
                    ? styles.rightInset
                    : Object.assign(Object.assign({}, styles.leftInset), styles.rightInset)),
        orientation === 'vertical' && styles.vertical,
        width &&
            (orientation === 'horizontal'
                ? { borderBottomWidth: width }
                : { borderRightWidth: width }),
        color &&
            (orientation === 'horizontal'
                ? { borderBottomColor: color }
                : { borderRightColor: color }),
    ])} {...rest}/>
    {subHeader && orientation === 'horizontal' ? (<react_native_1.Text style={react_native_1.StyleSheet.flatten([
        styles.subHeader,
        subHeaderStyle,
        inset && styles.leftInset,
    ])}>
        {subHeader}
      </react_native_1.Text>) : null}
  </>);
};
exports.Divider = Divider;
const styles = react_native_1.StyleSheet.create({
    divider: {
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        borderBottomColor: (_a = theme_1.default === null || theme_1.default === void 0 ? void 0 : theme_1.default.colors) === null || _a === void 0 ? void 0 : _a.divider,
    },
    leftInset: {
        marginLeft: 72,
    },
    rightInset: {
        marginRight: 72,
    },
    vertical: {
        borderRightWidth: react_native_1.StyleSheet.hairlineWidth,
        borderRightColor: (_b = theme_1.default === null || theme_1.default === void 0 ? void 0 : theme_1.default.colors) === null || _b === void 0 ? void 0 : _b.divider,
        height: 'auto',
        alignSelf: 'stretch',
    },
    subHeader: {
        includeFontPadding: false,
    },
});
exports.Divider.displayName = 'Divider';
