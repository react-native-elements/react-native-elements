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
} from '../samples';

import { Avatar as Component } from '../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  component: {
    component: Component,
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
    component: Component,
    props: { width: 68, height: 34 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onPress: {
    component: Component,
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
    component: Component,
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
    component: Component,
    props: { containerStyle: { padding: 50 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  source: {
    component: Component,
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
    component: Component,
    props: {
      source: 'hero.jpg',
      avatarStyle: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  imageProps: {
    component: Component,
    props: {
      source: 'hero.jpg',
      width: 250,
      imageProps: { resizeMode: 'center' },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  rounded: {
    component: Component,
    props: { rounded: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  title: {
    component: Component,
    props: { title: 'hero' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  titleStyle: {
    component: Component,
    props: { title: 'hero', titleStyle: { fontWeight: 'bold' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  overlayContainerStyle: {
    component: Component,
    props: { overlayContainerStyle: { borderWidth: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  activeOpacity: {
    component: Component,
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
    component: Component,
    props: {
      icon: { name: 'sms', color: '#071', size: 35, type: 'octicons' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  iconStyle: {
    component: Component,
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
    component: Component,
    props: { small: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  medium: {
    component: Component,
    props: { medium: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  large: {
    component: Component,
    props: { large: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  xlarge: {
    component: Component,
    props: { xlarge: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  showEditButton: {
    component: Component,
    props: { showEditButton: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onEditPress: {
    component: Component,
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
    component: Component,
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
