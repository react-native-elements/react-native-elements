import { TextProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
declare type TitleProps = TextProps & {
    /**Add right title. */
    right?: boolean;
};
/** This allows adding Title to the ListItem.
 * This, Receives all [Text](text#props) props. */
export declare const ListItemTitle: RneFunctionComponent<TitleProps>;
export {};
