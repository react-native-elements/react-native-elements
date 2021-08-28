import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { ActivityIndicator, Text, Pressable, View } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Icon } from '../../Icon';

const WrapperTestID = 'RNE__SearchBar-wrapper';
const SearchBarTestID = 'RNE__SearchBar';

export function commonTests(SearchBar) {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should match snapshot', () => {
    const component = renderWithWrapper(<SearchBar />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Handlers', () => {
    it('onClear', () => {
      const handler = jest.fn();
      const { queryByTestId } = renderWithWrapper(
        <SearchBar onClear={handler} />
      );
      const Wrapper = queryByTestId(SearchBarTestID);
      fireEvent(Wrapper, 'clear');
      expect(handler).toBeCalled();
    });

    it('onFocus', () => {
      const handler = jest.fn();
      const { queryByTestId } = renderWithWrapper(
        <SearchBar onFocus={handler} />
      );
      const Wrapper = queryByTestId(SearchBarTestID);
      fireEvent(Wrapper, 'focus');
      expect(handler).toBeCalled();
    });

    it('onBlur', () => {
      const handler = jest.fn();
      const { queryByTestId } = renderWithWrapper(
        <SearchBar onBlur={handler} />
      );
      const Wrapper = queryByTestId(SearchBarTestID);
      fireEvent(Wrapper, 'blur');
      expect(handler).toBeCalled();
    });

    it.skip('onChangeText', () => {
      const handler = jest.fn();
      const { queryByTestId } = renderWithWrapper(
        <SearchBar onChangeText={handler} />
      );
      const Wrapper = queryByTestId(SearchBarTestID);
      fireEvent.changeText(Wrapper, 'test');
      expect(handler).toBeCalled();
    });
  });

  describe('Props', () => {
    it('showLoading, loadingProps', () => {
      const { queryByTestId } = renderWithWrapper(
        <SearchBar
          showLoading
          loadingProps={{
            style: { flex: 1 },
          }}
          containerStyle={{ height: 70 }}
        />
      );
      const Wrapper = queryByTestId(WrapperTestID);
      const component = Wrapper.findByType(ActivityIndicator);
      expect(component.props.style.flex).toBe(1);
    });

    describe('searchIcon and without', () => {
      it('searchIcon', () => {
        const { queryByTestId } = renderWithWrapper(
          <SearchBar searchIcon={{ size: 50 }} lightTheme />
        );
        const Wrapper = queryByTestId(WrapperTestID);
        const component = Wrapper.findByType(Icon);
        expect(component.props.size).toBe(50);
      });

      it('custom searchIcon', () => {
        const { queryByTestId } = renderWithWrapper(
          <SearchBar searchIcon={<View />} round />
        );
        const Wrapper = queryByTestId(WrapperTestID);
        expect(Wrapper.findAllByType(View)).not.toBeNull();
      });

      it('no searchIcon', () => {
        const { queryByTestId } = renderWithWrapper(
          <SearchBar searchIcon={false} />
        );
        const Wrapper = queryByTestId(SearchBarTestID);
        expect(Wrapper.props.leftIcon).toBeFalsy();
      });
    });

    describe('clearIcon and without', () => {
      it.skip('clearIcon', () => {
        const { queryByTestId } = renderWithWrapper(
          <SearchBar
            searchIcon={false}
            value="test"
            clearIcon={{ color: 'black' }}
          />
        );
        const Wrapper = queryByTestId(WrapperTestID);
        const component = Wrapper.findByType(Icon);
        expect(component.props.color).toBe('black');
      });

      it('custom clearIcon', () => {
        const { queryByTestId } = renderWithWrapper(
          <SearchBar clearIcon={<View />} />
        );
        const Wrapper = queryByTestId(WrapperTestID);
        expect(Wrapper.findAllByType(View)).not.toBeNull();
      });

      it('no clearIcon', () => {
        const { queryByTestId } = renderWithWrapper(
          <SearchBar clearIcon={false} />
        );
        const Wrapper = queryByTestId(WrapperTestID);
        expect(Wrapper.props.leftIcon).toBeFalsy();
      });
    });
  });
}

export function commonPlatformTest(SearchBar) {
  describe('Platform Handlers', () => {
    it('onCancel', () => {
      const handler = jest.fn();
      const { queryByTestId } = renderWithWrapper(
        <SearchBar onCancel={handler} />
      );
      const Wrapper = queryByTestId(SearchBarTestID);
      fireEvent(Wrapper, 'cancel');
      expect(handler).toBeCalled();
    });
  });

  describe('Platform Props', () => {
    describe('cancel button', () => {
      describe('Enabled', () => {
        it('cancelButtonTitle', () => {
          const { queryByTestId } = renderWithWrapper(
            <SearchBar cancelButtonTitle="Annuler" />
          );
          const Wrapper = queryByTestId('RNE__SearchBar-cancelButton');
          expect(Wrapper?.findByType(Text).props.children).toBe('Annuler');
        });

        it('cancelButtonProps', () => {
          const Props = {
            color: 'black',
            buttonStyle: { elevation: 0 },
            buttonTextStyle: { fontSize: 12 },
          };
          const { queryByTestId } = renderWithWrapper(
            <SearchBar cancelButtonProps={Props} />
          );
          const Wrapper = queryByTestId('RNE__SearchBar-cancelButton');
          expect(Wrapper.props.style).toMatchObject({
            elevation: 0,
          });
          expect(Wrapper.findByType(Text).props.style).toMatchObject({
            color: 'black',
            fontSize: 12,
          });
        });
      });

      describe('Disabled', () => {
        it('cancelButtonProps', () => {
          const { queryByTestId } = renderWithWrapper(
            <SearchBar cancelButtonProps={{ disabled: true }} />
          );
          const Wrapper = queryByTestId('RNE__SearchBar-cancelButtonContainer');
          expect(Wrapper.findByType(Pressable).props.disabled).toBeTruthy();
        });
        it('cancelButtonProps disabled styles', () => {
          const { queryByTestId } = renderWithWrapper(
            <SearchBar
              cancelButtonProps={{
                disabled: true,
                buttonDisabledStyle: { backgroundColor: '#cdcdcd' },
                buttonDisabledTextStyle: { color: '#ffffff' },
              }}
            />
          );
          const Wrapper = queryByTestId('RNE__SearchBar-cancelButton');
          expect(Wrapper.props.style).toMatchObject({
            backgroundColor: '#cdcdcd',
          });
          expect(Wrapper.findByType(Text).props.style).toMatchObject({
            color: '#ffffff',
          });
        });
      });
    });
  });
}
