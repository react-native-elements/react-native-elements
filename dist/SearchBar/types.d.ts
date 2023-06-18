import { PressableProps, ViewStyle, StyleProp, TextStyle, ActivityIndicatorProps } from 'react-native';
import { Theme } from '../helpers';
import { IconNode } from '../Icon';
import { InputProps } from '../Input';
export declare type SearchBarAndroidProps = SearchBarBaseProps & {
    platform?: 'android';
    cancelIcon?: IconNode;
    onCancel?: () => any;
    onKeyboardHide?: () => any;
};
export declare type SearchBarIosProps = SearchBarBaseProps & {
    platform?: 'ios';
    cancelButtonProps?: Partial<PressableProps> & {
        buttonStyle?: StyleProp<ViewStyle>;
        buttonTextStyle?: StyleProp<TextStyle>;
        color?: string;
        buttonDisabledStyle?: StyleProp<ViewStyle>;
        buttonDisabledTextStyle?: StyleProp<ViewStyle>;
    };
    cancelButtonTitle?: string;
    showCancel?: boolean;
    searchIcon?: IconNode;
    clearIcon?: IconNode;
    onCancel?: () => any;
};
export declare type SearchBarDefaultProps = SearchBarBaseProps & {
    platform?: 'default';
    lightTheme?: boolean;
    round?: boolean;
};
export interface SearchBarBaseProps extends InputProps {
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
    theme?: Theme;
}
export declare type SearchBarProps = SearchBarDefaultProps | SearchBarAndroidProps | SearchBarIosProps;
