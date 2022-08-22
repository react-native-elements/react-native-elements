import React from 'react';
import Switch from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { CreateThemeOptions, FullTheme } from '../../config';

describe('Switch Component', () => {
  it('should apply from theme', () => {
    const theme: Partial<CreateThemeOptions> = {
      components: {
        Switch: {
          color: 'purple',
        },
      },
    };
    const { wrapper } = renderWithWrapper(<Switch />, 'RNE__SWITCH', theme);
    expect(wrapper.props).toMatchObject({
      onTintColor: 'purple',
    });
  });
});
