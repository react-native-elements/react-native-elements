import React from 'react';
import { SearchBarDefaultProps } from './types';
import { SearchBarRef } from './SearchBar';
export type { SearchBarDefaultProps };
declare const SearchBarDefault: React.ForwardRefExoticComponent<Omit<SearchBarDefaultProps, "ref"> & React.RefAttributes<SearchBarRef>>;
export default SearchBarDefault;
