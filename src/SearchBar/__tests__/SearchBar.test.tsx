import React from 'react';
import { SearchBar } from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Keyboard } from 'react-native';

describe('SearchBar wrapper component', () => {
  it('should match snapshot', () => {
    const component = renderWithWrapper(<SearchBar />);
    expect(component).not.toBeNull();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render an iOS SearchBar', () => {
    const component = renderWithWrapper(<SearchBar platform="ios" />);
    expect(component).not.toBeNull();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render an Android SearchBar', () => {
    const component = renderWithWrapper(<SearchBar platform="android" />);
    expect(component).not.toBeNull();
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('keyboard eventListener', () => {
    const mockListener = {
      remove: jest.fn(),
    };
    const originalAddListener = Keyboard.addListener;
    const mockAddListener = jest.fn().mockReturnValue(mockListener);

    beforeAll(() => {
      Keyboard.addListener = mockAddListener;
    });
    beforeEach(() => {
      mockAddListener.mockClear();
      mockListener.remove.mockClear();
    });
    afterAll(() => {
      Keyboard.addListener = originalAddListener;
    });
    it('should subscribe to KeyboardDidClose event', () => {
      renderWithWrapper(
        <SearchBar platform="android" onKeyboardHide={() => {}} />
      );
      expect(Keyboard.addListener).toHaveBeenCalled();
    });

    it('should call listener.remove on unmount', () => {
      const component = renderWithWrapper(
        <SearchBar platform="android" onKeyboardHide={() => {}} />
      );
      component.unmount();
      expect(mockListener.remove).toHaveBeenCalled();
    });
  });
});
