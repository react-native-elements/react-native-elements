import React from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  Platform,
} from 'react-native';
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
import Icon from '../Icon';

const props = {
  noProps: {
    component: Icon,
    enzyme: {
      tests: {
        shallow: { snapshot: snapShot() },
      },
    },
    styleguidist: {},
  },
  name: {
    component: Icon,
    props: { name: 'pets' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  type: {
    component: Icon,
    props: { name: 'sms', type: 'octicons' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  size: {
    component: Icon,
    props: { name: 'pets', size: 50 },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  color: {
    component: Icon,
    props: { name: 'pets', color: '#071' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  iconStyle: {
    component: Icon,
    props: { name: 'pets', iconStyle: { transform: [{ rotateZ: '-45deg' }] } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  component: {
    component: Icon,
    props: { name: 'pets', component: TouchableWithoutFeedback },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return `  const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;
  <Icon
  name='pets'
    component={TouchableWithoutFeedback}
  />`;
      },
    },
  },
  onPress: {
    component: Icon,
    props: {
      name: 'pets',
      onPress: () => {
        console.log('pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  onLongPress: {
    component: Icon,
    props: {
      name: 'pets',
      onLongPress: () => {
        console.log('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  underlayColor: {
    component: Icon,
    props: {
      name: 'pets',
      onPress: () => {
        console.log('pressed');
      },
      underlayColor: 'yellow',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  reverse: {
    component: Icon,
    props: { name: 'pets', reverse: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  raised: {
    component: Icon,
    props: { name: 'pets', raised: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  containerStyle: {
    component: Icon,
    props: { name: 'pets', containerStyle: { padding: 50 } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  reverseColor: {
    component: Icon,
    props: { name: 'pets', reverse: true, reverseColor: '#071' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
};
const samples = {
  props,
};

parseSamples(
  {
    Icons: { sectionComponents: { Icon: { samples } } },
  },
  options
);

describe('Icon component', () => {
  it('should render without issues', () => {
    const component = shallow(<Icon name="wifi" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icon type', () => {
    const component = shallow(
      <Icon
        name="alert"
        type="octicon"
        reverse
        color="red"
        iconStyle={{ backgroundColor: 'peru' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<Icon onPress={onPress} name="wifi" />);

    component.simulate('press');
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
