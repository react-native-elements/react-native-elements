import React from 'react';
import Card from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Image } from '../../Image';

describe('Card Component', () => {
  it.skip('', () => {
    const component = renderWithWrapper(<Card />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const { toJSON, queryByText } = renderWithWrapper(
      <Card>
        <Card.Title>Card Title</Card.Title>
      </Card>
    );
    expect(queryByText('Card Title')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const { wrapper, queryByText } = renderWithWrapper(
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
      </Card>
    );
    expect(queryByText('HELLO WORLD')).toBeTruthy();
    expect(wrapper.findByType(Image).props.source).toMatchObject({
      uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    });
  });

  it.skip('', () => {
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
