import React from 'react';
import Switch from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('Switch Component', () => {
  it('should apply from theme', () => {
    const theme: Partial<FullTheme> = {
      Switch: {
        color: 'purple',
      },
    };
    const { wrapper } = renderWithWrapper(<Switch />, 'RNE__SWITCH', theme);
    expect(wrapper.props).toMatchObject({
      onTintColor: 'purple',
    });
  });
});
