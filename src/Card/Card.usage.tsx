import { info, meta, usage } from '@rneui/doc-gen';
import React from 'react';
import { Button, Card, Text } from '..';

info(
  'Cards are a great way to display information, usually containing content and actions about a single subject.',
  'Cards can contain images, buttons, text and more.',
  'Cards are mainly used for informative purpose.'
);

meta({
  name: 'Card',
});

usage('Default', '', () => (
  <Card>
    <Text>Word of the Day</Text>
    <Text h4>be-nev-o=lent</Text>
    <Text>adjective</Text>
    <Text>
      well meaning and kindly.
      <br />
      {'"a benevolent smile"'}
    </Text>
    <Button size="sm" type="clear">
      Learn More
    </Button>
  </Card>
));
