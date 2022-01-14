import React from 'react';
import Tile from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Image, Pressable, Text } from 'react-native';
import Icon from '../../Icon';

describe('Tile component', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithWrapper(
      <Tile imageSrc={{ uri: 'http://google.com' }} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render featured tile', () => {
    const { wrapper, queryByText } = renderWithWrapper(
      <Tile
        imageSrc={{ uri: 'http://google.com' }}
        title="Hey React Native"
        featured
        caption="Some Caption Text"
      />
    );
    expect(wrapper.findByType(Image).props.source).toMatchObject({
      uri: 'http://google.com',
    });
    expect(queryByText('Hey React Native')).not.toBeNull();
    expect(queryByText('Some Caption Text')).not.toBeNull();
  });

  it('should render featured tile with icon', () => {
    const { wrapper } = renderWithWrapper(
      <Tile icon={{ name: 'play-circle', type: 'font-awesome' }} featured />
    );
    expect(wrapper.findByType(Icon).props).toMatchObject({
      name: 'play-circle',
      type: 'font-awesome',
    });
  });

  it('should render tile with icon', () => {
    const { toJSON } = renderWithWrapper(
      <Tile
        imageSrc={{ uri: 'http://google.com' }}
        title="Lorem ipsum dolor sit amet, consectetur"
        icon={{ name: 'play-circle', type: 'font-awesome' }}
        contentContainerStyle={{ height: 70 }}
        imageContainerStyle={{ height: 70 }}
        iconContainerStyle={{ height: 70 }}
        containerStyle={{ height: 70 }}
        titleStyle={{ backgroundColor: 'yellow' }}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with active opacity', () => {
    const { wrapper } = renderWithWrapper(
      <Tile imageSrc={{ uri: 'http://google.com' }} activeOpacity={0.9} />
    );
    expect(wrapper.findByType(Pressable).props.android_ripple).toMatchObject({
      color: 'rgba(32, 137, 220, 0.9)',
    });
  });

  it('should apply custom image props', () => {
    const { wrapper } = renderWithWrapper(
      <Tile
        imageSrc={{ uri: 'http://google.com' }}
        imageProps={{ resizeMode: 'contain' }}
      />
    );
    expect(wrapper.findByType(Image).props).toMatchObject({
      resizeMode: 'contain',
    });
  });

  it('should apply styles from theme', () => {
    const theme = {
      Tile: {
        title: 'Mary is friendly',
      },
    };
    const { wrapper } = renderWithWrapper(
      <Tile imageSrc={{ uri: 'http://google.com' }} activeOpacity={0.9} />,
      '',
      theme
    );
    expect(wrapper.findByType(Text).props.children).toBe('Mary is friendly');
  });
});
