import React from 'react';
import { TextInput } from 'react-native';
import { Theme } from '../helpers';
import { InputProps } from '../Input';
export interface ListItemInputProps extends InputProps {
}
export declare const ListItemInput: React.ForwardRefExoticComponent<Omit<ListItemInputProps & {
    theme?: Theme;
}, "ref"> & React.RefAttributes<TextInput>>;
