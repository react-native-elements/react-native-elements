import React from 'react';
import Divider from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('Divider Component', () => {
  it('should apply values from theme', () => {
    const theme: Partial<FullTheme> = {
      Divider: {
        style: {
          backgroundColor: 'red',
        },
      },
    };
    const { wrapper } = renderWithWrapper(<Divider />, 'RNE__Divider', theme);
    expect(wrapper.props.style).toMatchObject({ backgroundColor: 'red' });
  });
});
