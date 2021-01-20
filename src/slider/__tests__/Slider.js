import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedSlider, { Slider } from '../Slider';

describe('Slider component', () => {
  it('should render without issues', () => {
    const component = shallow(<Slider />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with ThumbTouchRect', () => {
    const component = shallow(
      <Slider debugTouchArea minimumValue={0} maximumValue={100} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render vertically', () => {
    const component = shallow(<Slider orientation="vertical" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should pass down Thumb transform values', () => {
    const component = shallow(
      <Slider thumbStyle={{ transform: [{ scale: 2 }] }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should bound the max value', () => {
    const component = shallow(
      <Slider value={15} maximumValue={10} minimumValue={5} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should bound the min value', () => {
    const component = shallow(
      <Slider value={2} maximumValue={10} minimumValue={5} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onValueChange', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onValueChange={customFunction}
        allMeasured
      />
    );

    expect(component.props().value).toBe(20);
    component.simulate('ValueChange', 30);
    expect(customFunction).toHaveBeenCalledTimes(1);
  });

  it('should properly measure container size in horizontal orientation', () => {
    const component = shallow(
      <Slider orientation="horizontal" minimumValue={0} maximumValue={100} />
    );

    component.instance().handleMeasure('containerSize', {
      nativeEvent: {
        layout: {
          width: 320,
          height: 40,
        },
      },
    });

    // eslint-disable-next-line dot-notation
    expect(component.instance()['_containerSize']).toEqual({
      width: 320,
      height: 40,
    });
  });

  it('should properly measure container size in vertical orientation', () => {
    const component = shallow(
      <Slider orientation="vertical" minimumValue={0} maximumValue={100} />
    );

    component.instance().handleMeasure('containerSize', {
      nativeEvent: {
        layout: {
          width: 320,
          height: 40,
        },
      },
    });

    // eslint-disable-next-line dot-notation
    expect(component.instance()['_containerSize']).toEqual({
      width: 40,
      height: 320,
    });
  });

  it('handlePanResponderGrant should call onSlidingStart', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onSlidingStart={customFunction}
      />
    );

    component.instance().handlePanResponderGrant();
    expect(customFunction).toHaveBeenCalledTimes(1);
  });

  it('handlePanResponderEnd should call onSlidingComplete', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onSlidingComplete={customFunction}
      />
    );

    component.instance().handlePanResponderEnd({}, { dx: 10, dy: 0 });
    expect(customFunction).toHaveBeenCalledTimes(1);
  });

  it('handlePanResponderEnd should not call onSlidingComplete when slider is disabled', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onSlidingComplete={customFunction}
        disabled
      />
    );

    component.instance().handlePanResponderEnd({}, { dx: 10, dy: 0 });
    expect(customFunction).toHaveBeenCalledTimes(0);
  });

  it('handlePanResponderMove should call onValueChange', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onValueChange={customFunction}
      />
    );

    component.instance().handlePanResponderMove({}, { dx: 10, dy: 0 });
    expect(customFunction).toHaveBeenCalledTimes(1);
  });

  it('handlePanResponderMove should not call onValueChange when slider is disabled', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onValueChange={customFunction}
        disabled
      />
    );

    component.instance().handlePanResponderMove({}, { dx: 10, dy: 0 });
    expect(customFunction).toHaveBeenCalledTimes(0);
  });

  it('allMeasured flag is set when container, track and thumb sizes are measured', () => {
    const component = shallow(
      <Slider orientation="horizontal" minimumValue={0} maximumValue={100} />
    );

    component.instance().handleMeasure('containerSize', {
      nativeEvent: {
        layout: {
          width: 320,
          height: 40,
        },
      },
    });

    component.instance().handleMeasure('trackSize', {
      nativeEvent: {
        layout: {
          width: 300,
          height: 4,
        },
      },
    });

    component.instance().handleMeasure('thumbSize', {
      nativeEvent: {
        layout: {
          width: 10,
          height: 20,
        },
      },
    });

    expect(component.state().allMeasured).toBe(true);
  });

  it('handleStartShouldSetPanResponder activates when user presses down on the thumb', () => {
    const component = shallow(
      <Slider orientation="horizontal" minimumValue={0} maximumValue={100} />
    );

    component.instance().handleMeasure('containerSize', {
      nativeEvent: {
        layout: {
          width: 320,
          height: 40,
        },
      },
    });

    component.instance().handleMeasure('trackSize', {
      nativeEvent: {
        layout: {
          width: 300,
          height: 4,
        },
      },
    });

    component.instance().handleMeasure('thumbSize', {
      nativeEvent: {
        layout: {
          width: 10,
          height: 20,
        },
      },
    });

    const isActive = component.instance().handleStartShouldSetPanResponder({
      nativeEvent: { locationX: 0, locationY: 0 },
    });

    expect(isActive).toBe(true);
  });

  it('handleStartShouldSetPanResponder should call onValueChange with allowTouchTrack', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onValueChange={customFunction}
        allowTouchTrack
      />
    );

    component.instance().handleStartShouldSetPanResponder({
      nativeEvent: { locationX: 0, locationY: 0 },
    });
    expect(customFunction).toHaveBeenCalledTimes(1);
  });

  it('should apply values from theme', () => {
    const theme = {
      Slider: {
        thumbTintColor: 'blue',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedSlider
          value={20}
          minimumValue={0}
          maximumValue={100}
          allMeasured
        />
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'sliderThumb' }).props.style
    ).toMatchObject({
      backgroundColor: 'blue',
    });
    expect(component.toJSON).toMatchSnapshot();
  });

  it('should allow range selection', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider rangeSelection />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('handleStartShouldSetPanResponder should not call onValueChange with allowTouchTrack in range selection mode', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onValueChange={customFunction}
        allowTouchTrack
        rangeSelection
      />
    );

    component.instance().handleStartShouldSetPanResponder({
      nativeEvent: { locationX: 0, locationY: 0 },
    });
    expect(customFunction).toHaveBeenCalledTimes(0);
  });

  it('handleStartShouldSetPanResponder activates when user presses down on the thumb in range selection mode', () => {
    const component = shallow(
      <Slider orientation="horizontal" minimumValue={0} maximumValue={100} rangeSelection />
    );

    component.instance().handleMeasure('containerSize', {
      nativeEvent: {
        layout: {
          width: 320,
          height: 40,
        },
      },
    });

    component.instance().handleMeasure('trackSize', {
      nativeEvent: {
        layout: {
          width: 300,
          height: 4,
        },
      },
    });

    component.instance().handleMeasure('thumbSize', {
      nativeEvent: {
        layout: {
          width: 10,
          height: 20,
        },
      },
    });

    const isActive = component.instance().handleStartShouldSetPanResponder({
      nativeEvent: { locationX: 0, locationY: 0 },
    });

    expect(isActive).toBe(true);
  });

  it('handleStartShouldSetPanResponder activates when user presses down on the thumb in range selection mode', () => {
    const component = shallow(
      <Slider orientation="horizontal" minimumValue={0} maximumValue={100} rangeSelection />
    );

    component.instance().handleMeasure('containerSize', {
      nativeEvent: {
        layout: {
          width: 320,
          height: 40,
        },
      },
    });

    component.instance().handleMeasure('trackSize', {
      nativeEvent: {
        layout: {
          width: 300,
          height: 4,
        },
      },
    });

    component.instance().handleMeasure('thumbSize', {
      nativeEvent: {
        layout: {
          width: 10,
          height: 20,
        },
      },
    });

    const hitInLeftThumb = component.instance().handleStartShouldSetPanResponder({
      nativeEvent: { locationX: 0, locationY: 0 },
    });

    const hitInTheMiddle = component.instance().handleStartShouldSetPanResponder({
      nativeEvent: { locationX: 100, locationY: 0 },
    });

    const hitInRightThumb = component.instance().handleStartShouldSetPanResponder({
      nativeEvent: { locationX: 310, locationY: 0 },
    });

    expect(hitInLeftThumb).toBe(true);
    expect(hitInTheMiddle).toBe(false);
    expect(hitInRightThumb).toBe(true);
  });

  it('handlePanResponderMove should call onValueChange in range selection mode', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={{min: 20, max: 60}}
        minimumValue={0}
        maximumValue={100}
        rangeSelection
        onValueChange={customFunction}
      />
    );

    component.instance().handlePanResponderMove({}, { dx: 10, dy: 0 });
    expect(customFunction).toHaveBeenCalledTimes(1);
  });

  it('handlePanResponderMove should not call onValueChange when slider is disabled in range selection mode', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onValueChange={customFunction}
        rangeSelection
        disabled
      />
    );

    component.instance().handlePanResponderMove({}, { dx: 10, dy: 0 });
    expect(customFunction).toHaveBeenCalledTimes(0);
  });
});

