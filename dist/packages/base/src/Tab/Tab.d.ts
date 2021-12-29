import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type TabBaseProps = ViewProps & {
    /** Child position index value. */
    value?: number;
    /** On Index Change Callback. */
    onChange?: (value: number) => void;
    /** Disable the indicator below. */
    disableIndicator?: boolean;
    /** Additional styling for tab indicator. */
    indicatorStyle?: StyleProp<ViewStyle>;
    /** Define the background Variant. */
    variant?: 'primary' | 'default';
};
/** Tabs organize content across different screens, data sets, and other interactions. */
export declare const TabBase: RneFunctionComponent<TabBaseProps>;
