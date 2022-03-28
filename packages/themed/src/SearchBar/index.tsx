import { withTheme } from '../config';
import {
  SearchBar,
  SearchBarBaseProps,
} from '@rneui/base/dist/SearchBar/SearchBar';
import { SearchBarAndroidProps } from '@rneui/base/dist/SearchBar/SearchBar-android';
import { SearchBarIosProps } from '@rneui/base/dist/SearchBar/SearchBar-ios';
import { SearchBarDefaultProps } from '@rneui/base/dist/SearchBar/SearchBar-default';

export { SearchBar };
export type {
  SearchBarBaseProps as SearchBarProps,
  SearchBarAndroidProps,
  SearchBarDefaultProps,
  SearchBarIosProps,
};
export default withTheme<SearchBarBaseProps>(SearchBar, 'SearchBar');
