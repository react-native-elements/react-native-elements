import { RneFunctionComponent } from '../helpers';
import { TextProps } from '../Text';
export declare type ListItemContentProps = TextProps & {
    right?: boolean;
};
/** This allows adding content to the ListItem.
 * This, Receives all [View](https://reactnative.dev/docs/view#props) props. */
export declare const ListItemContent: RneFunctionComponent<ListItemContentProps>;
