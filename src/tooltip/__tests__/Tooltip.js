import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedTooltip, { Tooltip } from '../Tooltip';
import Triangle from '../Triangle';

describe('Tooltip component', () => {
  it('should render without issues', () => {
    const component = create(
      <Tooltip popover={<Text>Info here</Text>}>
        <Text>Press me</Text>
      </Tooltip>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should display tooltip', () => {
    const Info = () => <Text>Info here</Text>;
    const component = create(
      <Tooltip height={100} width={200} popover={<Info />}>
        <Text>Press me</Text>
      </Tooltip>
    );

    component.root.findAllByType(TouchableOpacity)[0].props.onPress();
    expect(component.root.findByType(Triangle)).toBeTruthy();
    expect(component.root.findByType(Info)).toBeTruthy();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('does not render pointer', () => {
    const component = create(
      <Tooltip
        withPointer={false}
        height={100}
        width={200}
        popover={<Text>Info here</Text>}
      >
        <Text>Press me</Text>
      </Tooltip>
    ).root;

    component.findAllByType(TouchableOpacity)[0].props.onPress();
    expect(component.instance.state.isVisible).toBe(true);
    try {
      component.findByType(Triangle);
    } catch (e) {
      expect(e.message).toBe('No instances found with node type: "Triangle"');
    }
  });

  it('should apply values from theme', () => {
    const theme = {
      Tooltip: {
        backgroundColor: 'pink',
      },
    };

    const Info = () => <Text>Info here</Text>;

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedTooltip height={100} width={200} popover={<Info />}>
          <Text>Press me</Text>
        </ThemedTooltip>
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'tooltipPopoverContainer' }).props
        .style.backgroundColor
    ).toBe('pink');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
