import type { Config } from 'jest';

const config: Config = {
  fakeTimers: {
    doNotFake: ['nextTick'],
    timerLimit: 1000,
  },
  preset: 'react-native',
  displayName: '@rneui/base',
  testPathIgnorePatterns: [
    './src/SearchBar/__tests__/common.tsx',
    '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
  transformIgnorePatterns: [
    '<rootDir>/../../node_modules/(?!(@react-native|react-native)/)',
  ],
  coveragePathIgnorePatterns: ['./src/searchbar/__tests__/common.tsx'],
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/*.usage.tsx',
    '!src/index.tsx',
    '!src/helpers/*.tsx',
  ],
  collectCoverage: true,
  globals: {
    __DEV__: true,
  },
  setupFilesAfterEnv: ['<rootDir>/.ci/setupTests.ts'],
  testRegex: '/__tests__/.*\\.(ts|tsx|js)$',
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

module.exports = config;
