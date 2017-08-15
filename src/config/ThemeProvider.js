import { Component } from 'react';
import PropTypes from 'prop-types';
import getTheme from './getTheme';

const propTypes = {
  children: PropTypes.element,
  theme: PropTypes.object,
};

const childContextTypes = {
  theme: PropTypes.object.isRequired,
};

class ThemeProvider extends Component {
  getChildContext() {
    return {
      theme: getTheme(this.props.theme),
    };
  }

  render() {
    return this.props.children;
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.childContextTypes = childContextTypes;

export default ThemeProvider;
