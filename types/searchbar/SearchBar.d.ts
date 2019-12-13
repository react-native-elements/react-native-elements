declare var _default: any;
export default _default;
export class SearchBar extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    focus: () => void;
    blur: () => void;
    clear: () => void;
    cancel: () => void;
    render(): JSX.Element;
    searchbar: any;
}
export namespace SearchBar {
    export namespace propTypes {
        export const platform: PropTypes.Requireable<string>;
    }
    export namespace defaultProps {
        const platform_1: string;
        export { platform_1 as platform };
    }
}
import React from "react";
import PropTypes from "prop-types";
