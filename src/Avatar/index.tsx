import { AvatarBase, AvatarBaseProps } from './Avatar';
import { Accessory, AccessoryProps } from './Accessory';
import { RneFunctionComponent } from '../helpers';
import { withTheme } from '../config';

const ThemedAccessory = withTheme(Accessory, 'Accessory');

export type AvatarProps = RneFunctionComponent<AvatarBaseProps> & {
  Accessory: typeof ThemedAccessory;
};

export { AvatarBase, ThemedAccessory };

export const Avatar: AvatarProps = Object.assign(AvatarBase);

export type { AccessoryProps };

const ThemedAvatar = Object.assign(withTheme(Avatar, 'Avatar'), {
  Accessory: ThemedAccessory,
});

export default ThemedAvatar;
