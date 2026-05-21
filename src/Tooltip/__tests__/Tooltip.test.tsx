import React from 'react';
import { Tooltip } from '../index';
import { Text, Modal, Pressable } from 'react-native';
import { renderWithWrapper, fireEvent } from '../../../.ci/testHelper';
import { describe, it, expect, jest } from '@jest/globals';

describe('Tooltip component', () => {
  it('should match snapshot', () => {
    const { queryByText, queryAllByText } = renderWithWrapper(
      <Tooltip visible popover={<Text>Info here</Text>}>
        <Text>Press me</Text>
      </Tooltip>
    );
    expect(queryByText('Info here')).toBeTruthy();
    expect(queryAllByText('Press me')).toBeTruthy();
  });

  it('should call onPress', () => {
    const openFn = jest.fn();
    const Info = () => <Text>Info here</Text>;
    const { queryByText } = renderWithWrapper(
      <Tooltip height={100} onOpen={openFn} width={200} popover={<Info />}>
        <Text>Press me</Text>
      </Tooltip>
    );
    const pressableElement = queryByText('Press me');
    expect(pressableElement).toBeTruthy();
    fireEvent.press(pressableElement!);
    expect(openFn).toBeCalledTimes(1);
  });

  it('should display tooltip onLongPress', () => {
    const Info = () => <Text>Info here</Text>;
    const { getAllByText, queryByTestId } = renderWithWrapper(
      <Tooltip
        height={100}
        width={200}
        toggleAction="onLongPress"
        visible
        popover={<Info />}
      >
        <Text>Press me</Text>
      </Tooltip>
    );
    // Get first occurrence (the actual trigger, not the highlighted copy)
    const pressableElements = getAllByText('Press me');
    fireEvent(pressableElements[0], 'onLongPress');
    // Tooltip popover should be visible
    expect(queryByTestId('tooltipPopoverContainer')).toBeTruthy();
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

  it('should return children for Falsy toggleOnPress', () => {
    const Info = () => <Text>Info here</Text>;
    const { getAllByText, queryByTestId } = renderWithWrapper(
      <Tooltip
        height={100}
        width={200}
        visible
        popover={<Info />}
        toggleOnPress={false}
      >
        <Text>Press me</Text>
      </Tooltip>
    );
    // Get first occurrence (the actual trigger, not the highlighted copy)
    const pressableElements = getAllByText('Press me');
    fireEvent.press(pressableElements[0]);
    // Info should still be visible since toggleOnPress is false
    expect(queryByTestId('tooltipPopoverContainer')).toBeTruthy();
  });

  it('should exhibit default tooltip toggle behavior when "closeOnlyOnBackdropPress" is false', () => {
    const fn = jest.fn();
    const Info = () => <Text>Info here</Text>;
    const { getAllByText, toJSON } = renderWithWrapper(
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
    expect(toJSON()).toMatchSnapshot();
    // Check if tooltip hides when touching again anywhere
    // Get first occurrence (the actual trigger, not the highlighted copy)
    const pressableElements = getAllByText('Press me');
    fireEvent.press(pressableElements[0]);
    expect(fn).toBeCalledTimes(1);
  });

  it('should close tooltip only when overlay backdrop is pressed if "closeOnlyOnBackdropPress" is true and if tooltip is visible', () => {
    const fn = jest.fn();
    const Info = () => <Text>Info here</Text>;
    const { queryByTestId, debug } = renderWithWrapper(
      <Tooltip
        ModalComponent={Modal}
        height={100}
        visible
        width={200}
        onClose={fn}
        popover={<Info />}
        closeOnlyOnBackdropPress={true}
      >
        <Text>Press me</Text>
      </Tooltip>
    );

    const tooltip = queryByTestId('tooltipTouchableHighlightedButton')!;

    fireEvent.press(tooltip);
    expect(fn).toBeCalledTimes(1);
  });
});
