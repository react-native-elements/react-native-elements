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
exports.Badge = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
/** Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user. */
const Badge = (_a) => {
    var _b;
    var { containerStyle, textStyle, textProps, badgeStyle, onPress, Component = onPress ? react_native_1.TouchableOpacity : react_native_1.View, value, theme, status = 'primary' } = _a, attributes = __rest(_a, ["containerStyle", "textStyle", "textProps", "badgeStyle", "onPress", "Component", "value", "theme", "status"]);
    const element = helpers_1.renderNode(react_native_1.Text, value, Object.assign({ style: react_native_1.StyleSheet.flatten([styles.text, textStyle && textStyle]) }, textProps));
    return (<react_native_1.View style={react_native_1.StyleSheet.flatten([containerStyle && containerStyle])}>
      <Component {...attributes} style={react_native_1.StyleSheet.flatten([
        {
            alignSelf: 'center',
            minWidth: size,
            height: size,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b[status],
            borderWidth: react_native_1.StyleSheet.hairlineWidth,
            borderColor: '#fff',
        },
        !element && styles.miniBadge,
        badgeStyle && badgeStyle,
    ])} onPress={onPress}>
        {element}
      </Component>
    </react_native_1.View>);
};
exports.Badge = Badge;
const size = 18;
const miniSize = 8;
const styles = react_native_1.StyleSheet.create({
    miniBadge: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        minWidth: miniSize,
        height: miniSize,
        borderRadius: miniSize / 2,
    },
    text: {
        fontSize: 12,
        color: 'white',
        paddingHorizontal: 4,
    },
});
exports.Badge.displayName = 'Badge';
