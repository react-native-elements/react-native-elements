import * as React from 'react';
import { StyleProp, TouchableHighlight, ViewStyle } from 'react-native';
import { Badge, Divider, Overlay, PricingCard, Text } from '../../src/index';

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

const OverlayTest = () => (
  <Overlay
    isVisible
    windowBackgroundColor="rgba(255, 255, 255, .5)"
    overlayBackgroundColor="red"
    width="auto"
    height="auto"
    borderRadius={2}
    containerStyle={testViewStyle}
    fullScreen
    overlayStyle={testViewStyle}
  >
    <Text>Hello from Overlay!</Text>
  </Overlay>
);

const PricingCardTest = () => (
  <PricingCard
    color="#4f9deb"
    title="Free"
    price="$0"
    info={['1 User', 'Basic Support', 'All Core Features']}
    button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
    buttonFont="somefont"
    infoFont="somefont"
    titleFont="somefont"
    containerStyle={testViewStyle}
    wrapperStyle={testViewStyle}
    onButtonPress={() => null}
  />
);

const TextTest = () => (
  <Text h1 h2 h3 h4 fontFamily="papyrus" style={testViewStyle}>
    Hey!
  </Text>
);
