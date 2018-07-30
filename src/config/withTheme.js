import React from 'react';
import { merge, ThemeConsumer } from './index';

// This function takes a component...
const withTheme = (WrappedComponent, themeKey) => {
  // ...and returns another component...
  class ThemedComponent extends React.PureComponent {
    render() {
      return (
        <ThemeConsumer>
          {({ theme }) => (
            <WrappedComponent
              {...merge({}, themeKey && theme[themeKey], this.props)}
              theme={theme}
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
