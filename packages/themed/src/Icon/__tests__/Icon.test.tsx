import React from 'react';
import Icon from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Icon component', () => {
  it('should apply values from theme', () => {
    const localTheme = {
      Icon: {
        size: 26,
      },
    };
    const { wrapper } = renderWithWrapper(
      <Icon name="edit" />,
      'RNE__ICON__Component',
      localTheme
    );
    expect(wrapper.props.style[0].fontSize).toBe(26);
  });
});
