import SearchBar from '../SearchBar-ios';
import { commonTests, commonPlatformTest } from './common';

describe('iOS SearchBar component', () => {
  commonTests(SearchBar);
  commonPlatformTest(SearchBar);
});
