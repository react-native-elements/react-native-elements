import React from 'react';
import { Theme } from '../helpers';
import { SearchBarProps } from './types';
export type { SearchBarProps };
export type SearchBarRef = {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
};
export declare const SearchBar: React.ForwardRefExoticComponent<(Omit<import("./types").SearchBarBaseProps & {
    platform?: "android";
    cancelIcon?: import("..").IconNode;
    onCancel?: () => any;
    onKeyboardHide?: () => any;
} & {
    theme?: Theme;
}, "ref"> | Omit<import("./types").SearchBarBaseProps & {
    platform?: "ios";
    cancelButtonProps?: Partial<import("react-native").PressableProps> & {
        buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        buttonTextStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        color?: string;
        buttonDisabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        buttonDisabledTextStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    };
    cancelButtonTitle?: string;
    showCancel?: boolean;
    searchIcon?: import("..").IconNode;
    clearIcon?: import("..").IconNode;
    onCancel?: () => any;
} & {
    theme?: Theme;
}, "ref"> | Omit<import("./types").SearchBarBaseProps & {
    platform?: "default";
    lightTheme?: boolean;
    round?: boolean;
} & {
    theme?: Theme;
}, "ref">) & React.RefAttributes<SearchBarRef>>;
