import React from 'react';
import {shallow} from 'enzyme';
import FormLabel from '../FormLabel';

describe('FormLabel Component', () => {
  it('should render without issues', () => {
    const component = shallow(<FormLabel />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should show text from the FormLabel children', () => {
    const component = shallow(
      <FormLabel>
        Name
      </FormLabel>
    );

    expect(component.props().children.props.children).toBe('Name');
  });
});
