import React from 'react';
import { Avatar } from '..';
import { Pressable, View, Image, Text } from 'react-native';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { avatarSizes } from './../Avatar';
import { Icon } from '../../Icon';

describe('Avatar Component', () => {
  jest.useFakeTimers();

  it('should match snapshot', () => {
    const { toJSON } = renderWithWrapper(
      <Avatar source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders rounded', () => {
    const { wrapper } = renderWithWrapper(
      <Avatar source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} rounded />
    );
    expect(wrapper.findByType(View).props.style.borderRadius).toBe(
      avatarSizes.small / 2
    );
  });

  it('should allows custom imageProps', () => {
    const { wrapper } = renderWithWrapper(
      <Avatar
        source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
        imageProps={{
          resizeMode: 'contain',
          containerStyle: { backgroundColor: 'red' },
        }}
      />
    );
    expect(wrapper.findByType(Image).props.resizeMode).toBe('contain');
  });

  it('should renders touchable if onPress given', () => {
    const { wrapper } = renderWithWrapper(
      <Avatar
        source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
        onPress={() => null}
      />
    );
    expect(wrapper.findByType(Pressable)).toBeTruthy();
  });

  it('should render using image with imageProps', () => {
    const { wrapper } = renderWithWrapper(
      <Avatar
        source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
        imageProps={{ style: { backgroundColor: 'red' } }}
      />
    );
    const img = wrapper.findByType(Image);
    expect(img.props.source).toMatchObject({
      uri: 'https://i.imgur.com/0y8Ftya.jpg',
    });
    expect(img.props.style).toMatchObject({
      backgroundColor: 'red',
    });
  });

  describe('Sizes', () => {
    it.each`
      size
      ${'small'}
      ${'medium'}
      ${'large'}
      ${'xlarge'}
    `('accepts $size', ({ size }) => {
      const { wrapper } = renderWithWrapper(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          size={size}
        />
      );
      expect(wrapper.findByType(View).props.style).toMatchObject({
        height: avatarSizes[size],
        width: avatarSizes[size],
      });
    });

    it('should accepts a number as size', () => {
      const { wrapper } = renderWithWrapper(
        <Avatar source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} size={30} />
      );
      expect(wrapper.findByType(View).props.style).toMatchObject({
        height: 30,
        width: 30,
      });
    });

    it('should have default size', () => {
      const { wrapper } = renderWithWrapper(
        <Avatar source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
      );
      expect(wrapper.findByType(View).props.style).toMatchObject({
        height: avatarSizes.small,
        width: avatarSizes.small,
      });
    });
  });

  describe('Title Avatars', () => {
    it('should renders title if given', () => {
      const { wrapper } = renderWithWrapper(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          title="John"
        />
      );
      expect(wrapper.findByType(Text).props.children).toBe('John');
    });
  });

  describe('Icon Avatars', () => {
    it('should renders using icon prop', () => {
      const { wrapper } = renderWithWrapper(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          icon={{
            name: 'home',
            type: 'material-community',
          }}
          iconStyle={{
            backgroundColor: 'red',
          }}
        />
      );
      expect(wrapper.findByType(Icon).props).toMatchObject({
        name: 'home',
        type: 'material-community',
        style: { backgroundColor: 'red' },
      });
    });

    it('should render using icon with defaults', () => {
      const { wrapper } = renderWithWrapper(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          iconStyle={{
            backgroundColor: 'red',
          }}
          icon={{}}
        />
      );
      expect(wrapper.findByType(Icon).props).toMatchObject({
        name: 'account',
        color: 'white',
        style: { backgroundColor: 'red' },
      });
    });
  });

  describe('renderCustomContent Avatar', () => {
    it('should renders custom renderCustomContent', () => {
      const { wrapper } = renderWithWrapper(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          renderCustomContent={<Text testID="my-custom-placeholder">Hey</Text>}
        />,
        'my-custom-placeholder'
      );
      expect(wrapper.props.children).toBe('Hey');
    });
  });
});
