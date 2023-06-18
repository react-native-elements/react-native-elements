import React, { JSXElementConstructor } from 'react';
import { View } from 'react-native';
import {
  render,
  RenderOptions,
  fireEvent,
  act,
} from '@testing-library/react-native';
import {
  ThemeProvider,
  FullTheme,
  createTheme,
  CreateThemeOptions,
} from '../src/config';

export { fireEvent, act };

// for getting findByType e.g. wrapper.findByType(Icon) see implementation in Avatar Component
export const renderWithWrapper = (
  children: React.ReactElement<any, string | JSXElementConstructor<any>>,
  wrapperTestID?: string,
  themeProp: Partial<CreateThemeOptions> = {},
  renderOptions?: RenderOptions
) => {
  const options: RenderOptions = {
    ...(!wrapperTestID && {
      wrapper: (props) => <View {...props} testID="wrapper" />,
    }),
    ...renderOptions,
  };
  const renderApi = render(
    <ThemeProvider theme={createTheme(themeProp)}>{children}</ThemeProvider>,
    options
  );
  const wrapper = renderApi.queryByTestId(wrapperTestID || 'wrapper')!;
  return { wrapper, ...renderApi };
};
