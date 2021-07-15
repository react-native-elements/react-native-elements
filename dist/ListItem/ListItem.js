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
exports.ListItemBase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const PadView_1 = require("./components/PadView");
/** ListItems are used to display rows of information, such as a contact list, playlist, or menu.
 * They are very customizable and can contain switches, avatars, badges, icons, and more. */
const ListItemBase = (props) => {
    var _a, _b;
    const { containerStyle, onPress, onLongPress, Component = onPress || onLongPress ? react_native_1.TouchableHighlight : react_native_1.View, disabled, disabledStyle, bottomDivider, topDivider, pad = 16, linearGradientProps, ViewComponent = react_native_1.View, theme, children } = props, attributes = __rest(props, ["containerStyle", "onPress", "onLongPress", "Component", "disabled", "disabledStyle", "bottomDivider", "topDivider", "pad", "linearGradientProps", "ViewComponent", "theme", "children"]);
    if (props.linearGradientProps && !props.ViewComponent) {
        console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
    }
    return (<Component {...attributes} onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <PadView_1.PadView Component={ViewComponent} {...linearGradientProps} style={react_native_1.StyleSheet.flatten([
        Object.assign(Object.assign({}, react_native_1.Platform.select({
            ios: {
                padding: 14,
            },
            default: {
                padding: 16,
            },
        })), { flexDirection: 'row', alignItems: 'center', backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.white, borderColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.divider }),
        topDivider && { borderTopWidth: react_native_1.StyleSheet.hairlineWidth },
        bottomDivider && { borderBottomWidth: react_native_1.StyleSheet.hairlineWidth },
        containerStyle,
        disabled && disabledStyle,
    ])} pad={pad}>
        {children}
      </PadView_1.PadView>
    </Component>);
};
exports.ListItemBase = ListItemBase;
exports.ListItemBase.displayName = 'ListItem';
