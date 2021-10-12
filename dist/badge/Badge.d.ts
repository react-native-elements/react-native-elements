import React from 'react';
import { TextProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type BadgeProps = {
    containerStyle?: StyleProp<ViewStyle>;
    badgeStyle?: StyleProp<ViewStyle>;
    textProps?: TextProps;
    textStyle?: StyleProp<TextStyle>;
    value?: React.ReactNode;
    onPress?: (...args: any[]) => any;
    Component?: typeof React.Component;
    status?: 'primary' | 'success' | 'warning' | 'error';
};
declare const Badge: RneFunctionComponent<BadgeProps>;
export { Badge };
declare const _default: React.FunctionComponent<Pick<BadgeProps & Partial<import("../config").ThemeProps<BadgeProps>>, "onPress" | "Component" | "containerStyle" | "badgeStyle" | "textProps" | "textStyle" | "value" | "status">> | React.ForwardRefExoticComponent<BadgeProps & Partial<import("../config").ThemeProps<BadgeProps>>>;
export default _default;
