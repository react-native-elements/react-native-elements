import React from 'react';
import { merge, ThemeConsumer } from './index';

const withTheme = (WrappedComponent, themeKey) => {
  class ThemedComponent extends React.PureComponent {
    render() {
      return (
        <ThemeConsumer>
          {({ theme, updateTheme }) => (
            <WrappedComponent
              {...merge({}, themeKey && theme[themeKey], this.props)}
              theme={theme}
              updateTheme={updateTheme}
            />
          )}
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
