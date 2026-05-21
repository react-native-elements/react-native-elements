import React from 'react';
import Input from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { CreateThemeOptions, FullTheme } from '../../config';
import { describe, it, expect } from '@jest/globals';

describe('Input component', () => {
  it('should apply values from theme', () => {
    const testTheme: Partial<CreateThemeOptions> = {
      components: {
        Input: {
          placeholder: 'Enter text',
        },
      },
    };
    const { queryByTestId } = renderWithWrapper(<Input />, '', testTheme);
    const component = queryByTestId('RNE__Input__text-input')!;
    expect(component.props.placeholder).toBe('Enter text');
  });
});
