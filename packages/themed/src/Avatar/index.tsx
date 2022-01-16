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

export default Object.assign(withTheme(Avatar, 'Avatar'), {
  Accessory: withTheme(Accessory, 'Accessory'),
});

const S = withTheme(Avatar, 'Avatar');
import React from 'react';

() => <S theme={{}} />;

export type { AccessoryProps, AvatarProps };
