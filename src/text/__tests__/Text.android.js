import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../config';
import TextThemed from '../Text';

jest.mock('Platform', () => ({
  OS: 'android',
  select: ({ android }) => android,
}));

describe('Text Component (Android)', () => {
  it('should apply styles from the theme', () => {
    const theme = {
      Text: {
        h2Style: {
          fontWeight: '200',
        },
      },
    };

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <TextThemed h2>Hey</TextThemed>
      </ThemeProvider>
    );

    expect(
      component.root.findByType(TextThemed).children[0].children[0].props.style
        .fontWeight
    ).toBe('200');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
