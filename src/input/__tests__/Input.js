import React from 'react';
import { shallow } from 'enzyme';
import { View, TextInput } from 'react-native';
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

  describe('containerStyle prop', () => {
    it('should match snapshot', () => {
      const component = shallow(
        <Input theme={theme} containerStyle={{ width: 200 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('inputContainerStyle prop', () => {
    it('should match snapshot', () => {
      const component = shallow(
        <Input theme={theme} inputContainerStyle={{ width: 200 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('inputStyle prop', () => {
    it('should match snapshot', () => {
      const component = shallow(
        <Input theme={theme} inputStyle={{ width: 200 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('leftIcon prop', () => {
    it('should match snapshot', () => {
      const component = shallow(
        <Input theme={theme} leftIcon={{ type: 'feather', name: 'user' }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('along with leftIconContainerStyle should match snapshot', () => {
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

  describe('rightIcon prop', () => {
    it('should match snapshot', () => {
      const component = shallow(
        <Input theme={theme} rightIcon={{ type: 'feather', name: 'user' }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('along with rightIconContainerStyle should match snapshot', () => {
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

  describe('label prop', () => {
    it('should match snapshot', () => {
      const component = shallow(<Input theme={theme} label="My Label" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('along with labelStyle should match snapshot', () => {
      const component = shallow(
        <Input theme={theme} label="My Label" labelStyle={{ width: 200 }} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('errorMessage prop', () => {
    it('should match snapshot', () => {
      const component = shallow(
        <Input theme={theme} errorMessage="My Error Message" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('along with errorStyle should match snapshot', () => {
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

  describe('placeholder prop', () => {
    it('should match snapshot', () => {
      const component = shallow(
        <Input theme={theme} placeholder="My Placeholder" />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('inputComponent prop', () => {
    const CustomComponent = props => <View {...props}>Custom!</View>;

    it('should match snapshot', () => {
      const component = shallow(
        <Input theme={theme} inputComponent={CustomComponent} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  // TextInput props
  describe('onTouch prop', () => {
    it('should properly call callback', () => {
      const onTouchSpy = jest.fn();
      const component = shallow(<Input theme={theme} onTouch={onTouchSpy} />);
      component.find('TextInput').simulate('touch');
      expect(onTouchSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('onFocus prop', () => {
    it('should properly call callback', () => {
      const onFocusSpy = jest.fn();
      const component = shallow(<Input theme={theme} onFocus={onFocusSpy} />);
      component.find('TextInput').simulate('focus');
      expect(onFocusSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('should apply values from theme', () => {
    const theme = {
      Input: {
        placeholder: 'Enter text',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedInput />
      </ThemeProvider>
    );

    expect(component.root.findByType(TextInput).props.placeholder).toBe(
      'Enter text'
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
