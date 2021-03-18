import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';
import { Theme } from '../config/theme';
declare type ButtonInformation = {
    title: string;
    icon: string;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
};
export declare type PricingCardProps = {
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    title?: string;
    price?: string | number;
    info?: string[];
    button?: ButtonInformation;
    color?: string;
    onButtonPress?(): void;
    titleStyle?: StyleProp<TextStyle>;
    pricingStyle?: StyleProp<TextStyle>;
    infoStyle?: StyleProp<TextStyle>;
    theme?: Theme;
};
declare const PricingCard: React.FunctionComponent<PricingCardProps>;
declare const PricingButton: (props: any) => JSX.Element;
export { PricingCard, PricingButton };
declare const _default: React.FunctionComponent<Pick<PricingCardProps, "button" | "color" | "containerStyle" | "title" | "titleStyle" | "wrapperStyle" | "price" | "info" | "onButtonPress" | "pricingStyle" | "infoStyle">> | React.ForwardRefExoticComponent<PricingCardProps>;
export default _default;
