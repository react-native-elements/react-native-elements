import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tile from '../Tile';

describe('FeaturedTitle component', () => {
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
});
