import React from 'react';
import { Text } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { CreateThemeOptions, FullTheme } from '../../config';
import Overlay from '../index';

describe('Overlay', () => {
  it('should apply values from theme', () => {
    const theme: Partial<CreateThemeOptions> = {
      components: {
        Overlay: {
          backdropStyle: {
            backgroundColor: 'green',
          },
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
