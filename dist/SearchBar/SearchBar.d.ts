import React from 'react';
import { SearchBarIOS } from './SearchBar-ios';
import { Theme } from '../helpers';
import { SearchBarProps } from './types';
export type { SearchBarProps };
export declare class SearchBar extends React.Component<SearchBarProps & {
    theme?: Theme;
}> {
    searchBar: SearchBarIOS;
    static defaultProps: {
        platform: "default";
    };
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    render(): JSX.Element;
}
