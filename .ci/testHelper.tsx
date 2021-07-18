import React from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider, FullTheme, colors } from '../src/config';
import deepmerge from 'deepmerge';
import { View } from 'react-native';

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

// used for getting findByType e.g. wrapper.findByType(View)
export const wrapperFindByType = (children: any) => {
  const { queryByTestId } = renderWithTheme(
    <View testID="wrapper">{children}</View>
  );
  const wrapper = queryByTestId('wrapper');
  return wrapper;
};
