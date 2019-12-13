declare var _default: any;
export default _default;
export function Icon(props: any): JSX.Element;
export namespace Icon {
    export const propTypes: {
        type: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<number>;
        color: PropTypes.Requireable<string>;
        Component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        underlayColor: PropTypes.Requireable<string>;
        reverse: PropTypes.Requireable<boolean>;
        raised: PropTypes.Requireable<boolean>;
        containerStyle: any;
        iconStyle: any;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        reverseColor: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        disabledStyle: any;
        solid: PropTypes.Requireable<boolean>;
        brand: PropTypes.Requireable<boolean>;
    };
    export const defaultProps: {
        underlayColor: string;
        reverse: boolean;
        raised: boolean;
        size: number;
        color: string;
        reverseColor: string;
        disabled: boolean;
        type: string;
        solid: boolean;
        brand: boolean;
    };
}
import PropTypes from "prop-types";
