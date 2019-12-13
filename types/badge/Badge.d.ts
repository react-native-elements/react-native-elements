declare var _default: any;
export default _default;
export function Badge(props: any): JSX.Element;
export namespace Badge {
    export namespace propTypes {
        export const containerStyle: any;
        export const badgeStyle: any;
        export const textStyle: any;
        export const value: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const onPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const Component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        export const theme: PropTypes.Requireable<object>;
        export const status: PropTypes.Requireable<string>;
    }
    export namespace defaultProps {
        const status_1: string;
        export { status_1 as status };
    }
}
import PropTypes from "prop-types";
