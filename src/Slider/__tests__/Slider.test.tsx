import React from 'react';
import { Slider } from '../index';
import { act, fireEvent, renderWithWrapper } from '../../../.ci/testHelper';

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

  it('should contain the required accessibility props', () => {
    const component = renderWithWrapper(
      <Slider value={15} maximumValue={10} minimumValue={5} />
    );
    const slider = component.getByRole('adjustable');
    expect(slider.props.accessibilityValue).toMatchObject({
      min: 5,
      max: 10,
      now: 10,
    });
  });

  it('should handle all onLayout actions', () => {
    const component = renderWithWrapper(<Slider />);
    fireEvent(component.getByTestId('RNE__Slider_Container'), 'layout', {
      nativeEvent: {
        layout: { height: 50, width: 300 },
      },
    });
    fireEvent(component.getByTestId('RNE__Slider_Thumb'), 'layout', {
      nativeEvent: {
        layout: { height: 100, width: 300 },
      },
    });
    fireEvent(component.getByTestId('RNE__Slider_Track_maximum'), 'layout', {
      nativeEvent: {
        layout: { height: 20, width: 20 },
      },
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should handle all onLayout actions with vertical orientation', () => {
    const component = renderWithWrapper(<Slider orientation="vertical" />);
    fireEvent(component.getByTestId('RNE__Slider_Container'), 'layout', {
      nativeEvent: {
        layout: { height: 50, width: 300 },
      },
    });
    fireEvent(component.getByTestId('RNE__Slider_Thumb'), 'layout', {
      nativeEvent: {
        layout: { height: 100, width: 300 },
      },
    });
    fireEvent(component.getByTestId('RNE__Slider_Track_maximum'), 'layout', {
      nativeEvent: {
        layout: { height: 20, width: 20 },
      },
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should support value changes', () => {
    const component = renderWithWrapper(
      <Slider value={1} maximumValue={10} minimumValue={1} />
    );

    component.rerender(<Slider value={5} maximumValue={10} minimumValue={1} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
