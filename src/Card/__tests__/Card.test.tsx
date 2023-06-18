import React from 'react';
import Card from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Card Component', () => {
  it('should render', () => {
    const { queryByText } = renderWithWrapper(
      <Card>
        <Card.FeaturedTitle>featured title</Card.FeaturedTitle>
        <Card.FeaturedSubtitle>featured sub title</Card.FeaturedSubtitle>
        <Card.Image
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
      </Card>
    );
    expect(queryByText('featured title')).toBeTruthy();
    expect(queryByText('featured sub title')).toBeTruthy();
  });
});
