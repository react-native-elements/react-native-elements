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
import { CheckBox as Component } from '../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'component, title, checked, & onIconPress': {
    component: Component,
    props: {
      component: TouchableWithoutFeedback,
      checked: true,
      title: 'Title',
      onIconPress: () => {
        let x = 7;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return `const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;
  <CheckBox 
    component={TouchableWithoutFeedback}
    title="title"
    checked={state.checked}
    onIconPress={() => {
      setState({ checked: !state.checked });
    }}
  />`;
      },
    },
  },
  'iconRight, title, checked, & onIconPress': {
    component: Component,
    props: {
      iconRight: true,
      title: 'Title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () => {
        return `<CheckBox
    iconRight
    title="title"
    checked={state.checked}
    onIconPress={() => {
      setState({ checked: !state.checked });
    }}
  />`;
      },
    },
  },
  'right, title, checked, & onIconPress': {
    component: Component,
    props: {
      right: true,
      title: 'Title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () => {
        return `<CheckBox
  right
  title="title"
  checked={state.checked}
  onIconPress={() => {
    setState({ checked: !state.checked });
  }}
/>`;
      },
    },
  },
  'center, title, checked, & onIconPress': {
    component: Component,
    props: {
      center: true,
      title: 'Title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () => {
        return `<CheckBox
    center
    title="title"
    checked={state.checked}
    onIconPress={() => {
      setState({ checked: !state.checked });
    }}
  />`;
      },
    },
  },
  containerStyle: {
    component: Component,
    props: { containerStyle: { backgroundColor: '#071' } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'textStyle & title': {
    component: Component,
    props: { textStyle: { backgroundColor: '#071' }, title: 'Title' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'onLongPress, title, checked, & onIconPress': {
    component: Component,
    props: {
      title: 'Title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
      onLongPress: () => {
        let y = 8;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () => {
        return `<CheckBox
    title="title"
    checked={state.checked}
    onIconPress={() => {
      setState({ checked: !state.checked });
    }}
    onLongPress={() => {
      console.log("pressed, long");
    }}
  />`;
      },
    },
  },
  'onLongIconPress, title, checked, & onIconPress': {
    component: Component,
    props: {
      title: 'Title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
      onLongPress: () => {
        let y = 8;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () => {
        return `<CheckBox
    title="title"
    checked={state.checked}
    onIconPress={() => {
      setState({ checked: !state.checked });
    }}
    onLongIconPress={() => {
      console.log("pressed, long");
    }}
  />`;
      },
    },
  },
  'onPress, title, checked, & onIconPress': {
    component: Component,
    props: {
      title: 'Title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
      onPress: () => {
        let y = 8;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () => {
        return `<CheckBox
    title="title"
    checked={state.checked}
    onIconPress={() => {
      setState({ checked: !state.checked });
    }}
    onPress={() => {
      setState({ checked: !state.checked });
    }}
  />`;
      },
    },
  },
  checkedIcon: {
    component: Component,
    props: { checked: true, checkedIcon: 'bell-o' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  uncheckedIcon: {
    component: Component,
    props: { uncheckedIcon: 'bell-slash-o' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  checkedColor: {
    component: Component,
    props: { checked: true, checkedColor: '#22d' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  uncheckedColor: {
    component: Component,
    props: { uncheckedColor: '#d22' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'checkedTitle, title, checked, & onIconPress': {
    component: Component,
    props: {
      checkedTitle: 'title - is checked',
      title: 'Title',
      checked: true,
      onIconPress: () => {
        let x = 7;
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { checked: false };`,
      getJsxString: () => {
        return `<CheckBox
    checkedTitle="title - is checked"
    title="title"
    checked={state.checked}
    onIconPress={() => {
      setState({ checked: !state.checked });
    }}
  />`;
      },
    },
  },
  fontFamily: {
    component: Component,
    props: { title: 'Title', fontFamily: 'Courier New' },
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
    Input: { sectionComponents: { CheckBox: { samples } } },
  },
  options
);
