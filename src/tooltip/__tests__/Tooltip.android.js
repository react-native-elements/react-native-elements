import React from 'react';
import { Modal, Text, TouchableOpacity } from 'react-native';
import { create } from 'react-test-renderer';

import { Tooltip } from '../Tooltip';

jest.mock('../../helpers', () => ({
  isIOS: false,
}));

describe('Tooltip component (Android)', () => {
  beforeAll(() => {
    // Hide console.warn error that shows from using .measure
    global.console.warn = () => null;
  });

  it('should trigger toggleTooltip', () => {
    const Info = () => <Text>Info here</Text>;
    const component = create(
      <Tooltip height={100} width={200} popover={<Info />}>
        <Text>Press me</Text>
      </Tooltip>
    );

    const modalComponent = component.root.findByType(Modal);

    component.root.findAllByType(TouchableOpacity)[0].props.onPress();
    expect(modalComponent.props.visible).toEqual(true);

    component.root.findAllByType(TouchableOpacity)[0].props.onPress();
    expect(modalComponent.props.visible).toEqual(false);
  });
});
