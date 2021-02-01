import React from 'react';
import { withTheme } from '../config';
import IOSSearchBar from './SearchBar-ios';
import AndroidSearchBar from './SearchBar-android';
import DefaultSearchBar from './SearchBar-default';
import {
  ActivityIndicatorProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { IconNode } from '../icons/Icon';

const SEARCHBAR_COMPONENTS = {
  ios: IOSSearchBar,
  android: AndroidSearchBar,
  default: DefaultSearchBar,
};

export type SearchBarBaseProps = typeof SearchBar.defaultProps & {
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
};

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
    const Component =
      SEARCHBAR_COMPONENTS[this.props.platform] || DefaultSearchBar;

    return (
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
export default withTheme(SearchBar, 'SearchBar');
