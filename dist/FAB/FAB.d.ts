import { StyleProp, ViewStyle } from 'react-native';
import { ButtonProps } from '../Button';
import { RneFunctionComponent } from '../helpers';
export interface FABProps extends Omit<ButtonProps, 'size' | 'color'> {
    color?: string;
    size?: 'large' | 'small';
    placement?: 'left' | 'right';
    visible?: boolean;
    upperCase?: boolean;
    style?: StyleProp<ViewStyle>;
}
export declare const FAB: RneFunctionComponent<FABProps>;
