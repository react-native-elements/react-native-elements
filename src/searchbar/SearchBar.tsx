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
import { Theme } from '../config/theme';

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
};

export type SearchBarProps = SearchBarBaseProps &
  SearchBarDefaultProps &
  SearchBarAndroidProps &
  SearchBarIosProps;

class SearchBar extends React.Component<SearchBarBaseProps> {
  searchbar!: IOSSearchBar;
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
    const Component: typeof React.Component =
      SEARCHBAR_COMPONENTS[this.props.platform] || DefaultSearchBar;

    return (
      // @ts-ignore
      <Component
        ref={(ref: IOSSearchBar) => {
          this.searchbar = ref;
        }}
        {...this.props}
      />
    );
  }
}

export { SearchBar };
//@ts-ignore
export default withTheme(SearchBar, 'SearchBar');
