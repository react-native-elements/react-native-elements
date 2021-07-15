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
exports.ListItemContent = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
/** This allows adding content to the ListItem.
 * This, Receives all [View](https://reactnative.dev/docs/view#props) props. */
const ListItemContent = (_a) => {
    var { style, right, children } = _a, props = __rest(_a, ["style", "right", "children"]);
    const containerStyle = right ? styles.rightContainer : styles.container;
    return (<react_native_1.View style={[containerStyle, style]} {...props}>
      {children}
    </react_native_1.View>);
};
exports.ListItemContent = ListItemContent;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});
exports.ListItemContent.displayName = 'ListItem.Content';
