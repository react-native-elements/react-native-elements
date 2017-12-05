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
import { Button } from '../../src';

const props = {
  noProps: {
    component: Button,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerViewStyle: {
    component: Button,
    props: { containerViewStyle: { padding: 20 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  Component: {
    component: Button,
    props: {
      Component: TouchableWithoutFeedback,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return `const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;
  <Button 
    Component={TouchableWithoutFeedback}
  />`;
      },
    },
  },
  buttonStyle: {
    component: Button,
    props: { buttonStyle: { alignSelf: 'flex-start' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  title: {
    component: Button,
    props: { title: 'title prop' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  large: {
    component: Button,
    props: { title: 'button title', large: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontFamily: {
    component: Button,
    props: { title: 'button title', fontFamily: 'Courier New' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontWeight: {
    component: Button,
    props: { title: 'button title', fontWeight: 'bold' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  leftIcon: {
    component: Button,
    props: {
      title: 'button title',
      leftIcon: {
        name: 'gamepad',
        color: 'blue',
        size: 50,
        type: 'font-awesome',
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightIcon: {
    component: Button,
    props: {
      title: 'button title',
      rightIcon: {
        name: 'gamepad',
        color: 'red',
        size: 50,
        type: 'font-awesome',
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  iconComponent: {
    component: Button,
    props: {
      title: 'button title',
      iconComponent: props => {
        return <Text>{props.color} </Text>;
      },
      leftIcon: {
        name: 'gamepad',
        color: 'blue',
        size: 50,
        type: 'font-awesome',
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return `<Button
    iconComponent={props => { return <Text>{props.color} </Text> }}
    leftIcon={{
      color: 'blue',
    }}
    title="button title"
  />;`;
      },
    },
  },
  onPress: {
    component: Button,
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
    component: Button,
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
  backgroundColor: {
    component: Button,
    props: { backgroundColor: '#071' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  borderRadius: {
    component: Button,
    props: { borderRadius: 10 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  color: {
    component: Button,
    props: { title: 'button title', color: '#071' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  textStyle: {
    component: Button,
    props: { title: 'button title', textStyle: { backgroundColor: '#071' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontSize: {
    component: Button,
    props: { title: 'button title', fontSize: 30 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  underlayColor: {
    component: Button,
    props: { title: 'button title', underlayColor: 'yellow' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  raised: {
    component: Button,
    props: { raised: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  disabled: {
    component: Button,
    props: { disabled: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  disabledStyle: {
    component: Button,
    props: { disabledStyle: { backgroundColor: '#555' }, disabled: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  loading: {
    component: Button,
    props: { title: 'button title', loading: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  activityIndicatorStyle: {
    component: Button,
    props: {
      title: 'button title',
      activityIndicatorStyle: { marginRight: 50, opacity: 0.2 },
      loading: true,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  loadingRight: {
    component: Button,
    props: { title: 'button title', loadingRight: true, loading: true },
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
    Buttons: { sectionComponents: { Button: { samples } } },
  },
  options
);
