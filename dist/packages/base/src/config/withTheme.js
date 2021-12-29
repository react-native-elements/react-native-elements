import React from 'react';
import deepmerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeConsumer } from './ThemeProvider';
import DefaultTheme from './theme';
const isClassComponent = (Component) => Boolean(Component.prototype && Component.prototype.isReactComponent);
const ThemedComponent = (WrappedComponent, themeKey, displayName) => {
    return Object.assign((props, forwardedRef) => {
        const { children, ...rest } = props;
        return (<ThemeConsumer>
          {(context) => {
                // If user isn't using ThemeProvider
                if (!context) {
                    const newProps = { ...rest, theme: DefaultTheme, children };
                    return isClassComponent(WrappedComponent) ? (<WrappedComponent ref={forwardedRef} {...newProps}/>) : (<WrappedComponent {...newProps}/>);
                }
                const { theme, updateTheme, replaceTheme } = context;
                const newProps = {
                    theme,
                    updateTheme,
                    replaceTheme,
                    ...deepmerge((themeKey &&
                        theme[themeKey]) ||
                        {}, rest, {
                        clone: false,
                    }),
                    children,
                };
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
