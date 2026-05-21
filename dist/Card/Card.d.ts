import { StyleProp, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface CardProps {
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
}
export declare const CardBase: RneFunctionComponent<CardProps>;
