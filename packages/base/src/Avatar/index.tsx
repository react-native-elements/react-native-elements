import { Avatar, AvatarProps } from './Avatar';
import { Accessory, AccessoryProps } from './Avatar.Accessory';

const DefaultAvatar = Object.assign(Avatar, {
  Accessory,
});
export { DefaultAvatar as Avatar, Accessory };
export type { AccessoryProps, AvatarProps };
