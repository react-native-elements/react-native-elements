import { Avatar } from './Avatar';
import { Accessory } from './Avatar.Accessory';
import { withTheme } from '../config';
const ThemedAccessory = withTheme(Accessory, 'Accessory');
const ThemedAvatar = Object.assign(withTheme(Avatar, 'Avatar'), {
    Accessory: ThemedAccessory,
});
export { Avatar, Accessory };
export default ThemedAvatar;
