import { TextProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface ListItemTitleProps extends TextProps {
    right?: boolean;
}
export declare const ListItemTitle: RneFunctionComponent<ListItemTitleProps>;
