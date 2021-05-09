import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import theme from '../../config/theme';
import { FloatingTextInput } from '../FloatingTextInput';
import { Input } from '../Input';

describe('Input component', () => {
  beforeAll(() => {
    // useNativeDriver isn't available in jest, so just silencing the warning
    global.console.warn = () => null;
  });

  it('should match snapshot', () => {
    const component = shallow(<FloatingTextInput theme={theme} />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Props', () => {
    it('attrName', () => {
      const component = shallow(
        <FloatingTextInput theme={theme} attrName="My Attribute Name" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('title', () => {
      const component = shallow(
        <FloatingTextInput theme={theme} title="My Title Name" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('value', () => {
      const component = shallow(
        <FloatingTextInput theme={theme} title="My Title Name" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('titleActiveSize', () => {
      const component = shallow(<FloatingTextInput titleActiveSize={14} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('titleInActiveSize', () => {
      const component = shallow(<FloatingTextInput titleInActiveSize={19} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('titleActiveColor', () => {
      const component = shallow(
        <FloatingTextInput theme={theme} titleActiveColor="blue" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('titleInActiveColor', () => {
      const component = shallow(
        <FloatingTextInput theme={theme} titleInActiveColor="dimgrey" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('Instance methods', () => {
    it('should focus the input', () => {
      const focus = jest.fn();
      const component = shallow(<Input theme={theme} />);
      const instance = component.instance();
      // Refs not available in shallow render
      instance.input = {
        focus,
      };
      instance.focus();
      expect(focus).toHaveBeenCalledTimes(1);
    });

    it('should blur the input', () => {
      const blur = jest.fn();
      const component = shallow(<Input theme={theme} />);
      const instance = component.instance();
      // Refs not available in shallow render
      instance.input = {
        blur,
      };
      instance.blur();
      expect(blur).toHaveBeenCalledTimes(1);
    });
  });

  // it('should apply values from theme', () => {
  //   const testTheme = {
  //     FloatingInput: {
  //       placeholder: 'Enter text',
  //     },
  //   };
  //   const component = create(
  //     <ThemeProvider theme={testTheme}>
  //       <ThemedFloatingTextInput />
  //     </ThemeProvider>
  //   );
  //   expect(component.root.findByType(TextInput).props.placeholder).toBe(
  //     'Enter text'
  //   );
  //   expect(component.toJSON()).toMatchSnapshot();
  // });
});
