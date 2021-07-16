import React from 'react';
import SearchBar from '../index';
import { renderWithTheme } from '../../../.ci/testHelper';

describe('SearchBar wrapper component', () => {
  it('should render without issues', () => {
    const component = renderWithTheme(<SearchBar />);
    expect(component).not.toBeNull();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render an iOS SearchBar', () => {
    const component = renderWithTheme(<SearchBar platform="ios" />);
    expect(component).not.toBeNull();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render an Android SearchBar', () => {
    const component = renderWithTheme(<SearchBar platform="android" />);
    expect(component).not.toBeNull();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const theme = {
      SearchBar: {
        placeholder: 'Enter search term',
      },
    };
    const component = renderWithTheme(<SearchBar platform="android" />, theme);
    expect(component.queryByTestId('searchInput').props.placeholder).toBe(
      'Enter search term'
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  // describe('Instance methods', () => {
  //   it('focus', () => {
  //     const focus = jest.fn();
  //     const component = renderWithTheme(<SearchBar />);
  //     const instance = component.instance();
  //     // Refs not available in renderWithTheme render
  //     instance.searchbar = {
  //       focus,
  //     };
  //     instance.focus();
  //     expect(focus).toHaveBeenCalledTimes(1);
  //   });

  //   it('blur', () => {
  //     const blur = jest.fn();
  //     const component = renderWithTheme(<SearchBar />);
  //     const instance = component.instance();
  //     // Refs not available in renderWithTheme render
  //     instance.searchbar = {
  //       blur,
  //     };
  //     instance.blur();
  //     expect(blur).toHaveBeenCalledTimes(1);
  //   });

  //   it('clear', () => {
  //     const clear = jest.fn();
  //     const component = renderWithTheme(<SearchBar />);
  //     const instance = component.instance();
  //     // Refs not available in renderWithTheme render
  //     instance.searchbar = {
  //       clear,
  //     };
  //     instance.clear();
  //     expect(clear).toHaveBeenCalledTimes(1);
  //   });

  //   it('cancel', () => {
  //     const cancel = jest.fn();
  //     const component = renderWithTheme(<SearchBar />);
  //     const instance = component.instance();
  //     // Refs not available in renderWithTheme render
  //     instance.searchbar = {
  //       cancel,
  //     };
  //     instance.cancel();
  //     expect(cancel).toHaveBeenCalledTimes(1);
  //   });
  // });
});
