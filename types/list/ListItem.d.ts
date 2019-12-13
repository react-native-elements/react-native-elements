declare var _default: any;
export default _default;
export function ListItem(props: any): JSX.Element;
export namespace ListItem {
    export const propTypes: {
        containerStyle: any;
        contentContainerStyle: any;
        rightContentContainerStyle: any;
        Component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
        title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        titleStyle: any;
        titleProps: PropTypes.Requireable<object>;
        subtitle: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        subtitleStyle: any;
        subtitleProps: PropTypes.Requireable<object>;
        leftIcon: PropTypes.Requireable<boolean | object>;
        leftAvatar: PropTypes.Requireable<boolean | object>;
        leftElement: PropTypes.Requireable<boolean | object>;
        rightIcon: PropTypes.Requireable<boolean | object>;
        rightAvatar: PropTypes.Requireable<boolean | object>;
        rightElement: PropTypes.Requireable<boolean | object>;
        rightTitle: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        rightTitleStyle: any;
        rightTitleProps: PropTypes.Requireable<object>;
        rightSubtitle: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        rightSubtitleStyle: any;
        rightSubtitleProps: PropTypes.Requireable<object>;
        input: PropTypes.Requireable<object>;
        buttonGroup: PropTypes.Requireable<object>;
        switch: PropTypes.Requireable<object>;
        checkBox: PropTypes.Requireable<object>;
        badge: PropTypes.Requireable<object>;
        chevron: PropTypes.Requireable<boolean | object>;
        checkmark: PropTypes.Requireable<boolean | object>;
        disabled: PropTypes.Requireable<boolean>;
        disabledStyle: any;
        topDivider: PropTypes.Requireable<boolean>;
        bottomDivider: PropTypes.Requireable<boolean>;
        pad: PropTypes.Requireable<number>;
        linearGradientProps: PropTypes.Requireable<object>;
        ViewComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        theme: PropTypes.Requireable<object>;
    };
    export namespace defaultProps {
        export const pad: number;
        export const title: string;
    }
}
import PropTypes from "prop-types";
