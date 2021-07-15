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
exports.withBadge = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const index_1 = __importDefault(require("./index"));
const withBadge = (
/** Text value to be displayed by badge, defaults to empty */
value, 
/** Also receives all [Badge](badge.md#props) props. */
options = {}) => (WrappedComponent) => {
    const WithBadge = (props) => {
        const { bottom, hidden = false, left, containerStyle } = options, badgeProps = __rest(options, ["bottom", "hidden", "left", "containerStyle"]);
        let { right = -16, top = -1 } = options;
        if (!value) {
            right = -3;
            top = 3;
        }
        const badgeValue = typeof value === 'function' ? value(props) : value;
        return (<react_native_1.View style={react_native_1.StyleSheet.flatten([styles.container, containerStyle])}>
        <WrappedComponent {...props}/>

        {!hidden && (<index_1.default value={badgeValue} status="error" containerStyle={react_native_1.StyleSheet.flatten([
            styles.badgeContainer,
            { bottom, left, right, top },
        ])} {...badgeProps}/>)}
      </react_native_1.View>);
    };
    WithBadge.displayName = `WithBadge(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return WithBadge;
};
exports.withBadge = withBadge;
const styles = react_native_1.StyleSheet.create({
    badgeContainer: {
        position: 'absolute',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
});
