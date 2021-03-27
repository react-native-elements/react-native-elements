import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
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
};
declare const PricingCard: RneFunctionComponent<PricingCardProps>;
declare const PricingButton: (props: any) => JSX.Element;
export { PricingCard, PricingButton };
declare const _default: React.FunctionComponent<Pick<PricingCardProps & Partial<import("../config").ThemeProps<PricingCardProps>>, "button" | "color" | "containerStyle" | "title" | "titleStyle" | "wrapperStyle" | "price" | "info" | "onButtonPress" | "pricingStyle" | "infoStyle">> | React.ForwardRefExoticComponent<PricingCardProps & Partial<import("../config").ThemeProps<PricingCardProps>>>;
export default _default;
