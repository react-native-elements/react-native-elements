import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { BadgeProps } from './Badge';
declare type withBadgeOptions = {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
    hidden?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
} & BadgeProps;
export declare const withBadge: (value: React.ReactNode | ((props: any) => React.ReactNode), options?: withBadgeOptions) => (WrappedComponent: React.ComponentType<any>) => React.ComponentType;
export {};
