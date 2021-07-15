import React from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type SocialMediaType = 'facebook' | 'facebook-messenger' | 'whatsapp' | 'twitter' | 'google-plus-official' | 'google' | 'pinterest' | 'linkedin' | 'youtube' | 'vimeo' | 'tumblr' | 'instagram' | 'quora' | 'flickr' | 'foursquare' | 'wordpress' | 'stumbleupon' | 'github' | 'github-alt' | 'twitch' | 'medium' | 'soundcloud' | 'stack-overflow' | 'gitlab' | 'angellist' | 'codepen' | 'weibo' | 'vk' | 'microsoft';
export declare type SocialIconProps = {
    /** Type of button. */
    Component?: typeof React.Component;
    /** Social media type. */
    type?: SocialMediaType;
    /** Creates button with a social icon. */
    button?: boolean;
    /** Function to call when button/icon is pressed. */
    onPress?(): void;
    /** Function to call when pressed for a long time. */
    onLongPress?(): void;
    /** Type of icon set. [Supported sets here](./icon.md#available-icon-sets). */
    iconType?: string;
    /** Extra styling for icon component. */
    iconStyle?: StyleProp<ViewStyle>;
    /** Adds styling to the button. */
    style?: StyleProp<ViewStyle>;
    /** Specify the color of the icon. */
    iconColor?: string;
    /** Add Underlay color. */
    underlayColor?: string;
    /** Title if made into a button. */
    title?: string;
    /** Raised adds a drop shadow, set to false to remove. */
    raised?: boolean;
    /** Disables the button, if true. */
    disabled?: boolean;
    /** Shows loading indicator. */
    loading?: boolean;
    /** Style to render when in loading state. */
    activityIndicatorStyle?: StyleProp<ViewStyle>;
    /** Decides the size of the activity indicator. */
    small?: string;
    /** Specify the size of the icon. */
    iconSize?: number;
    /** Reverses icon color scheme, setting background to white and icon to primary color. */
    light?: boolean;
    /** Specify font weight of title if set as a button with a title. */
    fontWeight?: string;
    /** Specify text styling. */
    fontStyle?: StyleProp<TextStyle>;
    /** Specify different font family. */
    fontFamily?: string;
};
/** SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons. */
export declare const SocialIcon: RneFunctionComponent<SocialIconProps>;
