import { ViewStyle, TextStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { ButtonProps } from '../Button';
declare type ButtonInformation = {
    title: string;
    icon?: string;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
};
export declare type PricingCardProps = {
    /** Outer component styling. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Inner wrapper component styling. */
    wrapperStyle?: StyleProp<ViewStyle>;
    /** Add title in the pricing card. */
    title?: string;
    /** Price mentioned in the pricing card. */
    price?: string | number;
    /** Pricing information. */
    info?: string[];
    /** Button information. */
    button?: ButtonProps | ButtonInformation;
    /** Color scheme for button & title. */
    color?: string;
    /** Function to be run when button is pressed. */
    onButtonPress?(): void;
    /** Specify title text style. */
    titleStyle?: StyleProp<TextStyle>;
    /** Specify pricing text style. */
    pricingStyle?: StyleProp<TextStyle>;
    /** Specify pricing information style. */
    infoStyle?: StyleProp<TextStyle>;
};
/** Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way. */
export declare const PricingCard: RneFunctionComponent<PricingCardProps>;
export {};
