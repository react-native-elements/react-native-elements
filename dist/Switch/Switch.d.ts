import { SwitchProps as NativeSwitchProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type SwitchProps = NativeSwitchProps & {
    /**  The color of the component. */
    color?: string;
};
/**
 * Switch represents user's decision of a process and indicates whether a state is on/off.
 * Switch is a controlled component that requires an `onValueChange` to update the `value` prop.
 * This renders a `boolean` value. React native elements provide you with additional `theme` and `color` support in the Switch Button.
 * This component inherits [all native Switch props that come with a standard React Native Switch element](https://reactnative.dev/docs/switch.html).
 */
export declare const Switch: RneFunctionComponent<SwitchProps>;
