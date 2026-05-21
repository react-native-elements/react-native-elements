import React from 'react';
import { SearchBarAndroidProps } from './types';
import { SearchBarRef } from './SearchBar';
export type { SearchBarAndroidProps };
declare const SearchBarAndroid: React.ForwardRefExoticComponent<Omit<SearchBarAndroidProps, "ref"> & React.RefAttributes<SearchBarRef>>;
export default SearchBarAndroid;
