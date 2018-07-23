import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext();

export default class ThemeProvider extends React.Component {
  state = {
    theme: {},
  };

  updateTheme = updates => {
    this.setState(({ theme }) => ({
      theme: {
        ...theme,
        ...updates,
      },
    }));
  };

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
  children: PropTypes.node,
};

export const ThemeConsumer = ThemeContext.Consumer;
