import * as React from 'react';
import { TextStyle } from 'react-native';
declare type TextElementProps = {
    style?: TextStyle;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: TextStyle;
    h2Style?: TextStyle;
    h3Style?: TextStyle;
    h4Style?: TextStyle;
};
declare class TextElement extends React.PureComponent<TextElementProps> {
    static defaultProps: {
        h1: boolean;
        h2: boolean;
        h3: boolean;
        h4: boolean;
        style: {};
        h1Style: {};
        h2Style: {};
        h3Style: {};
        h4Style: {};
        children: any;
    };
    render(): JSX.Element;
}
export { TextElement };
declare const _default: any;
export default _default;
