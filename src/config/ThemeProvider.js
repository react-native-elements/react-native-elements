import React from 'react';
import PropTypes from 'prop-types';
import deepmerge from 'deepmerge';

import colors from './colors';
import darkColors from './colorsDark';

export const ThemeContext = React.createContext({
  theme: {
    colors,
  },
});

export default class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    const defaultColors = props.useDark ? darkColors : colors;

    this.defaultTheme = deepmerge(
      {
        colors: defaultColors,
      },
      props.theme
    );
    this.state = {
      theme: this.defaultTheme,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Won't Initiate a re-render if the prop doesn't change.
    if (nextProps.useDark === this.props.useDark) {
      return false;
    }
    // Inverts the colors Light->Dark | Dark->Light
    const defaultColors = nextProps.useDark ? colors : darkColors;
    this.updateTheme({
      colors: defaultColors,
    });
    return true;
  }

  updateTheme = (updates) => {
    this.setState(({ theme }) => ({
      theme: deepmerge(theme, updates),
    }));
  };

  replaceTheme = (theme) => {
    this.setState(() => ({
      theme: deepmerge(this.defaultTheme, theme),
    }));
  };

  getTheme = () => this.state.theme;

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          updateTheme: this.updateTheme,
          replaceTheme: this.replaceTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
  useDark: PropTypes.bool,
};

ThemeProvider.defaultProps = {
  theme: {},
  useDark: false,
};

export const ThemeConsumer = ThemeContext.Consumer;
