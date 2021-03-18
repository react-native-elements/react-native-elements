import React from 'react';
import { TextProps, StyleProp, ViewStyle } from 'react-native';
import { Theme } from '../config/theme';
export declare type BadgeProps = {
    containerStyle?: StyleProp<ViewStyle>;
    badgeStyle?: StyleProp<ViewStyle>;
    textProps?: TextProps;
    textStyle?: StyleProp<ViewStyle>;
    value?: React.ReactNode;
    onPress?: (...args: any[]) => any;
    Component?: typeof React.Component;
    theme?: Theme;
    status?: 'primary' | 'success' | 'warning' | 'error';
};
declare const Badge: React.FunctionComponent<BadgeProps>;
export { Badge };
declare const _default: React.FunctionComponent<Pick<BadgeProps, "onPress" | "Component" | "containerStyle" | "badgeStyle" | "textProps" | "textStyle" | "value" | "status">> | React.ForwardRefExoticComponent<BadgeProps>;
export default _default;
