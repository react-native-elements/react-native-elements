import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
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
import { SearchBar as Component } from '../../src';

const props = {
  'no props': {
    component: Component,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  containerStyle: {
    component: Component,
    props: {
      containerStyle: { borderWidth: 5, borderColor: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  inputStyle: {
    component: Component,
    props: {
      inputStyle: { borderWidth: 5, borderColor: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  icon: {
    component: Component,
    props: {
      icon: { name: 'pets', color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  noIcon: {
    component: Component,
    props: {
      noIcon: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  lightTheme: {
    component: Component,
    props: {
      lightTheme: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  round: {
    component: Component,
    props: {
      round: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  underlineColorAndroid: {
    component: Component,
    props: {
      underlineColorAndroid: '#071',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  loadingIcon: {
    component: Component,
    props: {
      showLoadingIcon: true,
      loadingIcon: { color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  placeholder: {
    component: Component,
    props: {
      placeholder: 'placeholder',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  placeholderTextColor: {
    component: Component,
    props: {
      placeholder: 'placeholder',
      placeholderTextColor: '#071',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onChangeText: {
    component: Component,
    props: {
      onChangeText: text => {
        console.log(text);
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onClearText: {
    component: Component,
    props: {
      defaultValue: 'text to clear',
      clearIcon: { name: 'clear' },
      onClearText: () => {
        console.log('onClearText');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  clearIcon: {
    component: Component,
    props: {
      showLoadingIcon: true,
      clearIcon: { name: 'clear', color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
};

const methods = {
  focus: {
    component: Component,
    props: { defaultValue: 'cursor will appear' },
    styleguidist: {
      script: `const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n`,
      cd: 1000,
      buildJsx: buildJsxForGuideMethod,
    },
    enzyme: {
      tests: {
        shallow: {
          'ensure called': ensureCalled(),
        },
      },
    },
  },
  blur: {
    component: Component,
    props: { defaultValue: 'place cursor here and watch it be removed' },
    styleguidist: {
      script: `const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n`,
      cd: 3000,
      buildJsx: buildJsxForGuideMethod,
    },
    enzyme: {
      tests: {
        shallow: {
          'ensure called': ensureCalled(),
        },
      },
    },
  },
  clearText: {
    component: Component,
    props: { defaultValue: 'text to clear' },
    styleguidist: {
      script: `const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n`,
      buildJsx: buildJsxForGuideMethod,
    },
    enzyme: {
      tests: {
        shallow: {
          'ensure called': ensureCalled(),
        },
      },
    },
  },
};
const samples = {
  props,
  methods,
};

parseSamples(
  {
    Input: { sectionComponents: { SearchBar: { samples } } },
  },
  options
);
