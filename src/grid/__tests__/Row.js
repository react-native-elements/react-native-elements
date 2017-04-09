import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';
import Row from '../Row';

describe('Row Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Row />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should render children', () => {
    const component = shallow(<Row containerStyle={{ height: 100 }}><Text>Hi</Text></Row>);

    expect(component.find('Text').length).toBe(1);
  });

  it('should render with onPress', () => {
    const onPress = jest.fn();
    const component = shallow(<Row 
      onPress={onPress} 
      containerStyle={{ backgroundColor: 'peru' }}
      size={3}>
    </Row>);

    component.simulate('press');
    expect(onPress).toHaveBeenCalled();
  });
});
