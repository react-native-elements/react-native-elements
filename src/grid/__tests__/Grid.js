import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';
import Grid from '../Grid';
import Row from '../Row';

describe('Grid Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Grid />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should render children', () => {
    const component = shallow(<Grid containerStyle={{ backgroundColor: 'peru' }}>
      <Text>Hi</Text>
      <Row>Bye</Row>
    </Grid>);

    expect(component.find('Text').length).toBe(1);
  });

  it('should render with onPress', () => {
    const onPress = jest.fn();
    const component = shallow(<Grid 
      onPress={onPress} 
      size={3}
      containerStyle={{ backgroundColor: 'peru' }}>
    </Grid>);

    component.simulate('press');
    expect(onPress).toHaveBeenCalled();
  });
});
