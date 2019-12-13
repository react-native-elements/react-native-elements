declare var _default: any;
export default _default;
export function PricingCard(props: any): JSX.Element;
export namespace PricingCard {
    export namespace propTypes {
        export const containerStyle: any;
        export const wrapperStyle: any;
        export const title: PropTypes.Requireable<string>;
        export const price: PropTypes.Requireable<React.ReactText>;
        export const info: PropTypes.Requireable<string[]>;
        export const button: PropTypes.Requireable<object>;
        export const color: PropTypes.Requireable<string>;
        export const onButtonPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const titleStyle: any;
        export const pricingStyle: any;
        export const infoStyle: any;
        export const theme: PropTypes.Requireable<object>;
    }
    export namespace defaultProps {
        const info_1: any[];
        export { info_1 as info };
    }
}
import PropTypes from "prop-types";
import React from "react";
