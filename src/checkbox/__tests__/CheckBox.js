import React from 'react';
import {shallow} from 'enzyme';
import CheckBox from '../CheckBox';

describe('CheckBox Component', () => {
  it('should render without issues', () => {
    const component = shallow(<CheckBox />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should use TouchableOpacity as default component', () => {
    const component = shallow(<CheckBox />);

    expect(component.find('TouchableOpacity').length).toBe(1);
  });

  it('should allow to pass custom component', () => {
    const View = jest.fn();
    const component = shallow(<CheckBox component={View} />);

    expect(component.find('View').length).toBe(1);
  });

  it('should render title in Text', () => {
    const component = shallow(<CheckBox title='Custom Text' />);

    expect(component.props().children.props.children[1].props.children).toBe('Custom Text');
  });
});
