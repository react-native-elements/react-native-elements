import React from 'react';
import { ActivityIndicator } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { createTheme, CreateThemeOptions } from '../../config';
import { FullTheme } from '../../config/theme';
import Button from '../index';

describe('Button Component', () => {
  it('should apply props from theme', () => {
    const testTheme: Partial<CreateThemeOptions> = {
      components: {
        Button: {
          loading: true,
        },
      },
    };
    const { wrapper } = renderWithWrapper(
      <Button />,
      'RNE_BUTTON_WRAPPER',
      testTheme
    );
    expect(wrapper.findByType(ActivityIndicator)).toBeTruthy();
  });

  it('should apply title from theme', () => {
    const title = 'Custom Button';
    const testTheme = {
      components: {
        Button: {
          title,
        },
      },
    };
    const { queryByText } = renderWithWrapper(<Button />, '', testTheme);
    expect(queryByText(String(title))).toBeTruthy();
  });
});
