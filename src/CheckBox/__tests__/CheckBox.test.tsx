import React from 'react';
import CheckBox from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { CreateThemeOptions, FullTheme } from '../../config';

describe('CheckBox Component', () => {
  it('should use values from theme', () => {
    const testTheme: Partial<CreateThemeOptions> = {
      components: {
        CheckBox: {
          title: 'George is Cool',
        },
      },
    };
    const { wrapper } = renderWithWrapper(
      <CheckBox checked />,
      'RNE__CheckBox__Title',
      testTheme
    );
    expect(wrapper.props.children).toBe('George is Cool');
  });
});
