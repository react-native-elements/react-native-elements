import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedTile, { Tile } from '../Tile';

describe('Tile component', () => {
  it('should render without issues', () => {
    const component = shallow(<Tile imageSrc={{ url: 'http://google.com' }} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render featured tile', () => {
    const component = shallow(
      <Tile
        imageSrc={{ url: 'http://google.com' }}
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
        featured
        caption="Some Caption Text"
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render featured tile with icon', () => {
    const component = shallow(
      <Tile
        imageSrc={{ url: 'http://google.com' }}
        icon={{ name: 'play-circle', type: 'font-awesome' }}
        featured
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render tile with icon', () => {
    const component = shallow(
      <Tile
        imageSrc={{ url: 'http://google.com' }}
        title="Lorem ipsum dolor sit amet, consectetur"
        icon={{ name: 'play-circle', type: 'font-awesome' }}
        contentContainerStyle={{ height: 70 }}
        imageContainerStyle={{ height: 70 }}
        iconContainerStyle={{ height: 70 }}
        containerStyle={{ height: 70 }}
        titleStyle={{ backgroundColor: 'yellow' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with active opacity', () => {
    const component = shallow(
      <Tile imageSrc={{ url: 'http://google.com' }} activeOpacity={0.9} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply custom image props', () => {
    const component = shallow(
      <Tile
        imageSrc={{ url: 'http://google.com' }}
        imageProps={{ resizeMode: 'contain' }}
      />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply styles from theme', () => {
    const theme = {
      Tile: {
        title: 'Mary is friendly',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedTile
          imageSrc={{ url: 'http://google.com' }}
          activeOpacity={0.9}
        />
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'tileTitle' }).props.children
    ).toBe('Mary is friendly');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
