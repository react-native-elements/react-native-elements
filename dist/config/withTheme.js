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
import React from 'react';
import deepmerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeConsumer } from './ThemeProvider';
import { defaultSpacing } from './theme';
import { lightColors } from './colors';
const isClassComponent = (Component) => { var _a; return Boolean((_a = Component === null || Component === void 0 ? void 0 : Component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent); };
const combineByStyles = (propName = '') => {
    if (propName.endsWith('Style') || propName.endsWith('style')) {
        return (prop1, prop2) => {
            return [prop1, prop2].flat();
        };
    }
    return undefined;
};
const ThemedComponent = (WrappedComponent, themeKey, displayName) => {
    return Object.assign((props, forwardedRef) => {
        const { children } = props, rest = __rest(props, ["children"]);
        return (React.createElement(ThemeConsumer, null, ({ theme, updateTheme, replaceTheme }) => {
            var _a;
            if (!theme) {
                const newProps = Object.assign(Object.assign({}, rest), { theme: { colors: lightColors, spacing: defaultSpacing }, children });
                return React.createElement(WrappedComponent, Object.assign({ ref: forwardedRef }, newProps));
            }
            const { components } = theme, restTheme = __rest(theme, ["components"]);
            const themedProps = typeof (components === null || components === void 0 ? void 0 : components[themeKey]) === 'function'
                ? (_a = components === null || components === void 0 ? void 0 : components[themeKey]) === null || _a === void 0 ? void 0 : _a.call(components, rest, restTheme)
                : components === null || components === void 0 ? void 0 : components[themeKey];
            const newProps = Object.assign(Object.assign({ theme: restTheme, updateTheme,
                replaceTheme }, deepmerge(themedProps || {}, rest, {
                customMerge: combineByStyles,
                clone: false,
            })), { children });
            return React.createElement(WrappedComponent, Object.assign({ ref: forwardedRef }, newProps));
        }));
    }, { displayName: displayName });
};
function withTheme(WrappedComponent, themeKey) {
    const name = themeKey
        ? `Themed.${themeKey}`
        : `Themed.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
    const Component = ThemedComponent(WrappedComponent, themeKey, name);
    if (isClassComponent(WrappedComponent)) {
        return hoistNonReactStatics(React.forwardRef(Component), WrappedComponent);
    }
    return React.forwardRef(Component);
}
export default withTheme;
