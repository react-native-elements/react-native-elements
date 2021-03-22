import React from 'react';
import { withTheme } from '../config';
import IOSSearchBar, { SearchBarIosProps } from './SearchBar-ios';
import AndroidSearchBar, { SearchBarAndroidProps } from './SearchBar-android';
import DefaultSearchBar, { SearchBarDefaultProps } from './SearchBar-default';
import {
  ActivityIndicatorProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { IconNode } from '../icons/Icon';
import { Theme, FullTheme } from '../config/theme';
type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };
const SEARCHBAR_COMPONENTS = {
  ios: IOSSearchBar,
  android: AndroidSearchBar,
  default: DefaultSearchBar,
};

export type SearchBarBaseProps = {
  platform: 'default' | 'ios' | 'android';
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  clearIcon?: IconNode;
  searchIcon?: IconNode;
  inputStyle?: StyleProp<TextStyle>;
  loadingProps?: ActivityIndicatorProps;
  showLoading?: boolean;
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  onClear?(): void;
  onFocus?(): void;
  onBlur?(): void;
  onChangeText?(text: string): void;
  onCancel?(): void;
  theme?: Theme;
  updateTheme: (updates: RecursivePartial<FullTheme>) => void;
  replaceTheme: (updates: RecursivePartial<FullTheme>) => void;
};

export type SearchBarProps = SearchBarBaseProps &
  SearchBarDefaultProps &
  SearchBarAndroidProps &
  SearchBarIosProps;

class SearchBar extends React.Component<SearchBarBaseProps> {
  searchbar!: IOSSearchBar;
  static defaultProps = {
    platform: 'default' as const,
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
    const Component: typeof React.Component =
      SEARCHBAR_COMPONENTS[this.props.platform] || DefaultSearchBar;

    return (
      <Component
        // @ts-ignore
        ref={(ref: IOSSearchBar) => {
          this.searchbar = ref;
        }}
        {...this.props}
      />
    );
  }
}

export { SearchBar };
export default withTheme(SearchBar, 'SearchBar');
