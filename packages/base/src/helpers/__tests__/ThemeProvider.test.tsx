import React from 'react';
import { Text, Button } from '../..';
import DefaultTheme, { FullTheme } from '../theme';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { fireEvent, render } from '@testing-library/react-native';
import { useTheme } from '../makeStyles';
import ThemeProvider from '../ThemeProvider';
import { View } from 'react-native';

describe('ThemeProvider', () => {
  it('should work', () => {
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
    expect(textTheme.props.children).toEqual(DefaultTheme.colors.primary);

    fireEvent.press(updateButton);
    expect(textTheme.props.children).toEqual('red');

    fireEvent.press(replaceButton);
    expect(textTheme.props.children).toBe('purple');
  });

  it('should contain useDark key', () => {
    const { queryByTestId } = renderWithWrapper(
      <ThemeProvider theme={DefaultTheme} useDark>
        <View testID="viewComp" />
      </ThemeProvider>
    );
    const instance = queryByTestId('viewComp');
    expect(instance.parent.parent.props).toMatchObject({
      theme: DefaultTheme,
      useDark: true,
    });
  });

  it('should contain useDark key with value true', () => {
    const { toJSON } = renderWithWrapper(
      <ThemeProvider useDark={true}>
        <View />
      </ThemeProvider>
    );
    expect(toJSON).toMatchSnapshot();
  });

  it('should retain custom theme when switching between light / dark mode', () => {
    const customTheme: Partial<FullTheme> = {
      Text: { accessibilityLabel: 'theme-test' },
    };
    const TestComp = (): JSX.Element => {
      const [useDark, setUseDark] = React.useState(false);
      return (
        <>
          <Button testID="updateTheme" onPress={() => setUseDark(!useDark)} />
          <ThemeProvider theme={customTheme} useDark={useDark}>
            <Text testID="themeChild" children={String(useDark)} />
          </ThemeProvider>
        </>
      );
    };
    const { queryByTestId } = render(<TestComp />);
    const updateButton = queryByTestId('updateTheme');
    const textTheme = queryByTestId('themeChild');
    const themeProvider =
      queryByTestId('themeChild').parent.parent.parent.parent;

    expect(textTheme.props.accessibilityLabel).toEqual('theme-test');

    // set to dark mode
    fireEvent.press(updateButton);
    expect(themeProvider.props.useDark).toBeTruthy();
    expect(textTheme.props.accessibilityLabel).toEqual('theme-test');

    // set to light mode
    fireEvent.press(updateButton);
    expect(themeProvider.props.useDark).toBeFalsy();
    expect(textTheme.props.accessibilityLabel).toEqual('theme-test');
  });
});
