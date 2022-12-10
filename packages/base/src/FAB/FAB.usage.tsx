import React from 'react';
import { FAB } from '..';
import { usage, Stack, info } from '@rneui/doc-gen';

info(
  'A floating action button (FAB) performs the primary, or most common, action on a screen.',
  'It appears in front of all screen content, typically as a circular shape with an icon in its center.'
);

usage('Variants', '', () => (
  <Stack row align="center" spacing={4}>
    <FAB
      size="small"
      icon={{
        name: 'place',
        color: 'white',
      }}
    />
    <FAB size="small" title="Solid" />
    <FAB
      size="small"
      title="Extended"
      icon={{
        name: 'place',
        color: 'white',
      }}
    />
  </Stack>
));
