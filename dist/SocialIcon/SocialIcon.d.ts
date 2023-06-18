import React from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
export declare type SocialMediaType = 'facebook' | 'facebook-messenger' | 'whatsapp' | 'twitter' | 'google-plus-official' | 'google' | 'pinterest' | 'linkedin' | 'youtube' | 'vimeo' | 'tumblr' | 'instagram' | 'quora' | 'flickr' | 'foursquare' | 'wordpress' | 'stumbleupon' | 'github' | 'github-alt' | 'twitch' | 'medium' | 'soundcloud' | 'stack-overflow' | 'gitlab' | 'angellist' | 'codepen' | 'weibo' | 'vk' | 'microsoft' | 'reddit';
export interface SocialIconProps extends InlinePressableProps {
    Component?: typeof React.Component;
    type?: SocialMediaType;
    button?: boolean;
    iconType?: string;
    iconStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    iconColor?: string;
    underlayColor?: string;
    title?: string;
    raised?: boolean;
    disabled?: boolean;
    loading?: boolean;
    activityIndicatorStyle?: StyleProp<ViewStyle>;
    small?: string;
    iconSize?: number;
    light?: boolean;
    fontWeight?: string;
    fontStyle?: StyleProp<TextStyle>;
    fontFamily?: string;
}
export declare const SocialIcon: RneFunctionComponent<SocialIconProps>;
