import React from 'react';
import Avatar from '..';
import { Image } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('Avatar Component', () => {
  jest.useFakeTimers('legacy');
  it('should match snapshot', () => {
    const { toJSON } = renderWithWrapper(
      <Avatar source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const theme: Partial<FullTheme> = {
      Avatar: {
        source: { uri: 'https://i.imgur.com/0y8Ftya.jpg' },
      },
    };
    const { wrapper } = renderWithWrapper(<Avatar />, '', theme);
    expect(wrapper.findByType(Image).props.source.uri).toBe(
      'https://i.imgur.com/0y8Ftya.jpg'
    );
  });
});
