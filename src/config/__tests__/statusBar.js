/* eslint-disable no-console */
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from '..';

describe('getStatusBarHeight', () => {
  it('should return right value for android', () => {
    jest.resetModules();
    jest.doMock('Platform', () => ({
      OS: 'android',
      select: obj => obj.android,
    }));

    expect(getStatusBarHeight()).toBe(StatusBar.currentHeight);
    expect(getStatusBarHeight(false)).toBe(StatusBar.currentHeight);
    expect(getStatusBarHeight(true)).toBe(0);
  });

  it('should return right value for ios', () => {
    jest.resetModules();
    jest.doMock('Platform', () => ({
      OS: 'ios',
      select: obj => obj.ios,
    }));

    expect(getStatusBarHeight()).toBe(20);
  });

  it('should return right value for default', () => {
    jest.resetModules();
    jest.doMock('Platform', () => ({
      OS: 'custom',
      select: obj => obj.default,
    }));

    expect(getStatusBarHeight()).toBe(0);
  });
});
