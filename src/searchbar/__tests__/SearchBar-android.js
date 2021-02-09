import SearchBar from '../SearchBar-android';
import { commonTests, commonPlatformTest } from './common';

describe('Android SearchBar component', () => {
  commonTests(SearchBar);
  commonPlatformTest(SearchBar);
});
