import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import parseSamples, {
  assignRef,
  genRefId,
} from 'enzyme-styleguidist-sample-parser';
import options, {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from '../../../samples';
import Divider from '../Divider';

const props = {
  noProps: {
    component: Divider,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  style: {
    component: Divider,
    props: { style: { backgroundColor: '#071', height: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Misc: { sectionComponents: { Divider: { samples } } },
  },
  options
);

describe('Divider Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Divider />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with style', () => {
    const component = shallow(<Divider style={{ backgroundColor: 'blue' }} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.props().style.length).toBe(2);
    expect(component.props().style[1].backgroundColor).toBe('blue');
  });
});
