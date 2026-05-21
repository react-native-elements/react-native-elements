import { ViewProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface DividerProps extends ViewProps {
    color?: string;
    inset?: boolean;
    insetType?: 'left' | 'right' | 'middle';
    style?: StyleProp<ViewStyle>;
    subHeader?: string;
    subHeaderStyle?: StyleProp<TextStyle>;
    orientation?: 'horizontal' | 'vertical';
    width?: number;
}
export declare const Divider: RneFunctionComponent<DividerProps>;
