import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IOSSearchBar from './SearchBar-ios';
import AndroidSearchBar from './SearchBar-android';
import DefaultSearchBar from './SearchBar-default';
import { merge, ThemeConsumer } from '../config';

const SEARCHBAR_COMPONENTS = {
  ios: IOSSearchBar,
  android: AndroidSearchBar,
  default: DefaultSearchBar,
};

class SearchBar extends Component {
  focus = () => {
    this.searchbar.focus();
  };

  blur = () => {
    this.searchbar.blur();
  };

  clear = () => {
    this.searchbar.clear();
  };

  cancel = () => {
    this.searchbar.cancel && this.searchbar.cancel();
  };

  render() {
    const SearchBar =
      SEARCHBAR_COMPONENTS[this.props.platform] || DefaultSearchBar;
    return (
      <SearchBar
        ref={searchbar => (this.searchbar = searchbar)}
        {...this.props}
      />
    );
  }
}

SearchBar.propTypes = {
  platform: PropTypes.oneOf(['default', 'ios', 'android']),
};

SearchBar.defaultProps = {
  platform: 'default',
};

export default class ThemedSearchBar extends React.Component {
  focus = () => {
    this.searchbar.focus();
  };

  blur = () => {
    this.searchbar.blur();
  };

  clear = () => {
    this.searchbar.clear();
  };

  cancel = () => {
    this.searchbar.cancel && this.searchbar.cancel();
  };

  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <SearchBar
            ref={input => (this.input = input)}
            {...merge({}, theme.Input, this.props)}
            theme={theme}
          />
        )}
      </ThemeConsumer>
    );
  }
}
