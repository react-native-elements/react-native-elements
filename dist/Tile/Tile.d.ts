import React from 'react';
import { TouchableOpacityProps, TouchableNativeFeedbackProps, ViewStyle, StyleProp, TextStyle, ImageProps, ImageSourcePropType } from 'react-native';
import { IconObject, IconProps } from '../Icon';
import { RneFunctionComponent } from '../helpers';
export declare type TileProps = TouchableOpacityProps & TouchableNativeFeedbackProps & {
    /** Text inside the tile. */
    title?: string;
    /** Icon Component Props. */
    icon?: IconObject & IconProps;
    /** Text inside the tilt when tile is featured. */
    caption?: React.ReactNode;
    /** Source for the image. */
    imageSrc?: ImageSourcePropType | string | number;
    /** Number passed to control opacity on press. */
    activeOpacity?: number;
    /** Styling for the outer tile container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Styling for the image. */
    imageContainerStyle?: StyleProp<ViewStyle>;
    /** Styling for the outer icon container. */
    iconContainerStyle?: StyleProp<ViewStyle>;
    /** Styling for the overlay container when using featured tile. */
    overlayContainerStyle?: StyleProp<ViewStyle>;
    /** Styling for the title. */
    titleStyle?: StyleProp<TextStyle>;
    /** Styling for the caption (optional); You only use this if `caption` is a string. */
    captionStyle?: StyleProp<TextStyle>;
    /** Width for the tile. */
    width?: number;
    /** Height for the tile. */
    height?: number;
    /** Changes the look of the tile. */
    featured?: boolean;
    /** Styling for bottom container when not featured tile. */
    contentContainerStyle?: StyleProp<ViewStyle>;
    /** Number of lines for Title. */
    titleNumberOfLines?: number;
    /** Optional properties to pass to the image if provided e.g "resizeMode". */
    imageProps?: Partial<ImageProps>;
    /** Custom ImageComponent for Tile. */
    ImageComponent?: typeof React.Component;
};
/** Tiles like Cards, are a convenient way to display related content about a single subject.
 * Also receives all [TouchableNativeFeedback](http://reactnative.dev/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://reactnative.dev/docs/touchableopacity.html#props) (iOS) props. */
export declare const Tile: RneFunctionComponent<TileProps>;
