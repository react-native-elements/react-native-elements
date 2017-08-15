import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from '../Input';
import { getTheme } from '../../config/';

const options = {
  context: { theme: getTheme() },
  childContextTypes: { theme: PropTypes.object },
};

describe('Input Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Input />, options);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have a TextInput component', () => {
    const component = shallow(<Input />, options);

    expect(component.find('TextInput').length).toBe(1);
  });

  it('should call onChangeText function on adding new value', () => {
    const customFunction = jest.fn();
    const component = shallow(<Input onChangeText={customFunction} />, options);
    component.find('TextInput').simulate('ChangeText', 'Text Change');

    expect(customFunction).toHaveBeenCalled();
  });

  it('should call onFocus function', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Input
        onFocus={customFunction}
        containerStyle={{ backgroundColor: 'red' }}
        inputStyle={{ backgroundColor: 'red' }}
      />,
      options
    );
    component.find('TextInput').simulate('Focus');

    expect(customFunction).toHaveBeenCalledTimes(1);
  });
});
