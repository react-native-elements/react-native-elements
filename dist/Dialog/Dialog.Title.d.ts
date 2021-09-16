import { TextStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { TextProps } from '../Text';
export declare type DialogTitleProps = {
    /** Add Dialog title. */
    title?: string;
    /** Add additional styling for title component. */
    titleStyle?: StyleProp<TextStyle>;
    /** Add additional props for Text component. */
    titleProps?: TextProps;
};
/** `DialogTitle` allows you to add title to the Dialog. */
export declare const DialogTitle: RneFunctionComponent<DialogTitleProps>;
