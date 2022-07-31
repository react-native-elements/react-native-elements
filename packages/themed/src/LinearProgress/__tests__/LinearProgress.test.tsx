import React from 'react';
import LinearProgress from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { CreateThemeOptions, FullTheme } from '../../config';

describe('LinearProgress Component', () => {
  it('should apply props from theme', () => {
    const theme: Partial<CreateThemeOptions> = {
      components: {
        LinearProgress: {
          color: 'rgb(255, 0, 0)',
        },
      },
    };
    const { wrapper } = renderWithWrapper(
      <LinearProgress animation={false} />,
      'RNE__LinearProgress_Progress',
      theme
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: 'rgb(255, 0, 0)',
    });
  });
});
