declare var _default: any;
export default _default;
export function CheckBox(props: any): JSX.Element;
export namespace CheckBox {
    export const propTypes: {
        Component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        iconRight: PropTypes.Requireable<boolean>;
        title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        titleProps: PropTypes.Requireable<object>;
        center: PropTypes.Requireable<boolean>;
        right: PropTypes.Requireable<boolean>;
        containerStyle: any;
        wrapperStyle: any;
        textStyle: any;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
        checkedTitle: PropTypes.Requireable<string>;
        fontFamily: PropTypes.Requireable<string>;
        checked: PropTypes.Requireable<boolean>;
        onIconPress: PropTypes.Requireable<(...args: any[]) => any>;
        onLongIconPress: PropTypes.Requireable<(...args: any[]) => any>;
        size: PropTypes.Requireable<number>;
        checkedIcon: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        uncheckedIcon: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        iconType: PropTypes.Requireable<string>;
        checkedColor: PropTypes.Requireable<string>;
        uncheckedColor: PropTypes.Requireable<string>;
    };
    export namespace defaultProps {
        export const checked: boolean;
        export const iconRight: boolean;
        export const right: boolean;
        export const center: boolean;
        export const uncheckedColor: string;
        export const checkedIcon: string;
        export const uncheckedIcon: string;
        export const size: number;
        export { TouchableOpacity as Component };
        export const titleProps: {};
    }
}
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
