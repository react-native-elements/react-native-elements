import React from 'react';
import { SearchBarIosProps } from './types';
import { SearchBarRef } from './SearchBar';
export type { SearchBarIosProps };
declare const SearchBarIOS: React.ForwardRefExoticComponent<Omit<SearchBarIosProps, "ref"> & React.RefAttributes<SearchBarRef>>;
export default SearchBarIOS;
