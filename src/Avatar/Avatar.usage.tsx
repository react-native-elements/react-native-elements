import React from 'react';
import { Avatar } from '..';
import { usage, Stack, info, meta } from '@rneui/doc-gen';

info(
  'Avatars are found all over ui design from lists to profile screens.',
  'They are commonly used to represent a user and can contain photos, icons, or even text.'
);

meta({
  name: 'Avatar',
});

usage('Shape', '', () => (
  <Stack row spacing={4}>
    <Avatar
      size={32}
      rounded
      icon={{ name: 'pencil', type: 'font-awesome' }}
      containerStyle={{ backgroundColor: '#9700b9' }}
    />
    <Avatar
      size={32}
      icon={{ name: 'pencil', type: 'font-awesome' }}
      containerStyle={{ backgroundColor: '#9700b9' }}
    />
  </Stack>
));

usage('Sizes', '', () => (
  <Stack row spacing={4}>
    <Avatar
      size={24}
      rounded
      icon={{ name: 'pencil', type: 'font-awesome' }}
      containerStyle={{ backgroundColor: '#9700b9' }}
    />
    <Avatar
      size={32}
      rounded
      icon={{ name: 'pencil', type: 'font-awesome' }}
      containerStyle={{ backgroundColor: '#9700b9' }}
    />
    <Avatar
      size={48}
      rounded
      icon={{ name: 'pencil', type: 'font-awesome' }}
      containerStyle={{ backgroundColor: '#9700b9' }}
    />
  </Stack>
));
usage('Image Avatar', '', () => (
  <Stack row spacing={4}>
    <Avatar
      size={32}
      rounded
      source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
    />
    <Avatar
      size={32}
      rounded
      source={{ uri: 'https://randomuser.me/api/portraits/men/35.jpg' }}
    />
  </Stack>
));

usage('Letter Avatar', '', () => (
  <Stack row spacing={4}>
    <Avatar
      size={32}
      rounded
      title="Rd"
      containerStyle={{ backgroundColor: 'blue' }}
    />
    <Avatar
      size={32}
      rounded
      title="AB"
      containerStyle={{ backgroundColor: 'purple' }}
    />
  </Stack>
));
