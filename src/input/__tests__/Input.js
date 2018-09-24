import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from '../Input';

describe('Input Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Input />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should set the name prop and give it back in onChangeText', () => {
    const onChangeTextMock = jest.fn();
    const component = shallow(
      <Input name="myInputName" onChangeText={onChangeTextMock} />
    );

    const event = expect.anything(); // TODO Do we have somewhere a defined structure for event?i
    component.find('TextInput').simulate('change', event);
    expect(onChangeTextMock).toHaveBeenCalledTimes(1);
    expect(onChangeTextMock).toBeCalledWith(event, { name: 'myInputName' });
  });
});
