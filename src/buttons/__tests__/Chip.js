import React from 'react';
import { Platform } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import theme from '../../config/theme';
import { Chip } from '../Chip';

describe('Chip Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Chip theme={theme} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should be call onPress events', () => {
    const onPress = jest.fn();
    console.log = jest.fn();
    const wrapper = shallow(
      <Chip theme={theme} testID="testChip" onPress={onPress} />
    );
    // Call our onPress
    wrapper.find({ testID: 'testChip' }).props().onPress();
    expect(onPress).toHaveBeenCalled();
  });

  it('should have ripple on android version 21 and higher', () => {
    Platform.OS = 'android';
    Platform.Version = 25;
    const wrapper = shallow(<Chip theme={theme} />);
    expect(wrapper.length).toBe(1);
    jest.resetModules();
  });

  it('should have normal ripple on android version 20 and lower', () => {
    Platform.OS = 'android';
    Platform.Version = 20;
    const wrapper = shallow(<Chip theme={theme} />);
    expect(wrapper.length).toBe(1);
    jest.resetModules();
  });

  describe('Chip Types', () => {
    describe('Solid', () => {
      it('should display solid button', () => {
        const component = shallow(<Chip theme={theme} title="Solid" />);
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('should display raised solid button', () => {
        const component = shallow(<Chip theme={theme} title="Solid" raised />);
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('should display solid button disabled', () => {
        const component = shallow(
          <Chip theme={theme} title="Solid" disabled />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });
    });

    describe('Outline', () => {
      it('should display outline button', () => {
        const component = shallow(
          <Chip theme={theme} title="Outline" type="outline" />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('should display raised outline button', () => {
        const component = shallow(
          <Chip theme={theme} title="Outline" type="outline" raised />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('should display outline button disabled', () => {
        const component = shallow(
          <Chip theme={theme} title="Outline" type="outline" disabled />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });
    });
  });
});
