import React from 'react';
import { View } from 'react-native';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider, FullTheme, colors } from '../src/config';
import deepmerge from 'deepmerge';

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

// for getting findByType e.g. wrapper.findByType(Icon)
export const wrapperFindByType = (
  children: React.ReactChild,
  theme: Partial<FullTheme> = {},
  wrapperTestID?: string
) => {
  const { queryByTestId, ...otherRenderApi } = renderWithTheme(
    <View testID="wrapper">{children}</View>,
    theme
  );
  const wrapper = queryByTestId(wrapperTestID || 'wrapper');
  return { wrapper, queryByTestId, ...otherRenderApi };
};
