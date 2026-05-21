import { Stack, info, meta, usage } from '@rneui/doc-gen';
import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from '..';

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

usage(
  'Linear Gradient',
  'Requires an external library like expo-linear-gradient',
  (LinearGradient) => (
    <Stack row align="center" spacing={4}>
      <Button
        title="Linear Gradient"
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      />
    </Stack>
  )
);

usage(
  'Custom ViewComponent',
  'You can pass a custom component to the ViewComponent prop. This component will receive linearGradientProps as standard props.',
  () => {
    // Defining this INSIDE ensures it appears in the documentation source snippet
    const CustomBox = ({
      colors = ['#e1e1e1', '#ccc'],
      children,
      style,
      ...props
    }: any) => (
      <View
        {...props}
        style={[
          {
            backgroundColor: colors[0],
            borderColor: colors[1],
            borderWidth: 2,
            borderStyle: 'dashed',
          },
          style,
        ]}
      >
        {children}
      </View>
    );

    return (
      <Stack row align="center" spacing={4}>
        <Button
          title="Custom Component"
          ViewComponent={CustomBox}
          linearGradientProps={{
            colors: ['#3ff', '#33f'],
          }}
        />
      </Stack>
    );
  }
);

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
