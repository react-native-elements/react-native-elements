import React from 'react';
import { SearchBarAndroid } from '../SearchBar-android';
import { commonTests, commonPlatformTest } from './common';
import { shallow } from 'enzyme';

describe('Android SearchBar component', () => {
  commonTests(SearchBarAndroid);
  commonPlatformTest(SearchBarAndroid);
  it('componentWillUnmount should be called on unmount', () => {
    const component = shallow(<SearchBarAndroid value="Chickens" />);
    const componentWillUnmount = jest.spyOn(
      component.instance(),
      'componentWillUnmount'
    );
    component.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });
});
