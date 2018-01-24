import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBar from '../SearchBar-ios';

describe('iOS SearchBar component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with loading', () => {
    const component = shallow(
      <SearchBar
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

  it('should render with a custom search icon', () => {
    const component = shallow(
      <SearchBar leftIcon={<View />} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without search icon', () => {
    const component = shallow(
      <SearchBar noIcon />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without clear icon', () => {
    const component = shallow(
      <SearchBar clearIcon={false} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom Cancel button title', () => {
    const component = shallow(
      <SearchBar cancelButtonTitle="Annuler" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
