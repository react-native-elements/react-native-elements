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
declare const withBadge: (value: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | ((props: any) => React.ReactNode), options?: withBadgeOptions) => (WrappedComponent: React.ComponentType<any>) => React.ComponentType;
export default withBadge;
