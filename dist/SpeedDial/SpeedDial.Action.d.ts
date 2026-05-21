import { FABProps } from '../FAB/index';
import { RneFunctionComponent } from '../helpers';
export interface SpeedDialActionProps extends Omit<FABProps, 'size'> {
    labelPressable?: boolean;
}
export declare const SpeedDialAction: RneFunctionComponent<SpeedDialActionProps>;
