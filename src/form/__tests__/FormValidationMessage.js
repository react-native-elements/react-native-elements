import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormValidationMessage from '../FormValidationMessage';

describe('FormValidationMessage Component', () => {
  it('should render without issues', () => {
    const component = shallow(<FormValidationMessage />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should show text from the FormValidationMessage children', () => {
    const component = shallow(
      <FormValidationMessage
        containerStyle={{ backgroundColor: 'red' }}
        labelStyle={{ backgroundColor: 'yellow' }}
        fontFamily="arial"
      >
        There was an error
      </FormValidationMessage>
    );

    expect(component.props().children.props.children).toBe(
      'There was an error'
    );
  });
});
