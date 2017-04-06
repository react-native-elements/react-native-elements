import React from 'react';
import {shallow} from 'enzyme';
import Card from '../Card';

describe('Card Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Card />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should have Card title', () => {
    const component = shallow(<Card title='Card Title' />);

    expect(component.props().children.props.children[0].props.children[0].props.children).toBe('Card Title');
  });
});
