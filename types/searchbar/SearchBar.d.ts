import * as React from 'react';
import DefaultSearchBar from './SearchBar-default';
declare type SearchBarProps = {
    platform?: 'default' | 'ios' | 'android';
};
declare class SearchBar extends React.Component<SearchBarProps, {}> {
    searchbar: InstanceType<typeof DefaultSearchBar>;
    static defaultProps: {
        platform: string;
    };
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    render(): JSX.Element;
}
export { SearchBar };
declare const _default: any;
export default _default;
