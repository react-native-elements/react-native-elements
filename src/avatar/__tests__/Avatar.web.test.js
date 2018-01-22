import React from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
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
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Avatar from '../Avatar';

const props = {
  noProps: {
    component: Avatar,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  component: {
    component: Avatar,
    props: { component: TouchableOpacity },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return `const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;
  <Avatar 
    component={TouchableWithoutFeedback}
    onPress={() => console.log('pressed')}
  />`;
      },
    },
  },
  'width & height': {
    component: Avatar,
    props: { width: 68, height: 34 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onPress: {
    component: Avatar,
    props: {
      onPress: () => {
        console.log('pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onLongPress: {
    component: Avatar,
    props: {
      onLongPress: () => {
        console.log('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  containerStyle: {
    component: Avatar,
    props: { containerStyle: { padding: 50 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  source: {
    component: Avatar,
    props: {
      source: 'hero.jpg',
      width: 250,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  avatarStyle: {
    component: Avatar,
    props: {
      source: 'hero.jpg',
      avatarStyle: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  rounded: {
    component: Avatar,
    props: { rounded: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  title: {
    component: Avatar,
    props: { title: 'hero' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  titleStyle: {
    component: Avatar,
    props: { title: 'hero', titleStyle: { fontWeight: 'bold' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  overlayContainerStyle: {
    component: Avatar,
    props: { overlayContainerStyle: { borderWidth: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  activeOpacity: {
    component: Avatar,
    props: {
      onPress: () => {},
      activeOpacity: 0.71,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  icon: {
    component: Avatar,
    props: {
      icon: { name: 'sms', color: '#071', size: 35, type: 'octicons' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  iconStyle: {
    component: Avatar,
    props: {
      icon: { name: 'sms', color: '#071', size: 35, type: 'octicons' },
      iconStyle: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  small: {
    component: Avatar,
    props: { small: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  medium: {
    component: Avatar,
    props: { medium: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  large: {
    component: Avatar,
    props: { large: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  xlarge: {
    component: Avatar,
    props: { xlarge: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  showEditButton: {
    component: Avatar,
    props: { showEditButton: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onEditPress: {
    component: Avatar,
    props: {
      showEditButton: true,
      onEditPress: () => {
        console.log('edit pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  editButton: {
    component: Avatar,
    props: {
      xlarge: true,
      showEditButton: true,
      editButton: {
        size: 30,
        iconName: 'sms',
        iconType: 'octicons',
        iconColor: '#071',
        underlayColor: 'yellow',
        style: { backgroundColor: '#7d8' },
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Misc: { sectionComponents: { Avatar: { samples } } },
  },
  options
);

describe('Avatar Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Avatar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render small avatar', () => {
    const component = shallow(
      <Avatar
        small
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        activeOpacity={0.7}
        avatarStyle={{ backgroundColor: 'peru' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render medium avatar', () => {
    const component = shallow(
      <Avatar
        medium
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        activeOpacity={0.7}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render large avatar', () => {
    const component = shallow(
      <Avatar
        large
        rounded
        icon={{ color: 'blue', name: 'name', size: 22, type: 'type' }}
        activeOpacity={0.7}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render xlarge avatar', () => {
    const component = shallow(
      <Avatar xlarge rounded title="avatar title" activeOpacity={0.7} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render avatar without width', () => {
    const component = shallow(
      <Avatar
        height={90}
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        activeOpacity={0.7}
        avatarStyle={{ backgroundColor: 'peru' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render avatar without height', () => {
    const component = shallow(
      <Avatar width={80} title="avatar title" titleStyle={{ color: 'red' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
