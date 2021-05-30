import React from 'react';
import { View, Button } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import DefaultTheme, { FullTheme } from '../theme';
import ThemeProvider from '../ThemeProvider';
import { useTheme } from '../makeStyles';
import darkColors from '../colorsDark';

const FakeChild = () => {
  const { theme, replaceTheme, updateTheme } = useTheme();
  return (
    <>
      <Button
        title="Button"
        testID="updateTheme-button"
        onPress={() => {
          updateTheme({ colors: { primary: 'pink' } });
        }}
      />
      <Button
        title="Button"
        testID="replaceTheme-button"
        onPress={() => {
          replaceTheme({ colors: { primary: 'red' } });
        }}
      />
      <View testID="provider-child-view" theme={theme} />
    </>
  );
};

const createProvider = (theme: Partial<FullTheme>, useDark?: boolean) => {
  return (
    <ThemeProvider theme={theme} useDark={useDark}>
      <FakeChild />
    </ThemeProvider>
  );
};

describe('ThemeProvider', () => {
  it('should work', () => {
    const { getByTestId } = render(createProvider(DefaultTheme));

    expect(getByTestId('provider-child-view').props.theme).toStrictEqual(
      DefaultTheme
    );
  });

  it('should update theme', async () => {
    const { getByTestId } = render(createProvider(DefaultTheme));

    fireEvent(getByTestId('updateTheme-button'), 'press');

    expect(
      getByTestId('provider-child-view').props.theme.colors.primary
    ).toStrictEqual('pink');
  });

  it('should replace theme', async () => {
    const { getByTestId } = render(createProvider(DefaultTheme));

    fireEvent(getByTestId('replaceTheme-button'), 'press');

    expect(
      getByTestId('provider-child-view').props.theme.colors.primary
    ).toStrictEqual('red');
  });

  it('should use useDark', async () => {
    const { getByTestId } = render(createProvider({}, true));

    expect(getByTestId('provider-child-view').props.theme.colors).toStrictEqual(
      darkColors
    );
  });

  // it('should retain custom theme when switching between light / dark mode', () => {
  //   const customTheme = { colors: { primary: 'cyan' } };
  //   const component = shallow(
  //     <ThemeProvider theme={customTheme}>
  //       <View />
  //     </ThemeProvider>
  //   );
  //   const instance = component.instance();
  //   expect(instance.state).toMatchObject({
  //     theme: {
  //       ...theme,
  //       colors: {
  //         ...theme.colors,
  //         ...customTheme.colors,
  //       },
  //     },
  //   });
  //   // Switch to dark mode
  //   component.setProps({ useDark: true });
  //   const retrievedDarkTheme = instance.getTheme();
  //   expect(retrievedDarkTheme).toBeTruthy();
  //   expect(retrievedDarkTheme.colors.primary).toEqual(
  //     customTheme.colors.primary
  //   );
  //   // Switch to light mode
  //   component.setProps({ useDark: false });
  //   const retrievedLightTheme = instance.getTheme();
  //   expect(retrievedLightTheme).toBeTruthy();
  //   expect(retrievedLightTheme.colors.primary).toEqual(
  //     customTheme.colors.primary
  //   );
  // });
});
