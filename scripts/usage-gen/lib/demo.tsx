import React from 'react';
import { Button } from '@rneui/base/dist';
import { Stack, info, usage } from '../src/index';

info(
  'Buttons are touchable elements used to interact with the screen and to perform and operation.',
  'They may display text, icons, or both. Buttons can be styled with several props to look a specific way.'
);
usage('Variant', '', () => (
  <Stack row align="center" spacing={4}>
    <Button title="Solid" />
    <Button title="Outline" type="outline" />
    <Button title="Clear" type="clear" />
  </Stack>
));
usage('Variant', '', () => (
  <Stack row align="center" spacing={4}>
    <Button title="Solid" />
    <Button title="Outline" type="outline" />
    <Button title="Clear" type="clear" />
  </Stack>
));
