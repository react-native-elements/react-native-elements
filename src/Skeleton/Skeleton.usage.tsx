import React from 'react';
import { Skeleton } from '..';
import { Stack, usage, info } from '@rneui/doc-gen';

info(
  'A placeholder preview for content before the data gets loaded, an alternative for spinners.'
);

usage(
  'Variants',
  'The component supports 2 shape variants, i.e. `circle`, `rectangle`.',
  () => (
    <Stack row align="center" spacing={4}>
      <Skeleton width={120} height={40} />
      <Skeleton circle width={40} height={40} />
    </Stack>
  )
);

usage(
  'Animations',
  'By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely.',
  (LinearGradient) => (
    <Stack row align="center" spacing={4}>
      <Skeleton animation="pulse" width={80} height={40} />
      <Skeleton
        LinearGradientComponent={LinearGradient}
        animation="wave"
        width={80}
        height={40}
      />
      <Skeleton animation="none" width={80} height={40} />
    </Stack>
  )
);
