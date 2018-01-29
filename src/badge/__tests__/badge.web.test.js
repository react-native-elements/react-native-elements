import React from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Badge from '../badge';

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

const props = {
  noProps: {
    component: Badge,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  value: {
    component: Badge,
    props: { value: 7 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerStyle: {
    component: Badge,
    props: { value: 'seven', containerStyle: { backgroundColor: '#071' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  wrapperStyle: {
    component: Badge,
    props: { value: 'seven', wrapperStyle: { alignSelf: 'flex-start' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  textStyle: {
    component: Badge,
    props: {
      value: 'seven',
      textStyle: { fontSize: 30 },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  children: {
    component: Badge,
    children: [
      <Text style={{ color: 'white' }}>a text node</Text>,
      <Text style={{ color: 'white' }}>a text node</Text>,
    ],
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {
      script: `const Text = RN.Text;\n`,
    },
  },
  onPress: {
    component: Badge,
    props: {
      value: 'press',
      onPress: () => {
        console.log('pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  component: {
    component: Badge,
    props: { component: TouchableOpacity },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return `const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;
  <Badge 
    value='TouchableWithoutFeedback'
    component={TouchableWithoutFeedback}
    textStyle={{ color: '#071'}}
    onPress={() => console.log('pressed')}
  />`;
      },
    },
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Misc: { sectionComponents: { Badge: { samples } } },
  },
  options
);

describe('Badge Badge', () => {
  it('should render without issue', () => {
    const component = shallow(<Badge />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should show error if value and child are included', () => {
    const component = shallow(
      <Badge value="Hello">
        <Text />
      </Badge>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render if element included', () => {
    const component = shallow(
      <Badge>
        <Text title="foo" />
      </Badge>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.props().children.props.children.props.title).toBe('foo');
  });

  it('should pass value props should still work', () => {
    const component = shallow(<Badge value="foo" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply text style in the badge', () => {
    const component = shallow(<Badge textStyle={{ color: 'orange' }} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply container style in the badge', () => {
    const component = shallow(
      <Badge containerStyle={{ backgroundColor: 'orange' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow adding custom element', () => {
    const component = shallow(<Badge element={<Text>Hello</Text>} />);

    expect(component.find('Text').props().children).toBe('Hello');
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow wrapper style', () => {
    const component = shallow(<Badge wrapperStyle={{}} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
