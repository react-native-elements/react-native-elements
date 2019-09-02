import React from 'react';
import PropTypes from 'prop-types';

import { withTheme } from '../config';

import IOSSearchBar from './SearchBar-ios';
import AndroidSearchBar from './SearchBar-android';
import DefaultSearchBar from './SearchBar-default';

const SEARCHBAR_COMPONENTS = {
  ios: IOSSearchBar,
  android: AndroidSearchBar,
  default: DefaultSearchBar,
};

class SearchBar extends React.Component {
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
    const Component =
      SEARCHBAR_COMPONENTS[this.props.platform] || DefaultSearchBar;

    return (
      <Component
        ref={ref => {
          this.searchbar = ref;
        }}
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

export { SearchBar };
export default withTheme(SearchBar, 'SearchBar');
