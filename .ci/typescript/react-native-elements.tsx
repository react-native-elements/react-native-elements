import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Button, Divider, Text } from '../../src/index';

const testViewStyle: StyleProp<ViewStyle> = {
  backgroundColor: 'pink',
};

const AvatarTest = () => <Button />;

const DividerTest = () => <Divider style={testViewStyle} />;

const TextTest = () => (
  <Text h1 h2 h3 h4 fontFamily="papyrus" style={testViewStyle}>
    Hey!
  </Text>
);
