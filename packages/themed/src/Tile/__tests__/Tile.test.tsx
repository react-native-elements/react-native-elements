import React from 'react';
import Tile from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Text } from 'react-native';

describe('Tile component', () => {
  it('should render', () => {
    const { toJSON } = renderWithWrapper(
      <Tile imageSrc={{ uri: 'http://google.com' }} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should apply styles from theme', () => {
    const theme = {
      Tile: {
        title: 'Mary is friendly',
      },
    };
    const { wrapper } = renderWithWrapper(
      <Tile imageSrc={{ uri: 'http://google.com' }} activeOpacity={0.9} />,
      '',
      { components: theme }
    );
    expect(wrapper.findByType(Text).props.children).toBe('Mary is friendly');
  });
});
