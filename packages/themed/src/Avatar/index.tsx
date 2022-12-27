import { Avatar, AvatarProps } from '@rneui/base/Avatar/Avatar';
import { Accessory, AccessoryProps } from '@rneui/base/Avatar/Avatar.Accessory';
import { withTheme } from '../config';

export default Object.assign(withTheme<AvatarProps>(Avatar, 'Avatar'), {
  Accessory: withTheme<AccessoryProps>(Accessory, 'AvatarAccessory'),
});

export type { AccessoryProps, AvatarProps };
