import React from 'react';
import { merge, ThemeConsumer } from './index';
import DefaultTheme from './theme';

const isClassComponent = Component =>
  Boolean(Component.prototype && Component.prototype.isReactComponent);

const withTheme = (WrappedComponent, themeKey) => {
  class ThemedComponent extends React.Component {
    render() {
      /* eslint-disable react/prop-types */
      const { forwardedRef, ...rest } = this.props;

      return (
        <ThemeConsumer>
          {context => {
            // If user isn't using ThemeProvider
            if (!context) {
              let props = { ...rest, theme: DefaultTheme };

              return isClassComponent(WrappedComponent) ? (
                <WrappedComponent ref={forwardedRef} {...props} />
              ) : (
                <WrappedComponent {...props} />
              );
            }

            const { theme, updateTheme } = context;
            const props = {
              theme,
              updateTheme,
              ...merge({}, themeKey && theme[themeKey], rest),
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
    : `Themed.${WrappedComponent.displayName ||
        WrappedComponent.name ||
        'Component'}`;

  const forwardRef = (props, ref) => {
    return <ThemedComponent {...props} forwardedRef={ref} />;
  };

  ThemedComponent.displayName = name;
  forwardRef.displayName = name;

  // Forward refs from children
  if (isClassComponent(WrappedComponent)) {
    return React.forwardRef(forwardRef);
  }

  return ThemedComponent;
};

export default withTheme;
