import React from 'react';
import IOSSearchBar, { SearchBarIosProps } from './SearchBar-ios';
import { SearchBarAndroidProps } from './SearchBar-android';
import { SearchBarDefaultProps } from './SearchBar-default';
import { ActivityIndicatorProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IconNode } from '../icons/Icon';
import { ThemeProps } from '../config';
export declare type SearchBarBaseProps = {
    platform: 'default' | 'ios' | 'android';
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
export declare type SearchBarProps = SearchBarBaseProps & SearchBarDefaultProps & SearchBarAndroidProps & SearchBarIosProps;
declare class SearchBar extends React.Component<SearchBarBaseProps & Partial<ThemeProps<SearchBarBaseProps>>> {
    searchbar: IOSSearchBar;
    static defaultProps: {
        platform: "default";
    };
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    render(): JSX.Element;
}
export { SearchBar };
declare const _default: React.FunctionComponent<Pick<SearchBarBaseProps & Partial<ThemeProps<SearchBarBaseProps>>, "onBlur" | "onFocus" | "containerStyle" | "platform" | "onClear" | "loadingProps" | "onChangeText" | "inputContainerStyle" | "leftIconContainerStyle" | "rightIconContainerStyle" | "inputStyle" | "clearIcon" | "searchIcon" | "showLoading" | "onCancel">> | React.ForwardRefExoticComponent<SearchBarBaseProps & Partial<ThemeProps<SearchBarBaseProps>>>;
export default _default;
