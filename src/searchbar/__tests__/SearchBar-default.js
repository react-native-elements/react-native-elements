import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import toJson from 'enzyme-to-json';

import theme from '../../config/theme';

import SearchBar from '../SearchBar-default';

describe('Default SearchBar component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Handlers', () => {
    it('onClear', () => {
      const component = shallow(<SearchBar theme={theme} />);
      component.find({ testID: 'searchInput' }).simulate('clear');
    });

    it('onFocus', () => {
      const component = shallow(<SearchBar theme={theme} />);
      component.find({ testID: 'searchInput' }).simulate('focus');
    });

    it('onBlur', () => {
      const component = shallow(<SearchBar theme={theme} />);
      component.find({ testID: 'searchInput' }).simulate('blur');
    });

    it('onChangeText', () => {
      const component = shallow(<SearchBar theme={theme} />);
      component.find({ testID: 'searchInput' }).simulate('changeText', 'test');
    });
  });

  describe('Instance methods', () => {
    it('focus', () => {
      const focus = jest.fn();
      const component = shallow(<SearchBar theme={theme} />);

      const instance = component.instance();

      // Refs not available in shallow render
      instance.input = {
        focus,
      };

      instance.focus();
      expect(focus).toHaveBeenCalledTimes(1);
    });

    it('blur', () => {
      const blur = jest.fn();
      const component = shallow(<SearchBar theme={theme} />);

      const instance = component.instance();

      // Refs not available in shallow render
      instance.input = {
        blur,
      };

      instance.blur();
      expect(blur).toHaveBeenCalledTimes(1);
    });

    it('clear', () => {
      const clear = jest.fn();
      const component = shallow(<SearchBar theme={theme} />);

      const instance = component.instance();

      // Refs not available in shallow render
      instance.input = {
        clear,
      };

      instance.clear();
      expect(clear).toHaveBeenCalledTimes(1);
    });
  });

  describe('Props', () => {
    it('should render with icons', () => {
      const component = shallow(
        <SearchBar
          theme={theme}
          clearIcon={{
            name: '3d-rotation',
            color: 'red',
          }}
          showLoading
          loadingProps={{
            style: { flex: 1 },
          }}
          lightTheme
          containerStyle={{ height: 70 }}
        />
      );

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    describe('searchIcon and without', () => {
      it('searchIcon', () => {
        const component = shallow(
          <SearchBar theme={theme} searchIcon={{ size: 50 }} lightTheme />
        );

        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('custom searchIcon', () => {
        const component = shallow(
          <SearchBar theme={theme} searchIcon={<View />} round />
        );

        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('no searchIcon', () => {
        const component = shallow(
          <SearchBar theme={theme} searchIcon={false} />
        );

        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });
    });

    describe('clearIcon and without', () => {
      it('clearIcon', () => {
        const component = shallow(
          <SearchBar theme={theme} clearIcon={{ color: 'black' }} />
        );

        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('custom clearIcon', () => {
        const component = shallow(
          <SearchBar theme={theme} clearIcon={<View />} />
        );

        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });

      it('no clearIcon', () => {
        const component = shallow(
          <SearchBar theme={theme} clearIcon={false} />
        );

        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
      });
    });
  });
});
