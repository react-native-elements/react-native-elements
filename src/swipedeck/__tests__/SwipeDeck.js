/*eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SwipeDeck from '../SwipeDeck';

// test data
const DATA = [
  {
    id: 1,
    text: 'Amanda',
    age: 28,
    uri:
      'http://f9view.com/wp-content/uploads/2013/10/American-Beautiful-Girls-Wallpapers-Hollywood-Celebs-1920x1200px.jpg',
  },
  { id: 2, text: 'Emma', age: 29, uri: 'https://i.imgur.com/FHxVpN4.jpg' },
];

describe('SwipeDeck Component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <SwipeDeck data={DATA} renderCard={() => console.log('render card')} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
