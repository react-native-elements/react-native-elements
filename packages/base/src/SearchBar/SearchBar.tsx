import React from 'react';
import { SearchBarIOS, SearchBarIosProps } from './SearchBar-ios';
import { SearchBarAndroid, SearchBarAndroidProps } from './SearchBar-android';
import { SearchBarDefault, SearchBarDefaultProps } from './SearchBar-default';
import {
  ActivityIndicatorProps,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInput,
} from 'react-native';
import { IconNode } from '../Icon';
import { Theme } from '../helpers';

const SEARCH_BAR_COMPONENTS = {
  ios: SearchBarIOS,
  android: SearchBarAndroid,
  default: SearchBarDefault,
};

export interface SearchBarBaseProps
  extends React.ComponentPropsWithRef<typeof TextInput> {
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
}

export type SearchBarProps =
  | SearchBarDefaultProps
  | SearchBarAndroidProps
  | SearchBarIosProps;

export class SearchBar extends React.Component<
  SearchBarProps & {
    theme?: Theme;
    platform?: 'default' | 'ios' | 'android';
  }
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
