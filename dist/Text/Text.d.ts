import { TextProps as TextProperties, TextStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type TextProps = TextProperties & {
    /**  Add additional styling for Text. */
    style?: StyleProp<TextStyle>;
    /**  Text with Font size 40. */
    h1?: boolean;
    /**  Text with Font size 34. */
    h2?: boolean;
    /**  Text with Font size 28. */
    h3?: boolean;
    /**  Text with Font size 22. */
    h4?: boolean;
    /**  Styling when h1 is set. */
    h1Style?: StyleProp<TextStyle>;
    /**  Styling when h2 is set. */
    h2Style?: StyleProp<TextStyle>;
    /**  Styling when h3 is set. */
    h3Style?: StyleProp<TextStyle>;
    /**  Styling when h3 is set. */
    h4Style?: StyleProp<TextStyle>;
};
/** Text displays words and characters at various sizes. */
export declare const Text: RneFunctionComponent<TextProps>;
