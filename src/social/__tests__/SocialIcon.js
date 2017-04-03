import React from 'react';
import {shallow} from 'enzyme';
import SocialIcon from '../SocialIcon';

describe('SocialIcon component', () => {
  it('should render without issues', () => {
    const component = shallow(<SocialIcon type="twitter"/>);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
