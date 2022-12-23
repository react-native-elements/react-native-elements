import type { Config } from 'jest';

const config: Config = {
  fakeTimers: {
    doNotFake: ['nextTick'],
    timerLimit: 1000,
  },
  displayName: '@rneui/themed',
  preset: 'react-native',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
  moduleNameMapper: {
    '^@rneui/base/dist/(.*)': [
      '<rootDir>/../base/src/$1',
      '<rootDir>/../../node_modules/@rneui/base/src/$1',
    ],
  },
  transformIgnorePatterns: [
    '<rootDir>/../../node_modules/(?!(@react-native|react-native|@rneui/base)/)',
  ],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ['<rootDir>/.ci/setupTests.ts'],
  collectCoverage: true,
  globals: {
    __DEV__: true,
  },
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '\\.[jt]sx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/helpers/*.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

module.exports = config;
