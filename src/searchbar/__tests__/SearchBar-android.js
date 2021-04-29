import React from 'react';
import SearchBar from '../SearchBar-android';
import { commonTests, commonPlatformTest } from './common';
import { shallow } from 'enzyme';

describe('Android SearchBar component', () => {
  commonTests(SearchBar);
  commonPlatformTest(SearchBar);
  it('componentWillUnmount should be called on unmount', () => {
    const component = shallow(<SearchBar value="Chickens" />);
    const componentWillUnmount = jest.spyOn(
      component.instance(),
      'componentWillUnmount'
    );
    component.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });
});
