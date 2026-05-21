import React from 'react';
import Header from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { describe, it, expect } from '@jest/globals';

describe('Header Component', () => {
  it('should apply props from theme', () => {
    const { wrapper } = renderWithWrapper(<Header />, 'headerContainer', {
      components: {
        Header: {
          backgroundColor: 'pink',
        },
      },
    });
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: 'pink',
    });
  });
});
