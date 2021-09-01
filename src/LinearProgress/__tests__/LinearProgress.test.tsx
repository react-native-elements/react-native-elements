import React from 'react';
import LinearProgress from '../index';
import { renderWithWrapper, fireEvent, act } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('LinearProgress Component', () => {
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
    const progressBar = component.getByA11yRole('progressbar');
    expect(progressBar.props).toMatchObject({
      accessibilityValue: {
        now: 0.4,
        min: 0,
        max: 1,
      },
    });
  });

  it('should apply props from theme', () => {
    const theme: Partial<FullTheme> = {
      LinearProgress: {
        color: 'rgb(255, 0, 0)',
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
