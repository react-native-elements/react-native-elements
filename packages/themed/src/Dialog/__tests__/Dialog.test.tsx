import React from 'react';
import Dialog from '..';
import { CreateThemeOptions } from '../..';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Dialog Component', () => {
  it('should apply props from theme', () => {
    const theme: Partial<CreateThemeOptions> = {
      components: {
        Dialog: {
          transparent: false,
        },
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
