import React from 'react';
import {shallow} from 'enzyme';
import PricingCard from '../PricingCard';

describe('PricingCard component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <PricingCard 
        title='Free'
        price='$0'
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />
    );

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
