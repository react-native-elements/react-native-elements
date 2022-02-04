import React from 'react';
import { Text, Button } from '../..';
import { colors } from '../colors';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { fireEvent, render } from '@testing-library/react-native';
import { useTheme } from '../makeStyles';
import { ThemeProvider, createTheme, ThemeConsumer } from '../ThemeProvider';
import { View } from 'react-native';

describe('ThemeProvider', () => {
  it('render ThemeProvider', () => {
    const { toJSON } = renderWithWrapper(<Text />);
    expect(toJSON).toMatchSnapshot();
  });

  it('should update and replace theme', () => {
    const TestComp = (): JSX.Element => {
      const { theme, replaceTheme, updateTheme } = useTheme();
      return (
        <>
          <Button
            testID="updateTheme"
            onPress={() => {
              updateTheme({
                colors: {
                  primary: 'red',
                },
              });
            }}
          />
          <Button
            testID="replaceThemeButton"
            onPress={() => {
              replaceTheme({
                colors: {
                  primary: 'purple',
                },
              });
            }}
          />
          <Text testID="themeChild" children={theme.colors.primary} />
        </>
      );
    };

    const { queryByTestId } = render(
      <ThemeProvider>
        <TestComp />
      </ThemeProvider>
    );
    const updateButton = queryByTestId('updateTheme');
    const replaceButton = queryByTestId('replaceThemeButton');
    const textTheme = queryByTestId('themeChild');
    expect(textTheme.props.children).toEqual(colors.primary);

    fireEvent.press(updateButton);
    expect(textTheme.props.children).toEqual('red');

    fireEvent.press(replaceButton);
    expect(textTheme.props.children).toBe('purple');
  });

  it('should use default theme', () => {
    const { queryByTestId } = renderWithWrapper(
      <ThemeProvider>
        <ThemeConsumer>
          {({ theme }) => (
            <View testID="viewComp">{JSON.stringify(theme)}</View>
          )}
        </ThemeConsumer>
      </ThemeProvider>
    );
    const instance = queryByTestId('viewComp');
    expect(JSON.parse(instance.props.children)).toMatchObject({
      colors,
    });
  });

  it('should retain custom theme when switching between light / dark mode', () => {
    const customTheme = createTheme({
      colors: {
        primary: 'white',
      },
      darkColors: {
        primary: 'black',
      },
      mode: 'light',
      Text: { accessibilityLabel: 'theme-test' },
    });
    const TestComp = (): JSX.Element => {
      const { theme, updateTheme } = useTheme();

      return (
        <>
          <Button
            testID="updateTheme"
            onPress={() =>
              updateTheme((myTheme) => ({
                mode: myTheme.mode === 'dark' ? 'light' : 'dark',
              }))
            }
          />
          <Text testID="themeChild" children={String(theme.mode)} />
        </>
      );
    };
    const { queryByTestId } = render(
      <ThemeProvider theme={customTheme}>
        <TestComp />
      </ThemeProvider>
    );
    const updateButton = queryByTestId('updateTheme');
    const textTheme = queryByTestId('themeChild');

    expect(textTheme.props.accessibilityLabel).toEqual('theme-test');

    // set to dark mode
    fireEvent.press(updateButton);
    expect(textTheme.props.accessibilityLabel).toEqual('theme-test');
    expect(textTheme.props.children).toEqual('dark');

    // set to light mode
    fireEvent.press(updateButton);
    expect(textTheme.props.accessibilityLabel).toEqual('theme-test');
    expect(textTheme.props.children).toEqual('light');
  });
});
