import React from 'react';
import Skeleton from '..';
import { StyleSheet } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('Skelton Component', () => {
  it('should apply props from theme', () => {
    const theme: Partial<FullTheme> = {
      Skeleton: {
        circle: true,
      },
    };
    const { wrapper } = renderWithWrapper(
      <Skeleton animation="none" />,
      'RNE__Skeleton',
      theme
    );
    expect(StyleSheet.flatten(wrapper.props.style)).toMatchObject({
      borderRadius: 50,
    });
  });
});
