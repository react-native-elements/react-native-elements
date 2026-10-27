import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { describe, expect, it, jest } from '@jest/globals';
import { renderWithWrapper, fireEvent } from '../../.ci/testHelper';
import { Image } from '../Image';
import { SpeedDial } from '../SpeedDial';
import { TabView } from '../TabView';
import { Tile } from '../Tile';

// RN 0.85 removed this alias. Keep the repository's older RN test setup,
// but exercise the components without the removed property.
jest.mock('react-native/Libraries/StyleSheet/StyleSheet', () => {
  const original = jest.requireActual(
    'react-native/Libraries/StyleSheet/StyleSheet'
  ) as { default: object };
  return {
    __esModule: true,
    ...original,
    default: { ...original.default, absoluteFillObject: undefined },
  };
});

const fill = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 };

describe('overlay layout without the removed StyleSheet alias', () => {
  it('keeps the image placeholder over the image', () => {
    const { wrapper } = renderWithWrapper(
      <Image source={{ uri: 'https://example.com/image.png' }} />
    );
    const placeholder = wrapper.findByType(Animated.View);
    expect(StyleSheet.flatten(placeholder.props.style)).toMatchObject(fill);
  });

  it('keeps the tab strip out of the flex row and preserves page widths', () => {
    const { getByTestId } = renderWithWrapper(
      <TabView value={1} disableTransition>
        <TabView.Item>
          <Text>First</Text>
        </TabView.Item>
        <TabView.Item>
          <Text>Second</Text>
        </TabView.Item>
        <TabView.Item>
          <Text>Third</Text>
        </TabView.Item>
      </TabView>
    );
    const strip = getByTestId('RNE__TabView');
    fireEvent(strip.parent!, 'layout', {
      nativeEvent: { layout: { width: 300, height: 200 } },
    });
    expect(
      StyleSheet.flatten(getByTestId('RNE__TabView').props.style)
    ).toMatchObject({
      ...fill,
      width: 900,
      transform: [{ translateX: -300 }],
    });
  });

  it('keeps the speed dial, backdrop, and overlay covering their parent', () => {
    const onClose = jest.fn();
    const { wrapper, getByTestId } = renderWithWrapper(
      <SpeedDial
        isOpen
        onClose={onClose}
        backdropPressableProps={{ testID: 'backdrop' }}
      >
        <SpeedDial.Action title="Action" />
      </SpeedDial>
    );
    const container = wrapper
      .findByType(View)
      .findByProps({ pointerEvents: 'box-none' });
    expect(StyleSheet.flatten(container.props.style)).toMatchObject(fill);
    const backdrop = getByTestId('backdrop');
    expect(StyleSheet.flatten(backdrop.props.style)).toMatchObject(fill);
    expect(
      StyleSheet.flatten(backdrop.findByType(Animated.View).props.style)
    ).toMatchObject(fill);
    fireEvent.press(backdrop);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('keeps the tile image filling the tile', () => {
    const { wrapper } = renderWithWrapper(
      <Tile imageSrc={{ uri: 'https://example.com/tile.png' }} />
    );
    expect(
      StyleSheet.flatten(wrapper.findByType(Image).props.style)
    ).toMatchObject(fill);
  });
});
