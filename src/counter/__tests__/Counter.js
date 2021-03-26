import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Counter } from '../counter';

describe('Counter Component', () => {
  it('should render without issues', () => {
    const onValueChange = jest.fn();
    const component = shallow(
      <Counter initialValue={0} onValueChange={onValueChange} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have default onPress event of increment button', () => {
    const onValueChange = jest.fn();
    const wrapper = shallow(
      <Counter initialValue={0} onValueChange={onValueChange} />
    );
    wrapper.find({ testID: 'counterIncButton' }).at(0).simulate('press');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have default onPress event of decrement button', () => {
    const onValueChange = jest.fn();
    const wrapper = shallow(
      <Counter initialValue={2} onValueChange={onValueChange} />
    );
    wrapper.find({ testID: 'counterDecButton' }).at(0).simulate('press');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have default onPress event of decrement button and max less than value', () => {
    const onValueChange = jest.fn();
    const wrapper = shallow(
      <Counter initialValue={2} max={1} onValueChange={onValueChange} />
    );
    wrapper.find({ testID: 'counterIncButton' }).at(0).simulate('press');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have default onPress event of decrement button and min greater than value', () => {
    const onValueChange = jest.fn();
    const wrapper = shallow(
      <Counter initialValue={1} min={2} onValueChange={onValueChange} />
    );
    wrapper.find({ testID: 'counterDecButton' }).at(0).simulate('press');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with optional styles', () => {
    const onValueChange = jest.fn();
    const component = shallow(
      <Counter
        initialValue={0}
        onValueChange={onValueChange}
        buttonStyle={{ backgroundColor: 'black' }}
        textStyle={{ fontSize: 20 }}
        buttonTitleStyle={{ fontSize: 20 }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without onValueChange', () => {
    const component = shallow(<Counter initialValue={0} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with min max values', () => {
    const onValueChange = jest.fn();
    const component = shallow(
      <Counter initialValue={0} onValueChange={onValueChange} min={0} max={5} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without min max values', () => {
    const onValueChange = jest.fn();
    const component = shallow(
      <Counter initialValue={0} onValueChange={onValueChange} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
