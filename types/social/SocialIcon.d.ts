declare var _default: any;
export default _default;
export function SocialIcon(props: any): JSX.Element;
export namespace SocialIcon {
    export const propTypes: {
        Component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        type: PropTypes.Requireable<string>;
        button: PropTypes.Requireable<boolean>;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
        iconStyle: any;
        style: any;
        iconColor: PropTypes.Requireable<string>;
        underlayColor: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        raised: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        activityIndicatorStyle: any;
        small: PropTypes.Requireable<string>;
        iconSize: PropTypes.Requireable<React.ReactText>;
        light: PropTypes.Requireable<boolean>;
        fontWeight: PropTypes.Requireable<string>;
        fontStyle: any;
        fontFamily: PropTypes.Requireable<string>;
    };
    export namespace defaultProps {
        export const raised: boolean;
        export const iconColor: string;
        export const iconSize: number;
        export const button: boolean;
    }
}
import PropTypes from "prop-types";
import React from "react";
