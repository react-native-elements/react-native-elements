import { Avatar as AvatarBase, AvatarProps } from './Avatar';
import { Accessory, AccessoryProps } from './Avatar.Accessory';

const Avatar = Object.assign(AvatarBase, {
  Accessory,
});
export { Avatar, Accessory };

export type { AccessoryProps, AvatarProps };
