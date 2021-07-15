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
import { ThemeProps } from '../config';

const SEARCHBAR_COMPONENTS = {
  ios: SearchBarIOS,
  android: SearchBarAndroid,
  default: SearchBarDefault,
};

export type SearchBarBaseProps = React.ComponentPropsWithRef<
  typeof TextInput
> & {
  platform?: 'default' | 'ios' | 'android';
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

export type SearchBarProps =
  | SearchBarBaseProps
  | SearchBarDefaultProps
  | SearchBarAndroidProps
  | SearchBarIosProps;

export class SearchBar extends React.Component<
  SearchBarProps & Partial<ThemeProps<SearchBarProps>>
> {
  searchbar!: SearchBarIOS;
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
      SEARCHBAR_COMPONENTS[this.props.platform] || SearchBarDefault;

    return (
      <Component
        ref={(ref: SearchBarIOS) => {
          this.searchbar = ref;
        }}
        {...this.props}
      />
    );
  }
}
