import React from 'react';
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

const SearchBar = props => {
  const SearchBar = SEARCHBAR_COMPONENTS[props.platform] || DefaultSearchBar;
  return <SearchBar ref={ref => (props.searchBarRef = ref)} {...props} />;
};

SearchBar.propTypes = {
  searchBarRef: PropTypes.func,
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
            searchBarRef={ref => (this.searchbar = ref)}
            {...merge({}, theme.SearchBar, this.props)}
            theme={theme}
          />
        )}
      </ThemeConsumer>
    );
  }
}
