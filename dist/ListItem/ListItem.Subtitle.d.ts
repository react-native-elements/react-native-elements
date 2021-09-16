import { TextProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type ListItemSubtitleProps = TextProps & {
    right?: boolean;
};
/** This allows adding SubTitle to the ListItem.
 * This, Receives all [Text](text#props) props. */
export declare const ListItemSubtitle: RneFunctionComponent<ListItemSubtitleProps>;
