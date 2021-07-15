import { IconObject } from '../../Icon';
import { StyleProp, TextStyle } from 'react-native';
export declare type HeaderIcon = IconObject & {
    icon?: string;
    text?: string;
    color?: string;
    style?: StyleProp<TextStyle>;
};