it('updates minimum value properly in range selection mode', () => {
  function callback(value) {
    expect(value).toStrictEqual({min: 10, max: 100});
  }
  const component = shallow(
    <Slider orientation="horizontal" minimumValue={0} maximumValue={100} onValueChange={callback} rangeSelection />
  );

  component.instance().handleMeasure('containerSize', {
    nativeEvent: {
      layout: {
        width: 320,
        height: 40,
      },
    },
  });

  component.instance().handleMeasure('trackSize', {
    nativeEvent: {
      layout: {
        width: 300,
        height: 4,
      },
    },
  });

  component.instance().handleMeasure('thumbSize', {
    nativeEvent: {
      layout: {
        width: 10,
        height: 20,
      },
    },
  });

  component.instance().handleStartShouldSetPanResponder({ nativeEvent: { locationX: 0, locationY: 0 }});
  component.instance().handlePanResponderGrant();
  component.instance().handlePanResponderMove({}, { dx: 31, dy: 0 });
});

it('updates maximum value properly in range selection mode', () => {
  function callback(value) {
    expect(value).toStrictEqual({min: 0, max: 90});
  }
  const component = shallow(
    <Slider orientation="horizontal" minimumValue={0} maximumValue={100} onValueChange={callback} rangeSelection />
  );

  component.instance().handleMeasure('containerSize', {
    nativeEvent: {
      layout: {
        width: 320,
        height: 40,
      },
    },
  });

  component.instance().handleMeasure('trackSize', {
    nativeEvent: {
      layout: {
        width: 300,
        height: 4,
      },
    },
  });

  component.instance().handleMeasure('thumbSize', {
    nativeEvent: {
      layout: {
        width: 10,
        height: 20,
      },
    },
  });

  component.instance().handleStartShouldSetPanResponder({ nativeEvent: { locationX: 310, locationY: 0 }});
  component.instance().handlePanResponderGrant();
  component.instance().handlePanResponderMove({}, { dx: -31, dy: 0 });
});