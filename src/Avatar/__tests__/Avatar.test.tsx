import React from 'react';
import Avatar from '..';
import { Image } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { CreateThemeOptions, FullTheme } from '../../config';

describe('Avatar Component', () => {
  it('should apply values from theme', () => {
    const theme: Partial<CreateThemeOptions> = {
      components: {
        Avatar: {
          source: { uri: 'https://i.imgur.com/0y8Ftya.jpg' },
        },
      },
    };
    const { wrapper } = renderWithWrapper(<Avatar />, '', theme);
    expect(wrapper.findByType(Image).props.source.uri).toBe(
      'https://i.imgur.com/0y8Ftya.jpg'
    );
  });
});
