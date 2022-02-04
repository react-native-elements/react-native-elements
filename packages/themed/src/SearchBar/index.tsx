import { withTheme } from '../config';
import {
  SearchBar,
  SearchBarProps,
} from '@react-native-elements/base/dist/SearchBar/SearchBar';
import { SearchBarAndroidProps } from '@react-native-elements/base/dist/SearchBar/SearchBar-android';
import { SearchBarIosProps } from '@react-native-elements/base/dist/SearchBar/SearchBar-ios';
import { SearchBarDefaultProps } from '@react-native-elements/base/dist/SearchBar/SearchBar-default';

export { SearchBar };
export type {
  SearchBarProps,
  SearchBarAndroidProps,
  SearchBarDefaultProps,
  SearchBarIosProps,
};
export default withTheme<SearchBarProps>(SearchBar, 'SearchBar');
