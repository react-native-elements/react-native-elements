import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { fireEvent } from '@testing-library/react-native';
import { SpeedDial } from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { describe, it, expect, jest } from '@jest/globals';

describe('Speed Dial Component', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithWrapper(
      <SpeedDial
        isOpen={true}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => 'Add Something'}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => 'Delete Something'}
        />
      </SpeedDial>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('applies custom backdrop style and children', () => {
    const { getByTestId, getByText } = renderWithWrapper(
      <SpeedDial
        isOpen
        icon={{ name: 'edit', color: '#fff' }}
        backdropPressableProps={{
          testID: 'custom-backdrop',
          style: { backgroundColor: 'yellow' },
          children: <Text>Backdrop content</Text>,
        }}
      />
    );

    expect(
      StyleSheet.flatten(getByTestId('custom-backdrop').props.style)
    ).toEqual(expect.objectContaining({ backgroundColor: 'yellow' }));
    expect(getByText('Backdrop content')).toBeTruthy();
  });

  it('supports backdrop style and children render functions', () => {
    const { getByTestId, getByText } = renderWithWrapper(
      <SpeedDial
        isOpen
        icon={{ name: 'edit', color: '#fff' }}
        backdropPressableProps={{
          testID: 'custom-backdrop',
          style: ({ pressed }) => ({ opacity: pressed ? 0.5 : 0.75 }),
          children: ({ pressed }) => (
            <Text>{pressed ? 'Pressed backdrop' : 'Idle backdrop'}</Text>
          ),
        }}
      />
    );

    expect(
      StyleSheet.flatten(getByTestId('custom-backdrop').props.style)
    ).toEqual(expect.objectContaining({ opacity: 0.75 }));
    expect(getByText('Idle backdrop')).toBeTruthy();
  });

  it('calls both onClose and the custom backdrop onPress handler', () => {
    const onClose = jest.fn();
    const onBackdropPress = jest.fn();
    const pressEvent = { nativeEvent: { pageX: 10, pageY: 20 } };
    const { getByTestId } = renderWithWrapper(
      <SpeedDial
        isOpen
        icon={{ name: 'edit', color: '#fff' }}
        onClose={onClose}
        backdropPressableProps={{
          testID: 'custom-backdrop',
          onPress: onBackdropPress,
        }}
      />
    );

    fireEvent(getByTestId('custom-backdrop'), 'press', pressEvent);

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onBackdropPress).toHaveBeenCalledWith(pressEvent);
  });
});
