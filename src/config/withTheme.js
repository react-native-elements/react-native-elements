import React from 'react';
import deepmerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { ThemeConsumer } from './ThemeProvider';
import DefaultTheme from './theme';

const isClassComponent = (Component) =>
  Boolean(Component.prototype && Component.prototype.isReactComponent);

const withTheme = (WrappedComponent, themeKey) => {
  class ThemedComponent extends React.Component {
    render() {
      const { forwardedRef, children, ...rest } = this.props;

      return (
        <ThemeConsumer>
          {(context) => {
            // If user isn't using ThemeProvider
            if (!context) {
              const props = { ...rest, theme: DefaultTheme, children };

              return isClassComponent(WrappedComponent) ? (
                <WrappedComponent ref={forwardedRef} {...props} />
              ) : (
                <WrappedComponent {...props} />
              );
            }

            const { theme, updateTheme, replaceTheme } = context;
            const props = {
              theme,
              updateTheme,
              replaceTheme,
              ...deepmerge((themeKey && theme[themeKey]) || {}, rest, {
                clone: false,
              }),
              children,
            };

            if (isClassComponent(WrappedComponent)) {
              return <WrappedComponent ref={forwardedRef} {...props} />;
            }
            return <WrappedComponent {...props} />;
          }}
        </ThemeConsumer>
      );
    }
  }

  const name = themeKey
    ? `Themed.${themeKey}`
    : `Themed.${
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
      }`;

  if (isClassComponent(WrappedComponent)) {
    const forwardRef = (props, ref) => (
      <ThemedComponent {...props} forwardedRef={ref} />
    );

    forwardRef.displayName = name;
    return hoistNonReactStatics(React.forwardRef(forwardRef), WrappedComponent);
  }

  ThemedComponent.displayName = name;
  return ThemedComponent;
};

export default withTheme;
