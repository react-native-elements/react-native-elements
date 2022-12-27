import { withTheme } from '../config';
import { SearchBar, SearchBarProps } from '@rneui/base/SearchBar/SearchBar';
import { SearchBarAndroidProps } from '@rneui/base/SearchBar/SearchBar-android';
import { SearchBarIosProps } from '@rneui/base/SearchBar/SearchBar-ios';
import { SearchBarDefaultProps } from '@rneui/base/SearchBar/SearchBar-default';

export { SearchBar };
export type {
  SearchBarProps,
  SearchBarAndroidProps,
  SearchBarDefaultProps,
  SearchBarIosProps,
};

export default withTheme<SearchBarProps>(SearchBar, 'SearchBar');
