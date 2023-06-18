import { TextProps as TextProperties, TextStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface TextProps extends TextProperties {
    style?: StyleProp<TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: StyleProp<TextStyle>;
    h2Style?: StyleProp<TextStyle>;
    h3Style?: StyleProp<TextStyle>;
    h4Style?: StyleProp<TextStyle>;
}
export declare const Text: RneFunctionComponent<TextProps>;
