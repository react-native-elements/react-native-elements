import React from 'react';
import { TextInput } from 'react-native';
import { ThemeProps } from '../config';
import { InputProps } from '../Input';
export declare type ListItemInputProps = InputProps;
/** This allows adding an Text Input within the ListItem.
 * This, Receives all [Input](Input.md#props) props. */
export declare const ListItemInput: React.ForwardRefExoticComponent<Pick<import("react-native").TextInputProps & React.RefAttributes<TextInput> & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabled?: boolean;
    disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftIcon?: import("../Icon").IconNode;
    leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightIcon?: import("../Icon").IconNode;
    rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    InputComponent?: React.ComponentType<{}> | React.ForwardRefExoticComponent<any>;
    errorProps?: object;
    errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    errorMessage?: string;
    label?: React.ReactNode;
    labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    labelProps?: object;
    renderErrorMessage?: boolean;
} & Partial<ThemeProps<InputProps>>, "containerStyle" | "disabled" | "label" | "key" | keyof import("react-native").TextInputProps | keyof ThemeProps<InputProps> | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage"> & React.RefAttributes<TextInput>>;
