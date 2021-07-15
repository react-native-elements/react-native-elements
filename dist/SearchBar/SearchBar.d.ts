import React from 'react';
import { SearchBarIOS, SearchBarIosProps } from './SearchBar-ios';
import { SearchBarAndroidProps } from './SearchBar-android';
import { SearchBarDefaultProps } from './SearchBar-default';
import { ActivityIndicatorProps, StyleProp, TextStyle, ViewStyle, TextInput } from 'react-native';
import { IconNode } from '../Icon';
import { ThemeProps } from '../config';
export declare type SearchBarBaseProps = React.ComponentPropsWithRef<typeof TextInput> & {
    platform?: 'default' | 'ios' | 'android';
    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    clearIcon?: IconNode;
    searchIcon?: IconNode;
    inputStyle?: StyleProp<TextStyle>;
    loadingProps?: ActivityIndicatorProps;
    showLoading?: boolean;
    leftIconContainerStyle?: StyleProp<ViewStyle>;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    onClear?(): void;
    onFocus?(): void;
    onBlur?(): void;
    onChangeText?(text: string): void;
    onCancel?(): void;
};
export declare type SearchBarProps = SearchBarBaseProps | SearchBarDefaultProps | SearchBarAndroidProps | SearchBarIosProps;
export declare class SearchBar extends React.Component<SearchBarProps & Partial<ThemeProps<SearchBarProps>>> {
    searchbar: SearchBarIOS;
    static defaultProps: {
        platform: "default";
    };
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    render(): JSX.Element;
}
