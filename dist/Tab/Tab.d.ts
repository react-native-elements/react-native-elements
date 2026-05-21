import { Animated, StyleProp, ViewProps, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { ParentProps } from './Tab.Item';
export interface TabProps extends ViewProps, ParentProps {
    scrollable?: boolean;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: StyleProp<ViewStyle>;
    variant?: 'primary' | 'default';
    value?: number;
    animationType?: 'timing' | 'spring';
    animationConfig?: Partial<Animated.TimingAnimationConfig | Animated.SpringAnimationConfig>;
}
export declare const TabBase: RneFunctionComponent<TabProps>;
