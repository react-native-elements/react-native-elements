import SearchBarIOS from '../SearchBar-ios';
import { commonTests, commonPlatformTest } from './common';
import { describe } from '@jest/globals';

describe('iOS SearchBar component', () => {
  commonTests(SearchBarIOS);
  commonPlatformTest(SearchBarIOS);
});
