import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Message from '../Message';

describe('Toast message component', () => {
  it('should render message properly and match snapshot', () => {
    const component = shallow(
      <Message message={"I'm random message"} onHide={() => null} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should throw error when props are not fulfilled properly', () => {
    expect(() => shallow(<Message />)).toThrowError();
    expect(() =>
      shallow(<Message message={'Some random message'} />)
    ).toThrowError();
    expect(() => shallow(<Message onHide={() => null} />)).toThrowError();
  });
});
