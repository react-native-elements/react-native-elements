declare var _default: any;
export default _default;
export function ButtonGroup(props: any): JSX.Element;
export namespace ButtonGroup {
    export namespace propTypes {
        export const button: PropTypes.Requireable<object>;
        export const Component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        export const onPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const buttons: PropTypes.Requireable<any[]>;
        export const containerStyle: any;
        export const textStyle: any;
        export const selectedTextStyle: any;
        export const selectedButtonStyle: any;
        export const underlayColor: PropTypes.Requireable<string>;
        export const selectedIndex: PropTypes.Requireable<number>;
        export const selectedIndexes: PropTypes.Requireable<number[]>;
        export const activeOpacity: PropTypes.Requireable<number>;
        export const onHideUnderlay: PropTypes.Requireable<(...args: any[]) => any>;
        export const onShowUnderlay: PropTypes.Requireable<(...args: any[]) => any>;
        export const setOpacityTo: PropTypes.Requireable<(...args: any[]) => any>;
        export const innerBorderStyle: PropTypes.Requireable<PropTypes.InferProps<{
            color: PropTypes.Requireable<string>;
            width: PropTypes.Requireable<number>;
        }>>;
        export const lastBorderStyle: PropTypes.Requireable<any>;
        export const buttonStyle: any;
        export const selectMultiple: PropTypes.Requireable<boolean>;
        export const theme: PropTypes.Requireable<object>;
        export const disabled: PropTypes.Requireable<boolean | number[]>;
        export const disabledStyle: any;
        export const disabledTextStyle: any;
        export const disabledSelectedStyle: any;
        export const disabledSelectedTextStyle: any;
    }
    export namespace defaultProps {
        const selectedIndex_1: any;
        export { selectedIndex_1 as selectedIndex };
        const selectedIndexes_1: any[];
        export { selectedIndexes_1 as selectedIndexes };
        const selectMultiple_1: boolean;
        export { selectMultiple_1 as selectMultiple };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const Component_1: any;
        export { Component_1 as Component };
        export function onPress_1(): any;
        export { onPress_1 as onPress };
    }
}
import PropTypes from "prop-types";
