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
import DefaultTheme from './theme';
const isClassComponent = (Component) => Boolean(Component.prototype && Component.prototype.isReactComponent);
const ThemedComponent = (WrappedComponent, themeKey, displayName) => {
    return Object.assign((props, forwardedRef) => {
        const { children } = props, rest = __rest(props, ["children"]);
        return (<ThemeConsumer>
          {(context) => {
                // If user isn't using ThemeProvider
                if (!context) {
                    const newProps = Object.assign(Object.assign({}, rest), { theme: DefaultTheme, children });
                    return isClassComponent(WrappedComponent) ? (<WrappedComponent ref={forwardedRef} {...newProps}/>) : (<WrappedComponent {...newProps}/>);
                }
                const { theme, updateTheme, replaceTheme } = context;
                const newProps = Object.assign(Object.assign({ theme,
                    updateTheme,
                    replaceTheme }, deepmerge((themeKey &&
                    theme[themeKey]) ||
                    {}, rest, {
                    clone: false,
                })), { children });
                if (isClassComponent(WrappedComponent)) {
                    return <WrappedComponent ref={forwardedRef} {...newProps}/>;
                }
                return <WrappedComponent {...newProps}/>;
            }}
        </ThemeConsumer>);
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
    return Component;
}
export default withTheme;
