import { withTheme } from '../config';
import { SearchBar, SearchBarProps } from './SearchBar';
import { SearchBarAndroidProps } from './SearchBar-android';
import { SearchBarIosProps } from './SearchBar-ios';
import { SearchBarDefaultProps } from './SearchBar-default';

export { SearchBar };
export type {
  SearchBarProps,
  SearchBarAndroidProps,
  SearchBarDefaultProps,
  SearchBarIosProps,
};
/**
 * RNE SearchBar
 *
 * **Preview**
 *
 * ![URL](URL)
 *
 * [**Documentation**](https://reactnativeelements.com/docs/searchbar)
 */
export default withTheme(SearchBar, 'SearchBar');
