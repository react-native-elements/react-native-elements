import { AvatarBase, AvatarBaseProps } from './Avatar';
import { ThemedAccessory as Accessory, AccessoryProps } from './Accessory';
import { RneFunctionComponent } from '../helpers';
import { withTheme } from '../config';

export type AvatarProps = RneFunctionComponent<AvatarBaseProps> & {
  Accessory: typeof Accessory;
};

export { AvatarBase, Accessory };

export const Avatar: AvatarProps = Object.assign(AvatarBase);

export type { AccessoryProps };

const ThemedAvatar = Object.assign(withTheme(Avatar, 'Avatar'), {
  Accessory: Accessory,
});

export default ThemedAvatar;
