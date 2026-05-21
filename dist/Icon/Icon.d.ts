import React from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { type IconButtonProps, type IconProps as VectorIconProps } from 'react-native-vector-icons/Icon';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
export type DeprecatedMaterialCommunity = 'material-community';
export type IconType = 'material' | DeprecatedMaterialCommunity | 'material-design' | 'simple-line-icon' | 'zocial' | 'font-awesome' | 'fa' | 'octicon' | 'ionicon' | 'foundation' | 'evilicon' | 'entypo' | 'antdesign' | 'font-awesome-5' | 'fa-5' | 'font-awesome-6' | 'fa-6' | (string & {});
export interface IconObject {
    testID?: string;
    name?: string;
    color?: string;
    size?: number;
    type?: IconType;
    iconStyle?: StyleProp<TextStyle>;
}
export type IconNode = boolean | React.ReactElement<{}> | Partial<IconProps>;
export interface IconProps extends InlinePressableProps, IconButtonProps {
    testID?: string;
    type?: IconType;
    Component?: typeof React.Component;
    reverse?: boolean;
    raised?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    iconProps?: VectorIconProps;
    reverseColor?: string;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    solid?: boolean;
    brand?: boolean;
}
export declare const Icon: RneFunctionComponent<IconProps>;
