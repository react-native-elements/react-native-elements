import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedFeaturedTile, { FeaturedTile } from '../FeaturedTile';

describe('FeaturedTitle component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <FeaturedTile imageSrc={{ url: 'http://google.com' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with width and height', () => {
    const component = shallow(
      <FeaturedTile
        imageSrc={{ url: 'http://google.com' }}
        width={34}
        height={20}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with Icon', () => {
    const component = shallow(
      <FeaturedTile
        imageSrc={{ url: 'http://google.com' }}
        icon={{ name: 'play-circle', type: 'font-awesome' }}
        imageContainerStyle={{ height: 70 }}
        containerStyle={{ height: 70 }}
        captionStyle={{ color: 'blue' }}
        iconContainerStyle={{ height: 70 }}
        titleStyle={{ backgroundColor: 'yellow' }}
        overlayContainerStyle={{ height: 70 }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const theme = {
      FeaturedTile: {
        title: 'I am featured',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedFeaturedTile imageSrc={{ url: 'http://google.com' }} />
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'featuredTileTitle' }).props.children
    ).toBe('I am featured');

    expect(component.toJSON()).toMatchSnapshot();
  });
});
