import React from 'react';
import PropTypes from 'prop-types';
import deepmerge from 'deepmerge';

import colors from './colors';

const ThemeContext = React.createContext();

export default class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: deepmerge(
        {
          colors,
        },
        props.theme
      ),
    };
  }

  updateTheme = updates => {
    this.setState(({ theme }) => ({
      theme: deepmerge(theme, updates),
    }));
  };

  getTheme = () => this.state.theme;

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          updateTheme: this.updateTheme,
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
};

ThemeProvider.defaultProps = {
  theme: {},
};

export const ThemeConsumer = ThemeContext.Consumer;
