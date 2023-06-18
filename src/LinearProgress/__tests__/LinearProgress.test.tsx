import React from 'react';
import { LinearProgress } from '../index';
import { renderWithWrapper, fireEvent, act } from '../../../.ci/testHelper';
import { clamp } from '../LinearProgress';

describe('LinearProgress Component', () => {
  it('should clamp', () => {
    expect(clamp(3)).toBe(1);
    expect(clamp(undefined)).toBe(0);
    expect(clamp(-1)).toBe(0);
    expect(clamp(0.6)).toBe(0.6);
  });
  it('should have apply color', () => {
    const { wrapper } = renderWithWrapper(
      <LinearProgress color="red" trackColor="blue" />,
      'RNE__LinearProgress_Bar'
    );
    expect(wrapper.props.style[0]).toMatchObject({
      height: 4,
      overflow: 'hidden',
      width: '100%',
      backgroundColor: 'blue',
      position: 'relative',
    });
  });

  it('should render determinant variant', () => {
    const component = renderWithWrapper(
      <LinearProgress variant={LinearProgress.DETERMINATE} value={0.4} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render inDeterminant variant', () => {
    const component = renderWithWrapper(
      <LinearProgress variant={LinearProgress.INDETERMINATE} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should default to determinant if value is provided', () => {
    const { wrapper } = renderWithWrapper(
      <LinearProgress value={0.4} />,
      'RNE__LinearProgress_Progress'
    );
    act(() => {
      fireEvent(wrapper, 'layout', {
        nativeEvent: {
          layout: {
            width: 300,
          },
        },
      });
    });
    expect(wrapper.props.style.transform[0].translateX).toBe(300 * -0.5);
  });

  it('should render determinant variant without animation', () => {
    const { wrapper } = renderWithWrapper(
      <LinearProgress
        variant={LinearProgress.DETERMINATE}
        value={0.4}
        animation={false}
      />,
      'RNE__LinearProgress_Progress'
    );
    act(() => {
      fireEvent(wrapper, 'layout', {
        nativeEvent: {
          layout: {
            width: 300,
          },
        },
      });
    });
    expect(wrapper.props.style).toMatchObject({
      width: 300 * 0.4,
    });
  });

  it('should contain the required accessibility properties', () => {
    const component = renderWithWrapper(<LinearProgress value={0.4} />);
    const progressBar = component.getByRole('progressbar');
    expect(progressBar.props).toMatchObject({
      accessibilityValue: {
        now: 0.4,
        min: 0,
        max: 1,
      },
    });
  });
});
