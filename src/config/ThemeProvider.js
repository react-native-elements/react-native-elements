import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext();

export default class ThemeProvider extends React.Component {
  state = {
    theme: {
      colors: {
        primary: '#2089dc',
        secondary: '#8F0CE8',
        grey0: '#393e42',
        grey1: '#43484d',
        grey2: '#5e6977',
        grey3: '#86939e',
        grey4: '#bdc6cf',
        grey5: '#e1e8ee',
        greyOutline: '#bbb',
        searchBg: '#303337',
        error: '#ff190c',
      }
    },
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
