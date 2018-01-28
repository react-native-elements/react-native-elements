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

  render() {
    const SearchBar = SEARCHBAR_COMPONENTS[this.props.platform] || DefaultSearchBar;
    return <SearchBar {...this.props} />;
  }
}

SearchBar.propTypes = {
  platform: PropTypes.oneOf(['default', 'ios', 'android']),
};

SearchBar.defaultProps = {
  platform: 'default',
};


export default SearchBar;