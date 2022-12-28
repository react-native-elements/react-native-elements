import { info, usage, Stack } from '@rneui/doc-gen';
import React from 'react';
import { Text } from '..';

info('Text displays words and characters of various sizes.');

usage('Icon', '', () => (
  <Stack>
    <Text h1>Heading 1</Text>
    <Text h2>Heading 2</Text>
    <Text h3>Heading 3</Text>
    <Text h4>Heading 4</Text>
  </Stack>
));
