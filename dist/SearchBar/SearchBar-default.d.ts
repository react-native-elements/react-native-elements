import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { SearchBarBaseProps } from './SearchBar';
import { ThemeProps } from '../config';
export declare type SearchBarDefaultProps = typeof SearchBarDefault.defaultProps & SearchBarBaseProps & TextInputProps;
declare type SearchBarState = {
    isEmpty: boolean;
};
export declare class SearchBarDefault extends React.Component<SearchBarDefaultProps & Partial<ThemeProps<SearchBarDefaultProps>>, SearchBarState> {
    input: TextInput;
    static defaultProps: {
        value: string;
        loadingProps: {};
        showLoading: boolean;
        lightTheme: boolean;
        round: boolean;
        onClear: () => any;
        onFocus: () => any;
        onBlur: () => any;
        onChangeText: () => any;
    };
    constructor(props: SearchBarDefaultProps);
    focus: () => void;
    blur: () => void;
    clear: () => void;
    onFocus: TextInputProps['onFocus'];
    onBlur: TextInputProps['onBlur'];
    onChangeText: (text: string) => void;
    render(): JSX.Element;
}
export {};
