import { Component } from 'react';
import { TextInput } from 'react-native';
import { InputProps } from '../input/Input';
import { IconNode } from '../icons/Icon';
import { SearchBarBaseProps } from './SearchBar';
import { ThemeProps } from '../config';
export declare type SearchBarAndroidProps = InputProps & SearchBarBaseProps & typeof SearchBar.defaultProps & {
    cancelIcon?: IconNode;
};
declare type SearchBarState = {
    hasFocus: boolean;
    isEmpty: boolean;
};
declare class SearchBar extends Component<SearchBarAndroidProps & Partial<ThemeProps<SearchBarAndroidProps>>, SearchBarState> {
    input: TextInput;
    static defaultProps: {
        onClear: () => any;
        onCancel: () => any;
        onFocus: () => any;
        onBlur: () => any;
        onChangeText: () => any;
    };
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    onFocus: InputProps['onFocus'];
    onBlur: InputProps['onBlur'];
    onChangeText: (text: string) => void;
    constructor(props: SearchBarAndroidProps);
    _keyboardDidHide: () => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default SearchBar;
