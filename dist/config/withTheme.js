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
const react_1 = __importDefault(require("react"));
const deepmerge_1 = __importDefault(require("deepmerge"));
const hoist_non_react_statics_1 = __importDefault(require("hoist-non-react-statics"));
const ThemeProvider_1 = require("./ThemeProvider");
const theme_1 = __importDefault(require("./theme"));
const isClassComponent = (Component) => Boolean(Component.prototype && Component.prototype.isReactComponent);
const ThemedComponent = (WrappedComponent, themeKey, displayName) => {
    return Object.assign((props, forwardedRef) => {
        const { children } = props, rest = __rest(props, ["children"]);
        return (<ThemeProvider_1.ThemeConsumer>
          {(context) => {
            // If user isn't using ThemeProvider
            if (!context) {
                const newProps = Object.assign(Object.assign({}, rest), { theme: theme_1.default, children });
                return isClassComponent(WrappedComponent) ? (<WrappedComponent ref={forwardedRef} {...newProps}/>) : (<WrappedComponent {...newProps}/>);
            }
            const { theme, updateTheme, replaceTheme } = context;
            const newProps = Object.assign(Object.assign({ theme,
                updateTheme,
                replaceTheme }, deepmerge_1.default((themeKey &&
                theme[themeKey]) ||
                {}, rest, {
                clone: false,
            })), { children });
            if (isClassComponent(WrappedComponent)) {
                return <WrappedComponent ref={forwardedRef} {...newProps}/>;
            }
            return <WrappedComponent {...newProps}/>;
        }}
        </ThemeProvider_1.ThemeConsumer>);
    }, { displayName: displayName });
};
function withTheme(WrappedComponent, themeKey) {
    const name = themeKey
        ? `Themed.${themeKey}`
        : `Themed.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
    const Component = ThemedComponent(WrappedComponent, themeKey, name);
    if (isClassComponent(WrappedComponent)) {
        return hoist_non_react_statics_1.default(react_1.default.forwardRef(Component), WrappedComponent);
    }
    return Component;
}
exports.default = withTheme;
