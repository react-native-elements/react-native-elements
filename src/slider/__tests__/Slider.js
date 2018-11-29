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
      <Slider debugTouchArea={true} minimumValue={0} maximumValue={100} />
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

  it('should call onValueChange', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onValueChange={customFunction}
        allMeasured={true}
      />
    );

    expect(component.props().value).toBe(20);
    component.simulate('ValueChange', 30);
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
          allMeasured={true}
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
});
