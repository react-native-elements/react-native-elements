import { ViewStyle, TextStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { ButtonProps } from '../Button';
declare type ButtonInformation = {
    title: string;
    icon?: string;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
};
export interface PricingCardProps {
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    title?: string;
    price?: string | number;
    info?: string[];
    button?: ButtonProps | ButtonInformation;
    color?: string;
    onButtonPress?(): void;
    titleStyle?: StyleProp<TextStyle>;
    pricingStyle?: StyleProp<TextStyle>;
    infoStyle?: StyleProp<TextStyle>;
}
export declare const PricingCard: RneFunctionComponent<PricingCardProps>;
export {};
