import React from 'react';
import { Avatar } from '../../Avatar';
import { FeaturedTile } from '../components/FeaturedTile';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Pressable, Image } from 'react-native';
import { Icon } from '../../Icon';

describe('FeaturedTitle component', () => {
  it('should match snapshot', () => {
    const component = renderWithWrapper(
      <FeaturedTile imageSrc={{ uri: 'http://google.com' }} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with width and height', () => {
    const { wrapper } = renderWithWrapper(
      <FeaturedTile
        imageSrc={{ uri: 'http://google.com' }}
        width={34}
        height={20}
      />
    );
    expect(wrapper.findByType(Pressable).props.style).toMatchObject({
      width: 34,
      height: 20,
    });
  });

  it('should render with Icon', () => {
    const { wrapper } = renderWithWrapper(
      <FeaturedTile
        imageSrc={{ uri: 'http://googleRNE__ICON__CONTAINER.com' }}
        icon={{ name: 'play-circle', type: 'font-awesome' }}
        imageContainerStyle={{ height: 70 }}
        containerStyle={{ height: 70 }}
        captionStyle={{ color: 'blue' }}
        iconContainerStyle={{ height: 70 }}
        titleStyle={{ backgroundColor: 'yellow' }}
        overlayContainerStyle={{ height: 70 }}
      />
    );
    expect(wrapper.findByType(Icon).props).toMatchObject({
      name: 'play-circle',
      type: 'font-awesome',
    });
  });

  it('should render component in caption', () => {
    const { wrapper } = renderWithWrapper(
      <FeaturedTile
        imageSrc={{ uri: 'http://google.com' }}
        caption={<Avatar source={{ uri: 'http://google.com' }} />}
      />
    );
    expect(wrapper.findByType(Avatar).props).toMatchObject({
      source: { uri: 'http://google.com' },
    });
  });

  it('should apply custom image props', () => {
    const { wrapper } = renderWithWrapper(
      <FeaturedTile
        imageSrc={{ uri: 'http://google.com' }}
        imageProps={{ resizeMode: 'contain' }}
      />
    );
    expect(wrapper.findByType(Image).props).toMatchObject({
      resizeMode: 'contain',
    });
  });

  it('should render string in caption', () => {
    const { queryByText } = renderWithWrapper(
      <FeaturedTile
        imageSrc={{ uri: 'http://google.com' }}
        caption="Caption text"
      />
    );
    expect(queryByText('Caption text')).not.toBeNull();
  });
});
