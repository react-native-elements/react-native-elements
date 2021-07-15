import { TextProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
declare type TitleProps = TextProps & {
    /**Add right title. */
    right?: boolean;
};
export declare const ListItemTitle: RneFunctionComponent<TitleProps>;
export {};
