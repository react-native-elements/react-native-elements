/* eslint-disable jest/no-identical-title */
import React from 'react';
import { View } from 'react-native';
import { renderWithTheme } from '../../../.ci/testHelper';

export function commonTests(SearchBar) {
  it('should render without issues', () => {
    const component = renderWithTheme(<SearchBar />);
    expect(component).not.toBeNull();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with a preset value', () => {
    const component = renderWithTheme(<SearchBar value="Chickens" />);
    expect(component).not.toBeNull();
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Handlers', () => {
    it('onClear', () => {
      const component = renderWithTheme(<SearchBar />);
      component.getByTestId('searchInput');
    });

    it('onFocus', () => {
      const component = renderWithTheme(<SearchBar />);
      component.find({ testID: 'searchInput' }).simulate('focus');
    });

    it('onBlur', () => {
      const component = renderWithTheme(<SearchBar />);
      component.find({ testID: 'searchInput' }).simulate('blur');
    });

    it('onChangeText', () => {
      const component = renderWithTheme(<SearchBar />);
      component.find({ testID: 'searchInput' }).simulate('changeText', 'test');
    });
  });

  // describe('Instance methods', () => {
  //   it('focus', () => {
  //     const focus = jest.fn();
  //     const component = renderWithTheme(<SearchBar  />);
  //     const instance = component.instance();
  //     // Refs not available in renderWithTheme render
  //     instance.input = {
  //       focus,
  //     };
  //     instance.focus();
  //     expect(focus).toHaveBeenCalledTimes(1);
  //   });

  //   it('blur', () => {
  //     const blur = jest.fn();
  //     const component = renderWithTheme(<SearchBar  />);
  //     const instance = component.instance();
  //     // Refs not available in renderWithTheme render
  //     instance.input = {
  //       blur,
  //     };
  //     instance.blur();
  //     expect(blur).toHaveBeenCalledTimes(1);
  //   });

  //   it('clear', () => {
  //     const clear = jest.fn();
  //     const component = renderWithTheme(<SearchBar  />);
  //     const instance = component.instance();
  //     // Refs not available in renderWithTheme render
  //     instance.input = {
  //       clear,
  //     };
  //     instance.clear();
  //     expect(clear).toHaveBeenCalledTimes(1);
  //   });
  // });

  describe('Props', () => {
    it('showLoading, loadingProps', () => {
      const component = renderWithTheme(
        <SearchBar
          showLoading
          loadingProps={{
            style: { flex: 1 },
          }}
          containerStyle={{ height: 70 }}
        />
      );
      expect(component).not.toBeNull();
      expect(component.toJSON()).toMatchSnapshot();
    });

    describe('searchIcon and without', () => {
      it('searchIcon', () => {
        const component = renderWithTheme(
          <SearchBar searchIcon={{ size: 50 }} lightTheme />
        );
        expect(component).not.toBeNull();
        expect(component.toJSON()).toMatchSnapshot();
      });

      it('custom searchIcon', () => {
        const component = renderWithTheme(
          <SearchBar searchIcon={<View />} round />
        );
        expect(component).not.toBeNull();
        expect(component.toJSON()).toMatchSnapshot();
      });

      it('no searchIcon', () => {
        const component = renderWithTheme(<SearchBar searchIcon={false} />);
        expect(component).not.toBeNull();
        expect(component.toJSON()).toMatchSnapshot();
      });
    });

    describe('clearIcon and without', () => {
      it('clearIcon', () => {
        const component = renderWithTheme(
          <SearchBar clearIcon={{ color: 'black' }} />
        );
        expect(component).not.toBeNull();
        expect(component.toJSON()).toMatchSnapshot();
      });

      it('custom clearIcon', () => {
        const component = renderWithTheme(<SearchBar clearIcon={<View />} />);
        expect(component).not.toBeNull();
        expect(component.toJSON()).toMatchSnapshot();
      });

      it('no clearIcon', () => {
        const component = renderWithTheme(<SearchBar clearIcon={false} />);
        expect(component).not.toBeNull();
        expect(component.toJSON()).toMatchSnapshot();
      });
    });
  });
}

export function commonPlatformTest(SearchBar) {
  describe('Handlers', () => {
    it('onCancel', () => {
      const component = renderWithTheme(<SearchBar />);
      component.find({ testID: 'searchInput' }).simulate('cancel');
    });
  });

  describe('Instance methods', () => {
    it('cancel', () => {
      const onCancel = jest.fn();
      const component = renderWithTheme(<SearchBar onCancel={onCancel} />);
      const instance = component.instance();
      // Refs not available in renderWithTheme render
      instance.input = {
        blur: jest.fn(),
      };
      instance.cancel();
      jest.runAllTimers();
      expect(onCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('Props', () => {
    describe('cancel button', () => {
      describe('Enabled', () => {
        it('cancelButtonTitle', () => {
          const component = renderWithTheme(
            <SearchBar cancelButtonTitle="Annuler" />
          );
          expect(component).not.toBeNull();
          expect(component.toJSON()).toMatchSnapshot();
        });

        it('cancelButtonProps', () => {
          const component = renderWithTheme(
            <SearchBar
              cancelButtonProps={{
                color: 'black',
                buttonStyle: { elevation: 0 },
                buttonTextStyle: { fontSize: 12 },
              }}
            />
          );
          expect(component).not.toBeNull();
          expect(component.toJSON()).toMatchSnapshot();
        });
      });

      describe('Disabled', () => {
        it('cancelButtonProps', () => {
          const component = renderWithTheme(
            <SearchBar cancelButtonProps={{ disabled: true }} />
          );
          expect(component).not.toBeNull();
          expect(component.toJSON()).toMatchSnapshot();
        });

        it('cancelButtonProps disabled styles', () => {
          const component = renderWithTheme(
            <SearchBar
              cancelButtonProps={{
                disabled: true,
                buttonDisabledStyle: { backgroundColor: '#cdcdcd' },
                buttonDisabledTextStyle: { color: '#ffffff' },
              }}
            />
          );
          expect(component).not.toBeNull();
          expect(component.toJSON()).toMatchSnapshot();
        });
      });
    });
  });
}
