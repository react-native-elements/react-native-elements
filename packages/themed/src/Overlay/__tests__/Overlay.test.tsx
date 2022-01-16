import React from 'react';
import { Text } from 'react-native';
import { renderWithWrapper, fireEvent } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';
import Overlay from '../index';

describe('Overlay', () => {
  it.skip('', () => {
    const { queryByText } = renderWithWrapper(
      <Overlay isVisible>
        <Text>Overlay</Text>
      </Overlay>
    );
    expect(queryByText('Overlay')).not.toBeNull();
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Overlay isVisible fullScreen>
        <Text>I'm in an Overlay</Text>
      </Overlay>,
      'RNE__Overlay'
    );
    expect(wrapper.props.style).toMatchObject({
      width: '100%',
      height: '100%',
    });
  });

  it.skip('', () => {
    const onBackdropPress = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Overlay isVisible onBackdropPress={onBackdropPress}>
        <Text>I'm in an Overlay</Text>
      </Overlay>,
      'RNE__Overlay__backdrop'
    );
    fireEvent.press(wrapper);
    expect(onBackdropPress).toHaveBeenCalled();
  });

  it('should apply values from theme', () => {
    const theme: Partial<FullTheme> = {
      Overlay: {
        backdropStyle: {
          backgroundColor: 'green',
        },
      },
    };
    const { wrapper } = renderWithWrapper(
      <Overlay isVisible>
        <Text>I'm in an Overlay</Text>
      </Overlay>,
      'RNE__Overlay__backdrop',
      theme
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: 'green',
    });
  });
});
