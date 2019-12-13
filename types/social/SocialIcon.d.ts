import * as React from 'react';
import { View, TouchableHighlight } from 'react-native';
declare type SocialIconProps = {
    Component?: typeof TouchableHighlight | typeof View;
    type?: string;
    button?: boolean;
    onPress?: (...args: any[]) => any;
    onLongPress?: (...args: any[]) => any;
    iconStyle?: any;
    style?: any;
    iconColor?: string;
    underlayColor?: string;
    title?: string;
    raised?: boolean;
    disabled?: boolean;
    loading?: boolean;
    activityIndicatorStyle?: any;
    small?: string;
    iconSize?: string | number;
    light?: boolean;
    fontWeight?: string;
    fontStyle?: any;
    fontFamily?: string;
};
declare class SocialIcon extends React.PureComponent<SocialIconProps> {
    static defaultProps: {
        raised: boolean;
        iconColor: string;
        iconSize: number;
        button: boolean;
    };
    render(): JSX.Element;
}
export { SocialIcon };
declare const _default: any;
export default _default;
