import PropTypes from 'prop-types';
import React, { Component } from 'react';
import IOSSearchBar from './SearchBar-ios';
import AndroidSearchBar from './SearchBar-android';
import DefaultSearchBar from './SearchBar-default';

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

export default SearchBar;
