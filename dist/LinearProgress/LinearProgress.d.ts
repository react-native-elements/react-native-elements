import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface LinearProgressProps extends ViewProps {
    value?: number;
    variant?: 'determinate' | 'indeterminate';
    color?: 'primary' | 'secondary' | string;
    trackColor?: string;
    style?: StyleProp<ViewStyle>;
    animation?: {
        duration?: number;
    } | boolean;
}
export declare const LinearProgress: RneFunctionComponent<LinearProgressProps>;
export declare const clamp: (value: number) => number;
