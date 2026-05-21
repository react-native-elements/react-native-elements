import React from 'react';
import { TextProps, TextStyle, ViewStyle, StyleProp, PressableProps } from 'react-native';
import { CheckBoxIconProps } from './components/CheckBoxIcon';
import { RneFunctionComponent } from '../helpers';
export interface CheckBoxProps extends PressableProps, CheckBoxIconProps {
    Component?: typeof React.Component;
    iconRight?: boolean;
    title?: string | React.ReactElement<{}>;
    titleProps?: TextProps;
    center?: boolean;
    right?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    disabledTitleStyle?: StyleProp<TextStyle>;
    checkedTitle?: string;
    fontFamily?: string;
}
export declare const CheckBox: RneFunctionComponent<CheckBoxProps>;
