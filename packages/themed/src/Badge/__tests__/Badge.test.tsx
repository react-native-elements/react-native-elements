import React from 'react';
import Badge from '..';
import { Text } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Badge Component', () => {
  it('should use values set by the theme', () => {
    const testTheme = {
      Badge: {
        textStyle: { color: 'red' },
      },
    };
    const { wrapper } = renderWithWrapper(<Badge value="red" />, '', testTheme);
    expect(wrapper.findByType(Text).props.style).toMatchObject({
      color: 'red',
    });
  });
});
