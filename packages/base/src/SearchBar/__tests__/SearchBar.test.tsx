import React from 'react';
import { SearchBar } from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

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
});
