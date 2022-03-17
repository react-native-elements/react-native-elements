import React from 'react';
import { FeaturedTile } from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('FeaturedTitle component', () => {
  it.skip('should apply values from theme', () => {
    const theme = {
      FeaturedTile: {
        title: 'I am featured',
      },
    };
    const { queryByText } = renderWithWrapper(
      <FeaturedTile featured imageSrc={{ uri: 'http://google.com' }} />,
      '',
      theme
    );
    expect(queryByText('I am featured')).not.toBeNull();
  });
});
