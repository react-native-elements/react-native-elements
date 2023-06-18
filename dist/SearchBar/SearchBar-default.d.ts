import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { SearchBarDefaultProps } from './types';
export type { SearchBarDefaultProps };
declare type SearchBarState = {
    isEmpty: boolean;
};
export declare class SearchBarDefault extends React.Component<SearchBarDefaultProps, SearchBarState> {
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
