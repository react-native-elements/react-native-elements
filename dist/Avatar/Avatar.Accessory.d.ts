import { StyleProp, ViewStyle, ColorValue } from 'react-native';
import { ImageProps } from '../Image';
import { IconProps } from '../Icon';
import { RneFunctionComponent } from '../helpers';
export declare type AccessoryProps = Partial<IconProps> & Partial<ImageProps> & {
    /** Add underlay color to the accessory of avatar. */
    underlayColor?: ColorValue;
    /** Add custom styling to the accessory of avatar. */
    style?: StyleProp<ViewStyle>;
};
/** This is used for adding an accessory to the Avatar.
 * Receives either all [Icon](icon.md#props) or [Image](image.md#props) props. */
export declare const Accessory: RneFunctionComponent<AccessoryProps>;
