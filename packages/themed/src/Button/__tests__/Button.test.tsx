import React from 'react';
import { ActivityIndicator } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config/theme';
import Button from '../index';

describe('Button Component', () => {
  it('should apply props from theme', () => {
    const testTheme: Partial<FullTheme> = {
      Button: {
        loading: true,
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
    const testTheme: Partial<FullTheme> = {
      Button: {
        title: 'Custom Button',
      },
    };
    const { queryByText } = renderWithWrapper(<Button />, '', testTheme);
    expect(queryByText(String(testTheme.Button.title))).toBeTruthy();
  });
});
