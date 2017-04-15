import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Badge from '../badge';

describe('Badge Component', () => {
  it('should render without issue', () => {
    const component = shallow(<Badge/>);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should throw Error if value and child are included', () => {
    expect(() => {
      shallow(<Badge value={"hello"}><Text/></Badge>);
    }).toThrow('Badge can only contain a single child or string value');
  });

  it('should render if element included', () => {
    const component = shallow(<Badge ><Text title='foo' /></Badge>);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.props().children.props.title).toBe('foo');
  });

  it('old badge props should still work', () => {
    const component = shallow(<Badge badge={{value: 'foo'}} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  })
});
