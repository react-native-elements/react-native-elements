import React from 'react';
import Button, { Button as BaseButton } from '../../Button';
import Text from '../../Text';
import { lightColors } from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { fireEvent, render } from '@testing-library/react-native';
import { useTheme } from '../ThemeProvider';
import { ThemeProvider, createTheme, ThemeConsumer } from '../ThemeProvider';
import { View } from 'react-native';
import { ReactTestInstance } from 'react-test-renderer';
import { defaultSpacing } from '../theme';

describe('ThemeProvider', () => {
  // it('render ThemeProvider', () => {
  //   const { toJSON, queryAllByRole } = render(
  //     <>
  //       <BaseButton testID="xl" radius={'xl'}>
  //         Test
  //       </BaseButton>
  //       <Button testID="lg" radius={'lg'}>
  //         Test
  //       </Button>
  //       <ThemeProvider
  //         theme={createTheme({ components: { Button: { radius: 'md' } } })}
  //       >
  //         <Button testID="sm" radius={'sm'}>
  //           Test
  //         </Button>
  //         <Button testID="md">Test</Button>
  //       </ThemeProvider>
  //     </>
  //   );
  //   const buttons = queryAllByRole('button');
  //   buttons.forEach((el) => {
  //     const size = el.props.testID;
  //     expect((el.children[0] as ReactTestInstance).props?.style).toMatchObject({
  //       borderRadius: defaultSpacing[size],
  //     });
  //   });
  //   expect(toJSON()).toMatchSnapshot();
  // });

  // it('should update and replace theme', () => {
  //   const TestComp = (): JSX.Element => {
  //     const { theme, replaceTheme, updateTheme } = useTheme();
  //     return (
  //       <>
  //         <Button
  //           testID="updateTheme"
  //           onPress={() => {
  //             updateTheme({
  //               lightColors: {
  //                 primary: 'red',
  //               },
  //             });
  //           }}
  //         />
  //         <Button
  //           testID="replaceThemeButton"
  //           onPress={() => {
  //             replaceTheme({
  //               lightColors: {
  //                 primary: 'purple',
  //               },
  //             });
  //           }}
  //         />
  //         <Text testID="themeChild" children={theme.colors.primary} />
  //       </>
  //     );
  //   };

  //   const { queryByTestId } = render(
  //     <ThemeProvider theme={createTheme({})}>
  //       <TestComp />
  //     </ThemeProvider>
  //   );
  //   const updateButton = queryByTestId('updateTheme')!;
  //   const replaceButton = queryByTestId('replaceThemeButton')!;
  //   const textTheme = queryByTestId('themeChild')!;
  //   expect(textTheme.props.children).toEqual(lightColors.primary);

  //   fireEvent.press(updateButton);
  //   expect(textTheme.props.children).toEqual('red');

  //   fireEvent.press(replaceButton);
  //   expect(textTheme.props.children).toBe('purple');
  // });

  // it('should use default theme', () => {
  //   const { queryByTestId } = renderWithWrapper(
  //     <ThemeProvider>
  //       <ThemeConsumer>
  //         {({ theme }) => (
  //           <View testID="viewComp">{JSON.stringify(theme)}</View>
  //         )}
  //       </ThemeConsumer>
  //     </ThemeProvider>
  //   );
  //   const instance = queryByTestId('viewComp')!;
  //   expect(JSON.parse(instance.props.children)).toMatchObject({
  //     colors: lightColors,
  //   });
  // });

  it('should retain custom theme when switching between light / dark mode', () => {
    const customTheme = createTheme({
      lightColors: {
        primary: 'white',
      },
      darkColors: {
        primary: 'black',
      },
      mode: 'light',
      components: {
        Text: { accessibilityLabel: 'theme-test' },
      },
    });
    const TestComp = (): JSX.Element => {
      const { theme, updateTheme } = useTheme();
      // console.log('yo', theme);
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
    const updateButton = queryByTestId('updateTheme')!;
    const textTheme = queryByTestId('themeChild')!;

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
