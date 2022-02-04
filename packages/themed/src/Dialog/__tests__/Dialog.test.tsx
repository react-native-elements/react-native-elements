import React from 'react';
import Dialog from '..';
import { FullTheme } from '../..';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Dialog Component', () => {
  it.skip('should apply props from theme', () => {
    const theme: Partial<FullTheme> = {
      Dialog: {
        transparent: false,
      },
    };
    const { wrapper } = renderWithWrapper(
      <Dialog isVisible />,
      'Internal__Overlay',
      theme
    );
    expect(wrapper.props.transparent).toBeFalsy();
  });
});
