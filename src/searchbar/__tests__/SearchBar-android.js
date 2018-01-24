import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBar from '../SearchBar-android';

describe('Android SearchBar component', () => {
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
      />
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
});
