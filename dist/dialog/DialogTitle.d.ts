import React from 'react';
import { TextStyle, StyleProp } from 'react-native';
import { TextProps } from '../text/Text';
export declare type DialogTitleProps = {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    titleProps?: TextProps;
};
declare const _default: React.FunctionComponent<Pick<DialogTitleProps, "title" | "titleStyle" | "titleProps">> | React.ForwardRefExoticComponent<DialogTitleProps>;
export default _default;
