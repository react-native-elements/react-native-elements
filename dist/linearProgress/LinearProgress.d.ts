import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type LinearProgressProps = {
    value?: number;
    variant?: 'determinate' | 'indeterminate';
    color?: 'primary' | 'secondary' | string;
    trackColor?: string;
    style?: StyleProp<ViewStyle>;
} & ViewProps;
declare const LinearProgress: RneFunctionComponent<LinearProgressProps>;
export default LinearProgress;
