import React from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
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
import SocialIcon from '../SocialIcon';

const props = {
  noProps: {
    component: SocialIcon,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  title: {
    component: SocialIcon,
    props: { type: 'medium', title: 'medium', button: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  type: {
    component: SocialIcon,
    props: { type: 'medium' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  raised: {
    component: SocialIcon,
    props: { type: 'medium', raised: false },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  button: {
    component: SocialIcon,
    props: { type: 'medium', button: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  onPress: {
    component: SocialIcon,
    props: {
      type: 'medium',
      onPress: () => {
        console.log('pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  onLongPress: {
    component: SocialIcon,
    props: {
      type: 'medium',
      onLongPress: () => {
        console.log('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  light: {
    component: SocialIcon,
    props: { type: 'medium', light: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  iconStyle: {
    component: SocialIcon,
    props: {
      type: 'medium',
      button: true,
      iconStyle: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  style: {
    component: SocialIcon,
    props: {
      type: 'medium',
      button: true,
      style: { width: 120, transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  iconColor: {
    component: SocialIcon,
    props: { type: 'medium', iconColor: '#071' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  underlayColor: {
    component: SocialIcon,
    props: {
      type: 'medium',
      onPress: () => {},
      underlayColor: 'yellow',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  iconSize: {
    component: SocialIcon,
    props: { type: 'medium', iconSize: 40 },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  component: {
    component: SocialIcon,
    props: { type: 'medium', component: TouchableWithoutFeedback },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return `const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;
  <SocialIcon
    type='medium'
    component={TouchableWithoutFeedback}
  />`;
      },
    },
  },
  fontFamily: {
    component: SocialIcon,
    props: {
      type: 'medium',
      fontFamily: 'Courier New',
      title: 'medium',
      button: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  fontWeight: {
    component: SocialIcon,
    props: {
      type: 'medium',
      fontWeight: 'bold',
      title: 'medium',
      button: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  fontStyle: {
    component: SocialIcon,
    props: {
      type: 'medium',
      fontStyle: { padding: 50 },
      title: 'medium',
      button: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  disabled: {
    component: SocialIcon,
    props: { type: 'medium', disabled: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  loading: {
    component: SocialIcon,
    props: { type: 'medium', loading: true, title: 'medium', button: true },
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
    Icons: { sectionComponents: { SocialIcon: { samples } } },
  },
  options
);
describe('SocialIcon component', () => {
  it('should render without issues', () => {
    const component = shallow(<SocialIcon type="twitter" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should show loading indicator', () => {
    const component = shallow(<SocialIcon type="twitter" loading />);

    expect(component.find('ActivityIndicator').length).toBe(1);
  });

  it('should render light social icon', () => {
    const component = shallow(
      <SocialIcon light raised={false} type="medium" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render social icon button', () => {
    const component = shallow(
      <SocialIcon title="Sign In With Facebook" button type="facebook" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<SocialIcon onPress={onPress} type="gitlab" />);

    component.simulate('press');
    expect(onPress).toHaveBeenCalled();
  });
});
