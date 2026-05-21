import { Animated, StyleProp, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export interface TabViewProps {
    value?: number;
    onChange?: (value: number) => any;
    animationType?: 'spring' | 'timing';
    animationConfig?: Omit<Animated.SpringAnimationConfig & Animated.TimingAnimationConfig, 'toValue'>;
    containerStyle?: StyleProp<ViewStyle>;
    tabItemContainerStyle?: StyleProp<ViewStyle>;
    disableSwipe?: Boolean;
    disableTransition?: Boolean;
    onSwipeStart?: (dir: 'left' | 'right') => void;
    minSwipeRatio?: number;
    minSwipeSpeed?: number;
}
export declare const TabViewBase: RneFunctionComponent<TabViewProps>;
