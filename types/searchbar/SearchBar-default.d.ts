import React from 'react';
declare type SearchBarProps = {
    value?: string;
    clearIcon?: any;
    searchIcon?: any;
    loadingProps?: object;
    showLoading?: boolean;
    containerStyle?: any;
    leftIconContainerStyle?: any;
    rightIconContainerStyle?: any;
    inputContainerStyle?: any;
    inputStyle?: any;
    onClear?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChangeText?: (...args: any[]) => any;
    placeholderTextColor?: string;
    lightTheme?: boolean;
    round?: boolean;
    theme?: object;
};
declare type SearchBarState = {
    isEmpty: boolean;
};
declare class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: any);
    focus: () => void;
    blur: () => void;
    clear: () => void;
    onFocus: () => void;
    onBlur: () => void;
    onChangeText: (text: any) => void;
    render(): JSX.Element;
}
export default SearchBar;
