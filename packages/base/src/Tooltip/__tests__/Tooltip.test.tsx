import React from 'react';
import Tooltip from '../index';
import { Text, Modal, Pressable } from 'react-native';
import { renderWithWrapper, fireEvent } from '../../../.ci/testHelper';

describe('Tooltip component', () => {
  it('should match snapshot', () => {
    const { queryByText, queryAllByText } = renderWithWrapper(
      <Tooltip popover={<Text>Info here</Text>}>
        <Text>Press me</Text>
      </Tooltip>
    );
    expect(queryByText('Info here')).toBeTruthy();
    expect(queryAllByText('Press me')).toBeTruthy();
  });

  it('should call onPress', () => {
    const openFn = jest.fn();
    const Info = () => <Text>Info here</Text>;
    const { wrapper, queryByTestId } = renderWithWrapper(
      <Tooltip height={100} onOpen={openFn} width={200} popover={<Info />}>
        <Text>Press me</Text>
      </Tooltip>
    );
    expect(queryByTestId('RNE__Tooltip_Triangle')).toBeTruthy();
    const tooltip = wrapper.findAllByType(Pressable)[0];
    fireEvent.press(tooltip);
    expect(openFn).toBeCalledTimes(1);
  });

  it('should display tooltip onLongPress', () => {
    const Info = () => <Text>Info here</Text>;
    const { wrapper } = renderWithWrapper(
      <Tooltip
        height={100}
        width={200}
        toggleAction="onLongPress"
        popover={<Info />}
      >
        <Text>Press me</Text>
      </Tooltip>
    );
    fireEvent(wrapper.findAllByType(Pressable)[0], 'onLongPress');
    expect(wrapper.findByType(Info)).toBeTruthy();
  });

  it('should not render pointer if tooltip is close', () => {
    const { queryByTestId } = renderWithWrapper(
      <Tooltip
        visible
        withPointer={false}
        height={100}
        width={200}
        popover={<Text>Info here</Text>}
      >
        <Text>Press me</Text>
      </Tooltip>
    );
    expect(queryByTestId('RNE__Tooltip_Triangle')).toBeNull();
  });

  it('should apply values from theme', () => {
    const theme = {
      Tooltip: {
        backgroundColor: 'pink',
      },
    };
    const Info = () => <Text>Info here</Text>;
    const { queryByTestId } = renderWithWrapper(
      <Tooltip height={100} width={200} popover={<Info />}>
        <Text>Press me</Text>
      </Tooltip>,
      '',
      theme
    );
    expect(
      queryByTestId('tooltipPopoverContainer').props.style.backgroundColor
    ).toBe('pink');
  });

  it('should return children for Falsy toggleOnPress', () => {
    const Info = () => <Text>Info here</Text>;
    const { wrapper } = renderWithWrapper(
      <Tooltip
        height={100}
        width={200}
        popover={<Info />}
        toggleOnPress={false}
      >
        <Text>Press me</Text>
      </Tooltip>
    );
    const tooltip = wrapper.findAllByType(Pressable)[0];
    fireEvent.press(tooltip);
    expect(wrapper.findByType(Info)).toBeTruthy();
  });

  it('should exhibit default tooltip toggle behavior when "closeOnlyOnBackdropPress" is false', () => {
    const fn = jest.fn();
    const Info = () => <Text>Info here</Text>;
    const { wrapper, toJSON } = renderWithWrapper(
      <Tooltip
        visible
        onClose={fn}
        height={100}
        width={200}
        popover={<Info />}
        closeOnlyOnBackdropPress={false}
      >
        <Text>Press me</Text>
      </Tooltip>
    );
    const modalComponent = wrapper.findByType(Modal);
    expect(modalComponent.props.visible).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
    // Check if tooltip hides when touching again anywhere
    const tooltip = wrapper.findAllByType(Pressable)[0];
    fireEvent.press(tooltip);
    expect(fn).toBeCalledTimes(1);
  });

  it('should close tooltip only when overlay backdrop is pressed if "closeOnlyOnBackdropPress" is true and if tooltip is visible', () => {
    const fn = jest.fn();
    const Info = () => <Text>Info here</Text>;
    const { queryByTestId } = renderWithWrapper(
      <Tooltip
        height={100}
        width={200}
        onClose={fn}
        popover={<Info />}
        closeOnlyOnBackdropPress={true}
      >
        <Text>Press me</Text>
      </Tooltip>
    );
    const tooltip = queryByTestId('tooltipTouchableHighlightedButton');
    fireEvent.press(tooltip);
    expect(fn).toBeCalledTimes(0); // 0 because tooltip is only closed by backdrop press
  });
});
