declare var _default: any;
export default _default;
export class Button extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    componentDidMount(): void;
    handleOnPress: () => void;
    render(): JSX.Element;
}
export namespace Button {
    export const propTypes: {
        title: PropTypes.Requireable<string>;
        titleStyle: any;
        titleProps: PropTypes.Requireable<object>;
        buttonStyle: any;
        type: PropTypes.Requireable<string>;
        loading: PropTypes.Requireable<boolean>;
        loadingStyle: any;
        loadingProps: PropTypes.Requireable<object>;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        containerStyle: any;
        icon: PropTypes.Requireable<boolean | object>;
        iconContainerStyle: any;
        iconRight: PropTypes.Requireable<boolean>;
        linearGradientProps: PropTypes.Requireable<object>;
        TouchableComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        ViewComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        disabled: PropTypes.Requireable<boolean>;
        disabledStyle: any;
        disabledTitleStyle: any;
        raised: PropTypes.Requireable<boolean>;
        theme: PropTypes.Requireable<object>;
    };
    export const defaultProps: {
        title: string;
        iconRight: boolean;
        TouchableComponent: any;
        onPress: () => void;
        type: string;
        buttonStyle: {
            borderRadius: number;
        };
        disabled: boolean;
        raised: boolean;
        loading: boolean;
    };
}
import React from "react";
import PropTypes from "prop-types";
