/* eslint-disable jest/no-identical-title */
import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import toJson from 'enzyme-to-json';

import theme from '../../config/theme';

export function commonTests(SearchBar) {
  it('should render without issues', () => {
    const component = shallow(<SearchBar theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a preset value', () => {
    const component = shallow(<SearchBar theme={theme} value="Chickens" />);

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
    it('showLoading, loadingProps', () => {
      const component = shallow(
        <SearchBar
          theme={theme}
          showLoading
          loadingProps={{
            style: { flex: 1 },
          }}
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
}

export function commonPlatformTest(SearchBar) {
  describe('Handlers', () => {
    it('onCancel', () => {
      const component = shallow(<SearchBar theme={theme} />);
      component.find({ testID: 'searchInput' }).simulate('cancel');
    });
  });

  describe('Instance methods', () => {
    it('cancel', () => {
      const onCancel = jest.fn();
      const component = shallow(
        <SearchBar theme={theme} onCancel={onCancel} />
      );

      const instance = component.instance();

      // Refs not available in shallow render
      instance.input = {
        blur: jest.fn(),
      };

      instance.cancel();
      expect(onCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('Props', () => {
    describe('cancel button', () => {
      describe('Enabled', () => {
        it('cancelButtonTitle', () => {
          const component = shallow(
            <SearchBar theme={theme} cancelButtonTitle="Annuler" />
          );

          expect(component.length).toBe(1);
          expect(toJson(component)).toMatchSnapshot();
        });

        it('cancelButtonProps', () => {
          const component = shallow(
            <SearchBar
              theme={theme}
              cancelButtonProps={{
                color: 'black',
                buttonStyle: { elevation: 0 },
                buttonTextStyle: { fontSize: 12 },
              }}
            />
          );

          expect(component.length).toBe(1);
          expect(toJson(component)).toMatchSnapshot();
        });
      });

      describe('Disabled', () => {
        it('cancelButtonProps', () => {
          const component = shallow(
            <SearchBar cancelButtonProps={{ disabled: true }} theme={theme} />
          );

          expect(component.length).toBe(1);
          expect(toJson(component)).toMatchSnapshot();
        });

        it('cancelButtonProps disabled styles', () => {
          const component = shallow(
            <SearchBar
              theme={theme}
              cancelButtonProps={{
                disabled: true,
                buttonDisabledStyle: { backgroundColor: '#cdcdcd' },
                buttonDisabledTextStyle: { color: '#ffffff' },
              }}
            />
          );

          expect(component.length).toBe(1);
          expect(toJson(component)).toMatchSnapshot();
        });
      });
    });
  });
}
