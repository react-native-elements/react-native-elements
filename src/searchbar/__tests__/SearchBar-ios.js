import SearchBar from '../SearchBar-ios';
import { commonTests, commonPlatformTest } from './common';

describe('Default SearchBar component', () => {
  commonTests(SearchBar);
  commonPlatformTest(SearchBar);
});
