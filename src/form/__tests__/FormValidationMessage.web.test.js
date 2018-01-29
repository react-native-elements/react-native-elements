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
import FormValidationMessage from '../FormValidationMessage';

const props = {
  containerStyle: {
    component: FormValidationMessage,
    children: 'bad things',
    props: { containerStyle: { backgroundColor: '#2ff', padding: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  labelStyle: {
    component: FormValidationMessage,
    children: 'bad things',
    props: { labelStyle: { backgroundColor: '#2ff', padding: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontFamily: {
    component: FormValidationMessage,
    children: 'bad things',
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
    Forms: { sectionComponents: { FormValidationMessage: { samples } } },
  },
  options
);

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
