/// <reference types="react" />
import { SearchBar, SearchBarProps } from './SearchBar';
import { SearchBarAndroidProps } from './SearchBar-android';
import { SearchBarIosProps } from './SearchBar-ios';
import { SearchBarDefaultProps } from './SearchBar-default';
export { SearchBar };
export type { SearchBarProps, SearchBarAndroidProps, SearchBarDefaultProps, SearchBarIosProps, };
declare const _default: import("react").FunctionComponent<Omit<SearchBarProps & Partial<import("../config").ThemeProps<SearchBarProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<SearchBarProps & Partial<import("../config").ThemeProps<SearchBarProps>>>;
export default _default;
