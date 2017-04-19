import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SwipeDeck from '../SwipeDeck';

describe('SwipeDeck component', () => {
  it('should render with props', () => {
    const renderCard = jest.fn();
    const renderNoMoreCards = jest.fn();

    const component = shallow(
      <SwipeDeck 
        data={[{ 
          id: 1, 
          text: 'Amanda', 
          age: 28, 
          uri: 'http://f9view.com/wp-content/uploads/2013/10/American-Beautiful-Girls-Wallpapers-Hollywood-Celebs-1920x1200px.jpg' 
        }, {
          id: 1, 
          text: 'Amanda', 
          age: 28, 
          uri: 'http://f9view.com/wp-content/uploads/2013/10/American-Beautiful-Girls-Wallpapers-Hollywood-Celebs-1920x1200px.jpg'
        }]}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
