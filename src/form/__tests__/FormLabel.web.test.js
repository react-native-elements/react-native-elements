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
import FormLabel from '../FormLabel';

const props = {
  containerStyle: {
    component: FormLabel,
    children: 'enter something',
    props: { containerStyle: { backgroundColor: '#2ff', padding: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  labelStyle: {
    component: FormLabel,
    children: 'enter something',
    props: { labelStyle: { backgroundColor: '#2ff', padding: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontFamily: {
    component: FormLabel,
    children: 'enter something',
    props: { fontFamily: 'Courier New' },
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
    Forms: { sectionComponents: { FormLabel: { samples } } },
  },
  options
);

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
