import React from 'react';
import {shallow} from 'enzyme';
import FormInput from '../FormInput';

describe('FormInput Component', () => {
  it('should render without issues', () => {
    const component = shallow(<FormInput />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should have a TextInput component', () => {
    const component = shallow(<FormInput />);

    expect(component.find('TextInput').length).toBe(1)
  });

  it('should call onChangeText function on adding new value', () => {
    const customFunction = jest.fn();
    const component = shallow(<FormInput onChangeText={customFunction} />);
    component.find('TextInput').simulate('ChangeText', 'Text Change')

    expect(customFunction).toHaveBeenCalled();
  });
});
