import { Animated } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type TabViewBaseProps = {
    /** Child position index value. */
    value?: number;
    /** On Index Change Callback. */
    onChange?: (value: number) => any;
    /** Choose the animation type among `spring` and `timing`. This is visible when there is tab change. */
    animationType?: 'spring' | 'timing';
    /** Define the animation configurations. */
    animationConfig?: Omit<Animated.SpringAnimationConfig & Animated.TimingAnimationConfig, 'toValue'>;
};
/** Tabs organize content across different screens, data sets, and other interactions.
 * TabView enables swipeable tabs. */
export declare const TabViewBase: RneFunctionComponent<TabViewBaseProps>;
