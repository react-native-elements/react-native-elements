import React from 'react';
import { View } from 'react-native';
import {
  render,
  RenderOptions,
  fireEvent,
} from '@testing-library/react-native';
import { ThemeProvider, FullTheme, colors } from '../src/config';
import deepmerge from 'deepmerge';

export { fireEvent };

export const renderWithTheme = (
  children: React.ReactChild,
  themeProp: Partial<FullTheme> = {},
  options?: RenderOptions
) => {
  return render(
    <ThemeProvider theme={deepmerge({ colors }, themeProp)}>
      {children}
    </ThemeProvider>,
    options
  );
};

// for getting findByType e.g. wrapper.findByType(Icon) see implementation in Avatar Component
export const renderWithWrapper = (
  children: React.ReactChild,
  wrapperTestID?: string,
  theme: Partial<FullTheme> = {},
  options?: RenderOptions
) => {
  const renderApi = renderWithTheme(
    <View testID="wrapper">{children}</View>,
    theme,
    options
  );
  const wrapper = renderApi.queryByTestId(wrapperTestID || 'wrapper');
  return { wrapper, ...renderApi };
};
