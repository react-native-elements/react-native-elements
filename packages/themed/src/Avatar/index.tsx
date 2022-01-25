import {
  Avatar,
  AvatarProps,
} from '@react-native-elements/base/dist/Avatar/Avatar';
import {
  Accessory,
  AccessoryProps,
} from '@react-native-elements/base/dist/Avatar/Avatar.Accessory';
import { withTheme } from '../config';

export default Object.assign(withTheme<AvatarProps>(Avatar, 'Avatar'), {
  Accessory: withTheme<AccessoryProps>(Accessory, 'Accessory'),
});

export type { AccessoryProps, AvatarProps };
