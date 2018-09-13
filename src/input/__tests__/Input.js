import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import toJson from 'enzyme-to-json';
import Input from '../Input';

describe('Input component', () => {
  it('should match snapshot', () => {
    const component = shallow(<Input />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
  describe('containerStyle prop', () => {
    it('should match snapshot', () => {
      const component = shallow(<Input containerStyle={{ width: 200 }} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  describe('inputContainerStyle prop', () => {
    it('should match snapshot', () => {
      const component = shallow(<Input inputContainerStyle={{ width: 200 }} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  describe('inputStyle prop', () => {
    it('should match snapshot', () => {
      const component = shallow(<Input inputStyle={{ width: 200 }} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  describe('leftIcon prop', () => {
    it('should match snapshot', () => {
      const component = shallow(
        <Input leftIcon={{ type: 'feather', name: 'user' }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
    it('along with leftIconContainerStyle should match snapshot', () => {
      const component = shallow(
        <Input
          leftIcon={{ type: 'feather', name: 'user' }}
          leftIconContainerStyle={{ width: 200 }}
        />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  describe('rightIcon prop', () => {
    it('should match snapshot', () => {
      const component = shallow(
        <Input rightIcon={{ type: 'feather', name: 'user' }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
    it('along with rightIconContainerStyle should match snapshot', () => {
      const component = shallow(
        <Input
          rightIcon={{ type: 'feather', name: 'user' }}
          rightIconContainerStyle={{ width: 200 }}
        />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  describe('label prop', () => {
    it('should match snapshot', () => {
      const component = shallow(<Input label="My Label" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
    it('along with labelStyle should match snapshot', () => {
      const component = shallow(
        <Input label="My Label" labelStyle={{ width: 200 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  describe('errorMessage prop', () => {
    it('should match snapshot', () => {
      const component = shallow(<Input errorMessage="My Error Message" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
    it('along with errorStyle should match snapshot', () => {
      const component = shallow(
        <Input errorMessage="My Error Message" errorStyle={{ width: 200 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  describe('placeholder prop', () => {
    it('should match snapshot', () => {
      const component = shallow(<Input placeholder="My Placeholder" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  describe('inputComponent prop', () => {
    const CustomComponent = props => <View {...props}>Custom!</View>;
    it('should match snapshot', () => {
      const component = shallow(<Input inputComponent={CustomComponent} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
  // TextInput props
  describe('onTouch prop', () => {
    it('should properly call callback', () => {
      const onTouchSpy = jest.fn();
      const component = shallow(<Input onTouch={onTouchSpy} />);
      component.find('TextInput').simulate('touch');
      expect(onTouchSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('onFocus prop', () => {
    it('should properly call callback', () => {
      const onFocusSpy = jest.fn();
      const component = shallow(<Input onFocus={onFocusSpy} />);
      component.find('TextInput').simulate('focus');
      expect(onFocusSpy).toHaveBeenCalledTimes(1);
    });
  });
});
