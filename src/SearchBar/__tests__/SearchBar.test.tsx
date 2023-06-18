import React from 'react';
import SearchBar from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('SearchBar wrapper component', () => {
  it('should apply values from theme', () => {
    const theme = {
      SearchBar: {
        placeholder: 'Enter search term',
      },
    };
    const component = renderWithWrapper(<SearchBar platform="android" />, '', {
      components: theme,
    });
    expect(component.queryByTestId('RNE__SearchBar').props.placeholder).toBe(
      'Enter search term'
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
