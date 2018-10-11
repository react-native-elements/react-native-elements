import React from 'react';
import { View } from 'react-native';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import theme from '../theme';

import ThemeProvider from '../ThemeProvider';

describe('ThemeProvider', () => {
  it('should work', () => {
    const component = shallow(
      <ThemeProvider>
        <View />
      </ThemeProvider>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should update theme', () => {
    const component = shallow(
      <ThemeProvider>
        <View />
      </ThemeProvider>
    );
    const instance = component.instance();

    expect(instance.state).toEqual({
      theme,
    });

    instance.updateTheme({
      colors: {
        primary: 'pink',
      },
    });

    expect(instance.state).toEqual({
      theme: {
        ...theme,
        colors: {
          ...theme.colors,
          primary: 'pink',
        },
      },
    });
  });

  it('should get the theme', () => {
    const component = shallow(
      <ThemeProvider>
        <View />
      </ThemeProvider>
    );
    const instance = component.instance();

    expect(instance.state).toEqual({
      theme,
    });

    const retrievedTheme = instance.getTheme();

    expect(retrievedTheme).toBeTruthy();
    expect(retrievedTheme).toEqual(theme);
  });
});
