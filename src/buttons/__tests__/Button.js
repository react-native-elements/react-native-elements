/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../Button';

describe('Button Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Button />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should be call onPress events', () => {
    const onPress = jest.fn();
    console.log = jest.fn();
    const wrapper = shallow(<Button />);

    // Call default onPress
    wrapper
      .find('TouchableOpacity')
      .props()
      .onPress();

    expect(console.log.mock.calls[0][0]).toBe(
      `Please attach a method to this component`
    );

    wrapper.setProps({ onPress });

    // Call our custom onPress
    wrapper
      .find('TouchableOpacity')
      .props()
      .onPress();

    expect(onPress).toBeCalled();
  });

  it('should have ripple on android version 21 and higher', () => {
    jest.mock('Platform', () => ({
      OS: 'android',
      Version: 25,
    }));

    const wrapper = shallow(<Button />);
    expect(wrapper.length).toBe(1);
    jest.resetModules();
  });

  it('should have normal ripple on android version 20 and lower', () => {
    jest.mock('Platform', () => ({
      OS: 'android',
      Version: 20,
    }));

    const wrapper = shallow(<Button />);
    expect(wrapper.length).toBe(1);
    jest.resetModules();
  });

  it('should warn the user when using linearGradient without it installed', () => {
    console.error = jest.fn();
    shallow(
      <Button
        linearGradientProps={{ colors: ['#4c669f', '#3b5998', '#192f6a'] }}
      />
    );

    expect(console.error.mock.calls[0][0]).toBe(
      `You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}`
    );
  });
});
