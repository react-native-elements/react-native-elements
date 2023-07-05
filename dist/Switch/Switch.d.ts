import { SwitchProps as NativeSwitchProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface SwitchProps extends NativeSwitchProps {
    color?: string;
}
export declare const Switch: RneFunctionComponent<SwitchProps>;
