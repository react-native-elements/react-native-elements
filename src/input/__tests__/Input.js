/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import { View, TextInput, Image } from 'react-native';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedInput, { Input } from '../Input';

describe('Input component', () => {
  it('should match snapshot', () => {
    const component = shallow(<Input theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Props', () => {
    it('containerStyle', () => {
      const component = shallow(
        <Input theme={theme} containerStyle={{ width: 200 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('inputContainerStyle', () => {
      const component = shallow(
        <Input theme={theme} inputContainerStyle={{ width: 200 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('inputStyle', () => {
      const component = shallow(
        <Input theme={theme} inputStyle={{ width: 200 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    describe('leftIcon and styles', () => {
      it('leftIcon', () => {
        const component = shallow(
          <Input theme={theme} leftIcon={{ type: 'feather', name: 'user' }} />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('leftIconContainerStyle', () => {
        const component = shallow(
          <Input
            theme={theme}
            leftIcon={{ type: 'feather', name: 'user' }}
            leftIconContainerStyle={{ width: 200 }}
          />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });
    });

    describe('rightIcon and styles', () => {
      it('rightIcon', () => {
        const component = shallow(
          <Input theme={theme} rightIcon={{ type: 'feather', name: 'user' }} />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('rightIconContainerStyle', () => {
        const component = shallow(
          <Input
            theme={theme}
            rightIcon={{ type: 'feather', name: 'user' }}
            rightIconContainerStyle={{ width: 200 }}
          />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });
    });

    describe('label and styles', () => {
      it('label', () => {
        const component = shallow(<Input theme={theme} label="My Label" />);
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('labelStyle', () => {
        const component = shallow(
          <Input theme={theme} label="My Label" labelStyle={{ width: 200 }} />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('label as component', () => {
        const component = shallow(
          <Input
            theme={theme}
            label={<Image source={{ uri: 'http://google.com' }} />}
          />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });
    });

    describe('errorMessage and style', () => {
      it('errorMessage', () => {
        const component = shallow(
          <Input theme={theme} errorMessage="My Error Message" />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('errorStyle', () => {
        const component = shallow(
          <Input
            theme={theme}
            errorMessage="My Error Message"
            errorStyle={{ width: 200 }}
          />
        );
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });
    });

    it('placeholder', () => {
      const component = shallow(
        <Input theme={theme} placeholder="My Placeholder" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('inputComponent', () => {
      const CustomComponent = props => <View {...props}>Custom!</View>;

      const component = shallow(
        <Input theme={theme} inputComponent={CustomComponent} />
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

    it('should clear the input', () => {
      const clear = jest.fn();
      const component = shallow(<Input theme={theme} defaultValue="My Text" />);

      const instance = component.instance();

      // Refs not available in shallow render
      instance.input = {
        clear,
      };

      instance.clear();
      expect(clear).toHaveBeenCalledTimes(1);
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

    it('should call isFocused', () => {
      const isFocused = () => true;
      const component = shallow(<Input theme={theme} />);

      const instance = component.instance();

      // Refs not available in shallow render
      instance.input = {
        isFocused,
      };

      expect(instance.isFocused()).toBe(true);
    });

    it('should call setNativeProps', () => {
      const setNativeProps = jest.fn();
      const component = shallow(<Input theme={theme} />);

      const instance = component.instance();

      instance.input = {
        setNativeProps,
      };

      instance.setNativeProps({ text: '' });
      expect(setNativeProps).toHaveBeenCalledTimes(1);
    });

    it('should call shake', () => {
      console.error = jest.fn();
      const component = shallow(<Input theme={theme} />);

      jest.mock('Animated', () => ({
        timing: jest.fn(() => ({
          start: jest.fn(),
        })),
        Value: jest.fn(() => ({
          setValue: jest.fn(),
          interpolate: jest.fn(),
        })),
      }));

      const instance = component.instance();
      instance.shake();
      jest.dontMock('Animated');
    });
  });

  it('should apply values from theme', () => {
    const testTheme = {
      Input: {
        placeholder: 'Enter text',
      },
    };

    const component = create(
      <ThemeProvider theme={testTheme}>
        <ThemedInput />
      </ThemeProvider>
    );

    expect(component.root.findByType(TextInput).props.placeholder).toBe(
      'Enter text'
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
