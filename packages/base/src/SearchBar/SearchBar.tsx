import React from 'react';
import { Theme } from '../helpers';
import { SearchBarAndroid } from './SearchBar-android';
import { SearchBarDefault } from './SearchBar-default';
import { SearchBarIOS } from './SearchBar-ios';
import { SearchBarProps } from './types';

const SEARCH_BAR_COMPONENTS = {
  ios: SearchBarIOS,
  android: SearchBarAndroid,
  default: SearchBarDefault,
};

export type { SearchBarProps };

export class SearchBar extends React.Component<
  SearchBarProps & { theme: Theme; updateTheme: any; replaceTheme: any }
> {
  searchBar!: SearchBarIOS;
  static defaultProps = {
    platform: 'default' as const,
  };

  focus = () => {
    this.searchBar.focus();
  };

  blur = () => {
    this.searchBar.blur();
  };

  clear = () => {
    this.searchBar.clear();
  };

  cancel = () => {
    this.searchBar?.cancel();
  };

  render() {
    const Component: typeof React.Component =
      SEARCH_BAR_COMPONENTS[this.props.platform] || SearchBarDefault;

    return (
      <Component
        ref={(ref: SearchBarIOS) => {
          this.searchBar = ref;
        }}
        {...this.props}
      />
    );
  }
}
