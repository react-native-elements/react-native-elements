import * as React from 'react';
declare type PricingCardProps = {
    containerStyle?: any;
    wrapperStyle?: any;
    title?: string;
    price?: string | number;
    info?: string[];
    button?: object;
    color?: string;
    onButtonPress?: (...args: any[]) => any;
    titleStyle?: any;
    pricingStyle?: any;
    infoStyle?: any;
    theme?: object;
};
declare const PricingCard: React.SFC<PricingCardProps>;
export { PricingCard };
declare const _default: any;
export default _default;
