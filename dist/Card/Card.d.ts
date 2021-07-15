import { StyleProp, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type CardBaseProps = {
    /** Outer container style. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Inner container style. */
    wrapperStyle?: StyleProp<ViewStyle>;
};
/** Cards are a great way to display information, usually containing content and actions about a single subject.
 * Cards can contain images, buttons, text and more.
 * Cards are mainly used for informative purpose.*/
export declare const CardBase: RneFunctionComponent<CardBaseProps>;
