import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';

const ThemeContext = React.createContext();

export default class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: merge(
        {
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
          },
        },
        props.theme
      ),
    };
  }

  updateTheme = updates => {
    this.setState(({ theme }) => ({
      theme: merge(theme, updates),
    }));
  };

  getTheme = () => {
    return this.state.theme;
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
  children: PropTypes.node.isRequired,
};

export const ThemeConsumer = ThemeContext.Consumer;
