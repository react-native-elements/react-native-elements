import React from 'react';
import Slider from '../index';
import { act, fireEvent, renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../..';

describe('Slider component', () => {
  it('should match snapshot', () => {
    const component = renderWithWrapper(<Slider />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with ThumbTouchRect', () => {
    const component = renderWithWrapper(
      <Slider debugTouchArea minimumValue={0} maximumValue={100} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render vertically', () => {
    const component = renderWithWrapper(<Slider orientation="vertical" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should pass down Thumb transform values', () => {
    const { wrapper } = renderWithWrapper(
      <Slider thumbStyle={{ transform: [{ scale: 2 }] }} />,
      'RNE__Slider_Thumb'
    );
    expect(wrapper.props.style).toMatchObject({ transform: [{ scale: 2 }] });
  });

  it('should bound the max value', () => {
    const { queryByRole, wrapper: thumb } = renderWithWrapper(
      <Slider value={15} maximumValue={10} minimumValue={5} />,
      'RNE__Slider_Thumb'
    );
    const slider = queryByRole('adjustable');
    act(() => {
      fireEvent(slider, 'layout', {
        nativeEvent: {
          layout: {
            width: 300,
          },
        },
      });
    });
    expect(thumb.props.style).toMatchObject({
      // width is 300, so thumb should not go above 300
      transform: [{ translateX: 300 }],
    });
  });

  it('should bound the min value', () => {
    const { queryByRole, wrapper: thumb } = renderWithWrapper(
      <Slider value={1} maximumValue={10} minimumValue={5} />,
      'RNE__Slider_Thumb'
    );
    const slider = queryByRole('adjustable');
    act(() => {
      fireEvent(slider, 'layout', {
        nativeEvent: {
          layout: {
            width: 300,
          },
        },
      });
    });
    expect(thumb.props.style).toMatchObject({
      // thumb should not go below 0
      transform: [{ translateX: 0 }],
    });
  });

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

  it('should contain the required accessibility props', () => {
    const component = renderWithWrapper(
      <Slider value={15} maximumValue={10} minimumValue={5} />
    );
    const slider = component.getByA11yRole('adjustable');
    expect(slider.props.accessibilityValue).toMatchObject({
      min: 5,
      max: 10,
      now: 15,
    });
  });
});
