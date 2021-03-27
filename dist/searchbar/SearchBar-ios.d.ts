import { Component } from 'react';
import { TouchableOpacityProps, ViewStyle, StyleProp, TextStyle, TextInput } from 'react-native';
import { InputProps } from '../input/Input';
import { SearchBarBaseProps } from './SearchBar';
import { ThemeProps } from '../config';
export declare type SearchBarIosProps = InputProps & SearchBarBaseProps & typeof SearchBar.defaultProps & {
    cancelButtonProps?: Partial<TouchableOpacityProps> & {
        buttonStyle?: StyleProp<ViewStyle>;
        buttonTextStyle?: StyleProp<TextStyle>;
        color?: string;
        buttonDisabledStyle?: StyleProp<ViewStyle>;
        buttonDisabledTextStyle?: StyleProp<ViewStyle>;
    };
    cancelButtonTitle?: string;
    showCancel?: boolean;
};
declare type SearchBarState = {
    hasFocus: boolean;
    isEmpty: boolean;
    cancelButtonWidth: number | null;
};
declare class SearchBar extends Component<SearchBarIosProps & Partial<ThemeProps<SearchBarIosProps>>, SearchBarState> {
    input: TextInput;
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
        searchIcon: {
            name: string;
        };
        clearIcon: {
            name: string;
        };
        showCancel: boolean;
    };
    constructor(props: SearchBarIosProps);
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    onFocus: InputProps['onFocus'];
    onBlur: InputProps['onBlur'];
    onChangeText: (text: string) => void;
    render(): JSX.Element;
}
export default SearchBar;
