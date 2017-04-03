import React from 'react';
import {shallow} from 'enzyme';
import ButtonGroup from '../ButtonGroup';

const buttons = ['Button 1', 'Button 2', 'Button 3'];

describe('ButtonGroup Component', () => {
  it('should render without issues', () => {
    const component = shallow(<ButtonGroup buttons={buttons} />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
