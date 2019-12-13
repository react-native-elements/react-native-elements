import * as React from 'react';
declare type SearchBarProps = {
    value?: string;
    cancelButtonProps?: object;
    cancelButtonTitle?: string;
    clearIcon?: any;
    searchIcon?: any;
    loadingProps?: object;
    showLoading?: boolean;
    onClear?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChangeText?: (...args: any[]) => any;
    containerStyle?: any;
    leftIconContainerStyle?: any;
    rightIconContainerStyle?: any;
    inputContainerStyle?: any;
    inputStyle?: any;
    placeholderTextColor?: string;
    showCancel?: boolean;
};
declare type SearchBarState = {
    hasFocus: boolean;
    isEmpty: boolean;
    cancelButtonWidth: null | number;
};
declare class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: any);
    static defaultProps: {
        value: string;
        cancelButtonTitle: string;
        loadingProps: {};
        cancelButtonProps: {};
        showLoading: boolean;
        onClear: () => any;
        onCancel: () => any;
        onFocus: () => any;
        onBlur: () => any;
        onChangeText: () => any;
        placeholderTextColor: string;
        searchIcon: {
            type: string;
            size: number;
            name: string;
            color: string;
        };
        clearIcon: {
            type: string;
            name: string;
            size: number;
            color: string;
        };
        showCancel: boolean;
    };
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    onFocus: () => void;
    onBlur: () => void;
    onChangeText: (text: any) => void;
    render(): JSX.Element;
}
export default SearchBar;
