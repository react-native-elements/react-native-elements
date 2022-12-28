import React from 'react';
import { Button, Icon } from '..';
import { usage, Stack, info, meta } from '@rneui/doc-gen';

info(
  'Buttons are touchable elements used to interact with the screen and to perform and operation.',
  'They may display text, icons, or both. Buttons can be styled with several props to look a specific way.'
);

meta({
  name: 'Button',
});

usage(
  'Variants',
  'There are solid button, outline button and clear button types',
  () => (
    <Stack row align="center" spacing={4}>
      <Button title="Solid" />
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="clear" />
    </Stack>
  )
);

usage('Size', 'Button can be small medium or large', () => (
  <Stack row align="center" spacing={4}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </Stack>
));

usage('Colors', '', () => (
  <Stack row align="center" spacing={4}>
    <Button>Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
  </Stack>
));

usage('Disabled', '', () => (
  <Stack row align="center" spacing={4}>
    <Button title="Solid" disabled />
    <Button title="Outline" type="outline" disabled />
    <Button title="Clear" type="clear" disabled />
  </Stack>
));

usage('Linear Gradient', '', (LinearGradient) => (
  <Button
    ViewComponent={LinearGradient} // Don't forget this!
    linearGradientProps={{
      colors: ['#FF9800', '#F44336'],
      start: { x: 0, y: 0.5 },
      end: { x: 1, y: 0.5 },
    }}
  >
    Linear Gradient
  </Button>
));

usage(
  'Icon Button',
  'Can contain an Icon by setting the icon prop or placing an Icon component within the Button.',
  () => (
    <Button radius={'sm'} type="solid">
      Save
      <Icon name="save" color="white" />
    </Button>
  )
);

usage('Loading spinner', '', () => (
  <Button title="Solid" type="solid" loading />
));
