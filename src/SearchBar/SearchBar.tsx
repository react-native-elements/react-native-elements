import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import SearchBarIOS from './SearchBar-ios';
import SearchBarAndroid from './SearchBar-android';
import SearchBarDefault from './SearchBar-default';
import { Theme } from '../helpers';
import { SearchBarProps } from './types';

const SEARCH_BAR_COMPONENTS = {
  ios: SearchBarIOS,
  android: SearchBarAndroid,
  default: SearchBarDefault,
};

export type { SearchBarProps };

export type SearchBarRef = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  cancel: () => void;
};

export const SearchBar = forwardRef<
  SearchBarRef,
  SearchBarProps & { theme?: Theme }
>((props, ref) => {
  const { platform = 'default' } = props;
  const searchBarRef = useRef<SearchBarRef>(null);

  useImperativeHandle(ref, () => ({
    focus: () => searchBarRef.current?.focus(),
    blur: () => searchBarRef.current?.blur(),
    clear: () => searchBarRef.current?.clear(),
    cancel: () => searchBarRef.current?.cancel(),
  }));

  const Component: React.ElementType =
    SEARCH_BAR_COMPONENTS[platform] || SearchBarDefault;

  return <Component ref={searchBarRef} {...props} />;
});
