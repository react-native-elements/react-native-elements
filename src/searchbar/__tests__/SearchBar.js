import React from 'react';
import { TextInput } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedSearchBar, { SearchBar } from '../SearchBar';

describe('SearchBar wrapper component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render a default SearchBar if wrong platform', () => {
    const spy = jest.fn();

    global.console = {
      error: spy,
    };

    const component = shallow(<SearchBar platform="wrong-platform" />);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render an iOS SearchBar', () => {
    const component = shallow(<SearchBar platform="ios" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render an Android SearchBar', () => {
    const component = shallow(<SearchBar platform="android" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Instance methods', () => {
    it('focus', () => {
      const focus = jest.fn();
      const component = shallow(<SearchBar />);

      const instance = component.instance();

      // Refs not available in shallow render
      instance.searchbar = {
        focus,
      };

      instance.focus();
      expect(focus).toHaveBeenCalledTimes(1);
    });

    it('blur', () => {
      const blur = jest.fn();
      const component = shallow(<SearchBar />);

      const instance = component.instance();

      // Refs not available in shallow render
      instance.searchbar = {
        blur,
      };

      instance.blur();
      expect(blur).toHaveBeenCalledTimes(1);
    });

    it('clear', () => {
      const clear = jest.fn();
      const component = shallow(<SearchBar />);

      const instance = component.instance();

      // Refs not available in shallow render
      instance.searchbar = {
        clear,
      };

      instance.clear();
      expect(clear).toHaveBeenCalledTimes(1);
    });

    it('cancel', () => {
      const cancel = jest.fn();
      const component = shallow(<SearchBar />);

      const instance = component.instance();

      // Refs not available in shallow render
      instance.searchbar = {
        cancel,
      };

      instance.cancel();
      expect(cancel).toHaveBeenCalledTimes(1);
    });
  });

  it('should apply values from theme', () => {
    const theme = {
      SearchBar: {
        placeholder: 'Enter search term',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedSearchBar platform="android" />
      </ThemeProvider>
    );

    expect(component.root.findByType(TextInput).props.placeholder).toBe(
      'Enter search term'
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
