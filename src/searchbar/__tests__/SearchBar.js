import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBar from '../SearchBar';

describe('SearchBar wrapper component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render a default SearchBar if wrong platform', () => {
    const component = shallow(<SearchBar platform="wrong-platform" />);

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
});
