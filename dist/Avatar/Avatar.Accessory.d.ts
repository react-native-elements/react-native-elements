import { StyleProp, ViewStyle, ColorValue } from 'react-native';
import { ImageProps } from '../Image';
import { IconProps } from '../Icon';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
export declare type AccessoryProps = Partial<IconProps> & Partial<ImageProps> & {
    /** Add underlay color to the accessory of avatar. */
    underlayColor?: ColorValue;
    /** Add custom styling to the accessory of avatar. */
    style?: StyleProp<ViewStyle>;
} & InlinePressableProps;
/** This is used for adding an accessory to the Avatar.
 * Receives either all [Icon](icon#props) or [Image](image#props) props. */
export declare const Accessory: RneFunctionComponent<AccessoryProps>;
