import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Slider from '../Slider';

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
});
