import React from 'react';
import Input from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('Input component', () => {
  it('should apply values from theme', () => {
    const testTheme: Partial<FullTheme> = {
      Input: {
        placeholder: 'Enter text',
      },
    };
    const { queryByTestId } = renderWithWrapper(<Input />, '', testTheme);
    const component = queryByTestId('RNE__Input__text-input');
    expect(component.props.placeholder).toBe(testTheme.Input.placeholder);
  });
});
