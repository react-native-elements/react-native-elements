import React from 'react';
import { FeaturedTile } from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('FeaturedTitle component', () => {
  it('should apply values from theme', () => {
    const theme = {
      FeaturedTile: {
        title: 'I am featured',
      },
    };
    const { queryByText } = renderWithWrapper(
      <FeaturedTile featured imageSrc={{ uri: 'http://google.com' }} />,
      '',
      { components: theme }
    );
    expect(queryByText('I am featured')).not.toBeNull();
  });
});
