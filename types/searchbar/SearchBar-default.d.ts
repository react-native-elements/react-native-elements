export default SearchBar;
declare class SearchBar extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        isEmpty: boolean;
    };
    focus: () => void;
    blur: () => void;
    clear: () => void;
    onFocus: () => void;
    onBlur: () => void;
    onChangeText: (text: any) => void;
    render(): JSX.Element;
    input: any;
}
declare namespace SearchBar {
    export namespace propTypes {
        export const value: PropTypes.Requireable<string>;
        export { nodeType as clearIcon };
        export { nodeType as searchIcon };
        export const loadingProps: PropTypes.Requireable<object>;
        export const showLoading: PropTypes.Requireable<boolean>;
        export const containerStyle: any;
        export const leftIconContainerStyle: any;
        export const rightIconContainerStyle: any;
        export const inputContainerStyle: any;
        export const inputStyle: any;
        export const onClear: PropTypes.Requireable<(...args: any[]) => any>;
        export const onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        export const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        export const onChangeText: PropTypes.Requireable<(...args: any[]) => any>;
        export const placeholderTextColor: PropTypes.Requireable<string>;
        export const lightTheme: PropTypes.Requireable<boolean>;
        export const round: PropTypes.Requireable<boolean>;
        export const theme: PropTypes.Requireable<object>;
    }
    export namespace defaultProps {
        const value_1: string;
        export { value_1 as value };
        const loadingProps_1: {};
        export { loadingProps_1 as loadingProps };
        const showLoading_1: boolean;
        export { showLoading_1 as showLoading };
        const lightTheme_1: boolean;
        export { lightTheme_1 as lightTheme };
        const round_1: boolean;
        export { round_1 as round };
        export function onClear_1(): any;
        export { onClear_1 as onClear };
        export function onFocus_1(): any;
        export { onFocus_1 as onFocus };
        export function onBlur_1(): any;
        export { onBlur_1 as onBlur };
        export function onChangeText_1(): any;
        export { onChangeText_1 as onChangeText };
    }
}
import React from "react";
import PropTypes from "prop-types";
import { nodeType } from "../helpers";
