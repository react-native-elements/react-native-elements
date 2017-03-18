import React from 'react';
import {shallow} from 'enzyme';
import Tile from '../Tile';

describe('FeaturedTitle component', () => {
  it('should render without issues', () => {
    const component = shallow(<Tile imageSrc={{url: 'http://google.com'}}/>);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
