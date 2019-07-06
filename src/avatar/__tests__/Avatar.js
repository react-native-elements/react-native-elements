import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';
import ThemedAvatar, { Avatar } from '../Avatar';

describe('Avatar Component', () => {
  jest.useFakeTimers();

  it('should render without issues', () => {
    const component = shallow(
      <Avatar source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders rounded', () => {
    const component = shallow(
      <Avatar source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} rounded />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('allows custom imageProps', () => {
    const component = shallow(
      <Avatar
        source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
        imageProps={{ resizeMode: 'contain' }}
      />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders touchable if onPress given', () => {
    const component = shallow(
      <Avatar
        source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
        onPress={() => null}
      />
    );

    expect(component.find(TouchableOpacity)).toBeTruthy();
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const theme = {
      Avatar: {
        source: { uri: 'https://i.imgur.com/0y8Ftya.jpg' },
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedAvatar />
      </ThemeProvider>
    );

    expect(component.root.findByType('Image').props.source.uri).toBe(
      'https://i.imgur.com/0y8Ftya.jpg'
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Sizes', () => {
    it('accepts small', () => {
      const component = shallow(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          size="small"
        />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('accepts medium', () => {
      const component = shallow(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          size="medium"
        />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('accepts large', () => {
      const component = shallow(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          size="large"
        />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('accepts xlarge', () => {
      const component = shallow(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          size="xlarge"
        />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('defaults to small if invalid string given', () => {
      const error = jest.fn();
      global.console.error = error;

      const component = shallow(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          size="asdasdas"
        />
      );

      expect(error).toHaveBeenCalledWith(
        expect.stringContaining(
          'Failed prop type: Invalid prop `size` supplied to `Avatar`'
        )
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('accepts a number', () => {
      const component = shallow(
        <Avatar source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} size={30} />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('Edit button', () => {
    it('ios', () => {
      const component = shallow(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          showEditButton
        />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('android', () => {
      jest.mock('Platform', () => ({
        OS: 'android',
      }));

      const component = shallow(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          showEditButton
        />
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('Placeholders', () => {
    it('renders title if given', done => {
      shallow(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          title="MH"
        />
      );

      jest.advanceTimersByTime(200);
      done();
    });

    it('renders custom', () => {
      shallow(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          renderPlaceholderContent={<Text>Hey</Text>}
        />
      );
    });

    it('renders using icon prop', () => {
      const component = shallow(
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

      expect(toJson(component)).toMatchSnapshot();
    });

    it('renders using icon with defaults', () => {
      const component = shallow(
        <Avatar
          source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
          iconStyle={{
            backgroundColor: 'red',
          }}
          icon={{}}
        />
      );

      expect(toJson(component)).toMatchSnapshot();
    });

    it("shouldn't show placeholder if not using source", () => {
      const component = shallow(
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'pink' }}
          title="MD"
        />
      );

      expect(component.props().style.backgroundColor).toBe('transparent');
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
