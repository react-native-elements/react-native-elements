import * as React from 'react';
declare type SearchBarProps = {
    value?: string;
    clearIcon?: any;
    searchIcon?: any;
    cancelIcon?: any;
    loadingProps?: object;
    showLoading?: boolean;
    containerStyle?: any;
    leftIconContainerStyle?: any;
    rightIconContainerStyle?: any;
    inputContainerStyle?: any;
    inputStyle?: any;
    onClear?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChangeText?: (...args: any[]) => any;
};
declare type SearchBarState = {
    hasFocus: boolean;
    isEmpty: boolean;
};
declare class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    static defaultProps: {
        value: string;
        loadingProps: {};
        showLoading: boolean;
        onClear: () => any;
        onCancel: () => any;
        onFocus: () => any;
        onBlur: () => any;
        onChangeText: () => any;
        searchIcon: {
            type: string;
            size: number;
            color: string;
            name: string;
        };
        clearIcon: {
            type: string;
            size: number;
            color: string;
            name: string;
        };
        cancelIcon: {
            type: string;
            size: number;
            color: string;
            name: string;
        };
    };
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    onFocus: () => void;
    onBlur: () => void;
    onChangeText: (text: any) => void;
    constructor(props: any);
    render(): JSX.Element;
}
export default SearchBar;
