import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { ParentProps } from './Tab.Item';
import { RneFunctionComponent } from '../helpers';
export interface TabProps extends ViewProps, ParentProps {
    value?: number;
    scrollable?: boolean;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: StyleProp<ViewStyle>;
    variant?: 'primary' | 'default';
}
export declare const TabBase: RneFunctionComponent<TabProps>;
