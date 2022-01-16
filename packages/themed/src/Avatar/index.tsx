import {
  Avatar,
  AvatarProps,
} from '@react-native-elements/base/dist/Avatar/Avatar';
import {
  Accessory,
  AccessoryProps,
} from '@react-native-elements/base/dist/Avatar/Avatar.Accessory';
import { withTheme } from '../config';
import {} from '../helpers';

export default Object.assign(withTheme<AvatarProps>(Avatar, 'Avatar'), {
  Accessory: withTheme<AccessoryProps>(Accessory, 'Accessory'),
});

export type { AccessoryProps, AvatarProps };
