import React from 'react';
import { merge, ThemeConsumer } from './index';
import DefaultTheme from './theme';

const withTheme = (WrappedComponent, themeKey) => {
  class ThemedComponent extends React.Component {
    render() {
      return (
        <ThemeConsumer>
          {context => {
            if (!context) {
              return <WrappedComponent {...this.props} theme={DefaultTheme} />;
            }

            const { theme, updateTheme } = context;

            return (
              <WrappedComponent
                {...merge({}, themeKey && theme[themeKey], this.props)}
                theme={theme}
                updateTheme={updateTheme}
              />
            );
          }}
        </ThemeConsumer>
      );
    }
  }

  if (themeKey) {
    ThemedComponent.displayName = `Themed.${themeKey}`;
  }

  return ThemedComponent;
};

export default withTheme;
