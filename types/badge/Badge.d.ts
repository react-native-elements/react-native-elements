import * as React from 'react';
declare type BadgeProps = {
    containerStyle?: any;
    badgeStyle?: any;
    textStyle?: any;
    value?: React.ReactNode;
    onPress?: (...args: any[]) => any;
    Component?: React.ReactNode;
    theme?: object;
    status?: 'primary' | 'success' | 'warning' | 'error';
};
declare class Badge extends React.PureComponent<BadgeProps> {
    static defaultProps: {
        status: string;
    };
    render(): JSX.Element;
}
export { Badge };
declare const _default: any;
export default _default;
