import React from 'react';
import { Animated, StyleProp, ViewProps, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { ParentProps } from './Tab.Item';
export interface TabProps extends ViewProps, ParentProps {
    value?: number;
    scrollable?: boolean;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: StyleProp<ViewStyle>;
    variant?: 'primary' | 'default';
}
export declare type TabsRef = {
    changeIndex: (toValue: number) => void;
};
interface TabsProps {
    children: React.ReactNode;
    animationType?: 'timing' | 'spring';
    animationConfig?: Partial<Animated.TimingAnimationConfig | Animated.SpringAnimationConfig>;
}
export declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<unknown>>;
export declare const useTabsInternal: () => {
    __translateX: React.MutableRefObject<Animated.Value>;
    __currentIndex: React.MutableRefObject<number>;
    changeIndex: (toValue: number) => void;
};
export declare const TabBase: RneFunctionComponent<TabProps>;
export {};
