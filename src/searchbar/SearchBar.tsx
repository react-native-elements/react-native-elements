import * as React from 'react';
import { withTheme } from '../config';
import IOSSearchBar from './SearchBar-ios';
import AndroidSearchBar from './SearchBar-android';
import DefaultSearchBar from './SearchBar-default';
const SEARCHBAR_COMPONENTS = {
  ios: IOSSearchBar,
  android: AndroidSearchBar,
  default: DefaultSearchBar,
};
type SearchBarProps = {
  platform?: 'default' | 'ios' | 'android';
};
class SearchBar extends React.Component<SearchBarProps, {}> {
  searchbar: InstanceType<typeof DefaultSearchBar>;
  static defaultProps = {
    platform: 'default',
  };
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

export { SearchBar };
export default withTheme(SearchBar, 'SearchBar');
