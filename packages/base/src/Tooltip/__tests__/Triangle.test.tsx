import React from 'react';
import Triangle from '../components/Triangle';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Tooltip component', () => {
  it('should match snapshot ', () => {
    const { toJSON } = renderWithWrapper(<Triangle />, 'RNE__Tooltip_Triangle');
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render ', () => {
    const { wrapper } = renderWithWrapper(
      <Triangle pointerColor="red" />,
      'RNE__Tooltip_Triangle'
    );
    expect(wrapper.props.style.borderBottomColor).toBe('red');
  });

  it('should render without downward', () => {
    const { wrapper } = renderWithWrapper(
      <Triangle isDown />,
      'RNE__Tooltip_Triangle'
    );
    expect(wrapper.props.style.transform).toMatchObject([{ rotate: '180deg' }]);
  });
});
