import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
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
} from '../../../samples';
import colors from '../../config/colors';
import Button from '../Button';
import Icon from '../../icons/Icon';

const icon = <Icon color="#fff" name="pets" />;

const props = {
  noProps: {
    component: Button,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerStyle: {
    component: Button,
    props: { containerStyle: { padding: 20, backgroundColor: '#071' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  buttonStyle: {
    component: Button,
    props: { buttonStyle: { padding: 20 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  text: {
    component: Button,
    props: { text: 'text prop' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
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
  textStyle: {
    component: Button,
    props: {
      text: 'button text',
      textStyle: { fontSize: 32, fontFamily: 'Courier New' },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  textProps: {
    component: Button,
    props: {
      text: 'button\\ntext',
      textProps: {
        numberOfLines: 2,
      },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  loading: {
    component: Button,
    props: { text: 'button text', loading: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  loadingStyle: {
    component: Button,
    props: {
      text: 'button text',
      loadingStyle: { marginRight: 50, opacity: 0.2 },
      loading: true,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  loadingProps: {
    component: Button,
    props: { loading: true, loadingProps: { size: 'large' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  icon: {
    component: Button,
    props: { icon },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  iconContainerStyle: {
    component: Button,
    props: { icon, iconContainerStyle: { borderWidth: 2 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  iconRight: {
    component: Button,
    props: { icon, iconRight: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  clear: {
    component: Button,
    props: {
      text: 'button text',
      textStyle: { color: '#071' },
      clear: true,
    },
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
