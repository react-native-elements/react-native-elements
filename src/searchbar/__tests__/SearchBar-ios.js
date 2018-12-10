import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar-ios';
import { commonTests, commonPlatformTest } from './common';
import toJson from 'enzyme-to-json';

import theme from '../../config/theme';

describe('iOS SearchBar component', () => {
  commonTests(SearchBar);
  commonPlatformTest(SearchBar);

  describe('Props', () => {
    it('showCancel', () => {
      const component = shallow(<SearchBar theme={theme} showCancel />);

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
