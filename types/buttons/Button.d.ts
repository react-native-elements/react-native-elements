import * as React from 'react';
declare type ButtonProps = {
    title?: string;
    titleStyle?: any;
    titleProps?: object;
    buttonStyle?: any;
    type?: 'solid' | 'clear' | 'outline';
    loading?: boolean;
    loadingStyle?: any;
    loadingProps?: object;
    onPress?: (...args: any[]) => any;
    containerStyle?: any;
    icon?: any;
    iconContainerStyle?: any;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: React.ReactNode;
    ViewComponent?: JSX.Element;
    disabled?: boolean;
    disabledStyle?: any;
    disabledTitleStyle?: any;
    raised?: boolean;
    theme?: object;
};
declare class Button extends React.Component<ButtonProps, {}> {
    componentDidMount(): void;
    handleOnPress: () => void;
    render(): JSX.Element;
}
export { Button };
declare const _default: any;
export default _default;
