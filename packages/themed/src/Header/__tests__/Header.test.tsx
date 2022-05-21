import React from 'react';
import Header from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Header Component', () => {
  it('should apply props from theme', () => {
    const testTheme = {
      Header: {
        backgroundColor: 'pink',
      },
    };
    const { wrapper } = renderWithWrapper(
      <Header />,
      'headerContainer',
      testTheme
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: 'pink',
    });
  });
});
