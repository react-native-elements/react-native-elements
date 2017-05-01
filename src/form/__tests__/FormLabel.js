import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormLabel from '../FormLabel';

describe('FormLabel Component', () => {
  it('should render without issues', () => {
    const component = shallow(<FormLabel />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should show text from the FormLabel children', () => {
    const component = shallow(
      <FormLabel
        containerStyle={{ backgroundColor: 'red' }}
        labelStyle={{ backgroundColor: 'yellow' }}
        fontFamily="arial"
      >
        Name
      </FormLabel>
    );

    expect(component.props().children.props.children).toBe('Name');
  });
});
