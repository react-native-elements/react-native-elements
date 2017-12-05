import React from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
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
import { ButtonGroup as Component } from '../../src';

const buttons = ['button one', 'button two', 'button three'];

const props = {
  // noProps: {
  //   component: Component,
  //   enzyme: {
  //     tests: onlySnapshots,
  //   },
  //   styleguidist: {},
  // },
  selectedIndex: {
    component: Component,
    props: { buttons, selectedIndex: 1 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onPress: {
    component: Component,
    props: {
      buttons,
      onPress: idx => {
        console.log('pressed: ' + idx);
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  buttons: {
    component: Component,
    props: { buttons },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  component: {
    component: Component,
    props: { buttons, component: TouchableWithoutFeedback },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {
      getJsxString: () => {
        return `const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;
  <ButtonGroup buttons={['button one', 'button two', 'button three']}
    component={TouchableWithoutFeedback}
  />`;
      },
    },
  },
  containerStyle: {
    component: Component,
    props: { buttons, containerStyle: { alignSelf: 'flex-start' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  buttonStyle: {
    component: Component,
    props: {
      buttons,
      buttonStyle: {
        width: 150,
        backgroundColor: '#aaa',
      },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  'buttonStyle & containerStyle': {
    component: Component,
    props: {
      buttons,
      buttonStyle: {
        width: 150,
        backgroundColor: '#aaa',
      },
      containerStyle: { alignSelf: 'flex-start' },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  selectedBackgroundColor: {
    component: Component,
    props: { buttons, selectedBackgroundColor: '#071', selectedIndex: 1 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerBorderRadius: {
    component: Component,
    props: { buttons, containerBorderRadius: 20 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  textStyle: {
    component: Component,
    props: { buttons, textStyle: { backgroundColor: '#071' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  selectedTextStyle: {
    component: Component,
    props: {
      buttons,
      selectedTextStyle: { backgroundColor: '#071' },
      selectedIndex: 1,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  innerBorderStyle: {
    component: Component,
    props: { buttons, innerBorderStyle: { width: 10, color: '#071' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  underlayColor: {
    component: Component,
    props: { buttons, underlayColor: 'yellow' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  disableSelected: {
    component: Component,
    props: { buttons, disableSelected: true, selectedIndex: 1 },
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
    Buttons: { sectionComponents: { ButtonGroup: { samples } } },
  },
  options
);
