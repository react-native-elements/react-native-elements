export default CheckBoxIcon;
declare function CheckBoxIcon({ checked, onIconPress, onLongIconPress, size, checkedIcon, uncheckedIcon, iconType, checkedColor, uncheckedColor, }: {
    checked: any;
    onIconPress: any;
    onLongIconPress: any;
    size: any;
    checkedIcon: any;
    uncheckedIcon: any;
    iconType: any;
    checkedColor: any;
    uncheckedColor: any;
}): JSX.Element;
declare namespace CheckBoxIcon {
    export namespace propTypes {
        export const checked: PropTypes.Requireable<boolean>;
        export const onIconPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const onLongIconPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const size: PropTypes.Requireable<number>;
        export const checkedIcon: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        export const uncheckedIcon: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        export const iconType: PropTypes.Requireable<string>;
        export const checkedColor: PropTypes.Requireable<string>;
        export const uncheckedColor: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
