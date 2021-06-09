import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider, FullTheme } from '../src/config';

const theme = {
  colors: {
    black: 'black',
  },
};

export const renderWithTheme = (
  children: any,
  themeProp: Partial<FullTheme> = theme
) => {
  return render(<ThemeProvider theme={themeProp}>{children}</ThemeProvider>);
};
