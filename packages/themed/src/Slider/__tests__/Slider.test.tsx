import React from 'react';
import Slider from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../..';

describe('Slider component', () => {
  it('should apply values from theme', () => {
    const theme: Partial<FullTheme> = {
      Slider: {
        thumbTintColor: 'blue',
      },
    };
    const { wrapper } = renderWithWrapper(
      <Slider value={20} minimumValue={0} maximumValue={100} />,
      'RNE__Slider_Thumb',
      theme
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: 'blue',
    });
  });
});
