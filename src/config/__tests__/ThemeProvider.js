import React from 'react';
import { View } from 'react-native';
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

  it('should update and replace theme', () => {
    const component = shallow(
      <ThemeProvider>
        <View />
      </ThemeProvider>
    );
    const instance = component.instance();

    expect(instance.state).toMatchObject({
      theme,
    });

    instance.updateTheme({
      colors: {
        primary: 'pink',
      },
    });

    expect(instance.state).toMatchObject({
      theme: {
        ...theme,
        colors: {
          ...theme.colors,
          primary: 'pink',
        },
      },
    });

    instance.replaceTheme({});

    expect(instance.state).toMatchObject({
      theme,
    });
  });

  it('should get the theme', () => {
    const component = shallow(
      <ThemeProvider>
        <View />
      </ThemeProvider>
    );
    const instance = component.instance();

    expect(instance.state).toMatchObject({
      theme,
    });

    const retrievedTheme = instance.getTheme();

    expect(retrievedTheme).toBeTruthy();
    expect(retrievedTheme).toEqual(theme);
  });

  it('should contain useDark key', () => {
    const component = shallow(
      <ThemeProvider>
        <View />
      </ThemeProvider>
    );
    const instance = component.instance();

    expect(instance.state).toMatchObject({
      theme,
      useDark: false,
    });
  });

  it('should retain custom theme when switching between light / dark mode', () => {
    const customTheme = { colors: { primary: 'cyan' } };

    const component = shallow(
      <ThemeProvider theme={customTheme}>
        <View />
      </ThemeProvider>
    );
    const instance = component.instance();

    expect(instance.state).toMatchObject({
      theme: {
        ...theme,
        colors: {
          ...theme.colors,
          ...customTheme.colors,
        },
      },
    });

    // Switch to dark mode
    component.setProps({ useDark: true });
    const retrievedDarkTheme = instance.getTheme();

    expect(retrievedDarkTheme).toBeTruthy();
    expect(retrievedDarkTheme.colors.primary).toEqual(
      customTheme.colors.primary
    );

    // Switch to light mode
    component.setProps({ useDark: false });
    const retrievedLightTheme = instance.getTheme();

    expect(retrievedLightTheme).toBeTruthy();
    expect(retrievedLightTheme.colors.primary).toEqual(
      customTheme.colors.primary
    );
  });
});
