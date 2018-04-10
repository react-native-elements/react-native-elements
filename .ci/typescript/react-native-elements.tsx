import * as React from 'react';
import { StyleProp, TouchableHighlight, ViewStyle } from 'react-native';
import { Badge, Divider, Text } from '../../src/index';

const testViewStyle: StyleProp<ViewStyle> = {
  backgroundColor: 'pink',
};

const BadgeTest = () => (
  <React.Fragment>
    <Badge
      component={TouchableHighlight}
      wrapperStyle={testViewStyle}
      containerStyle={testViewStyle}
      textStyle={testViewStyle}
      value={12}
      onPress={() => null}
    />

    <Badge value="Hey" />

    <Badge>
      <Text />
    </Badge>
  </React.Fragment>
);

const DividerTest = () => <Divider style={testViewStyle} />;

const TextTest = () => (
  <Text h1 h2 h3 h4 fontFamily="papyrus" style={testViewStyle}>
    Hey!
  </Text>
);
