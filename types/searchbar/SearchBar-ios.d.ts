export default SearchBar;
declare class SearchBar extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        hasFocus: boolean;
        isEmpty: boolean;
        cancelButtonWidth: any;
    };
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    onFocus: () => void;
    onBlur: () => void;
    onChangeText: (text: any) => void;
    render(): JSX.Element;
    input: any;
}
declare namespace SearchBar {
    export namespace propTypes {
        export const value: PropTypes.Requireable<string>;
        export const cancelButtonProps: PropTypes.Requireable<object>;
        export const cancelButtonTitle: PropTypes.Requireable<string>;
        export { nodeType as clearIcon };
        export { nodeType as searchIcon };
        export const loadingProps: PropTypes.Requireable<object>;
        export const showLoading: PropTypes.Requireable<boolean>;
        export const onClear: PropTypes.Requireable<(...args: any[]) => any>;
        export const onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        export const onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        export const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        export const onChangeText: PropTypes.Requireable<(...args: any[]) => any>;
        export const containerStyle: any;
        export const leftIconContainerStyle: any;
        export const rightIconContainerStyle: any;
        export const inputContainerStyle: any;
        export const inputStyle: any;
        export const placeholderTextColor: PropTypes.Requireable<string>;
        export const showCancel: PropTypes.Requireable<boolean>;
    }
    export namespace defaultProps {
        const value_1: string;
        export { value_1 as value };
        const cancelButtonTitle_1: string;
        export { cancelButtonTitle_1 as cancelButtonTitle };
        const loadingProps_1: {};
        export { loadingProps_1 as loadingProps };
        const cancelButtonProps_1: {};
        export { cancelButtonProps_1 as cancelButtonProps };
        const showLoading_1: boolean;
        export { showLoading_1 as showLoading };
        export function onClear_1(): any;
        export { onClear_1 as onClear };
        export function onCancel_1(): any;
        export { onCancel_1 as onCancel };
        export function onFocus_1(): any;
        export { onFocus_1 as onFocus };
        export function onBlur_1(): any;
        export { onBlur_1 as onBlur };
        export function onChangeText_1(): any;
        export { onChangeText_1 as onChangeText };
        export { IOS_GRAY as placeholderTextColor };
        export { defaultSearchIcon as searchIcon };
        export { defaultClearIcon as clearIcon };
        const showCancel_1: boolean;
        export { showCancel_1 as showCancel };
    }
}
import React from "react";
import PropTypes from "prop-types";
import { nodeType } from "../helpers";
declare const IOS_GRAY: "#7d7d7d";
declare const defaultSearchIcon: {
    type: string;
    size: number;
    name: string;
    color: string;
};
declare const defaultClearIcon: {
    type: string;
    name: string;
    size: number;
    color: string;
};
