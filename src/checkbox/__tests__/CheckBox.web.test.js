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
import CheckBox from '../CheckBox';

const props = {
  noProps: {
    component: CheckBox,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'component, title, checked, & onIconPress': {
    component: CheckBox,
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
    component: CheckBox,
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
    component: CheckBox,
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
    component: CheckBox,
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
    component: CheckBox,
    props: { containerStyle: { backgroundColor: '#071' } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'textStyle & title': {
    component: CheckBox,
    props: { textStyle: { backgroundColor: '#071' }, title: 'Title' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'onLongPress, title, checked, & onIconPress': {
    component: CheckBox,
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
    component: CheckBox,
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
    component: CheckBox,
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
    component: CheckBox,
    props: { checked: true, checkedIcon: 'bell-o' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  uncheckedIcon: {
    component: CheckBox,
    props: { uncheckedIcon: 'bell-slash-o' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  checkedColor: {
    component: CheckBox,
    props: { checked: true, checkedColor: '#22d' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  uncheckedColor: {
    component: CheckBox,
    props: { uncheckedColor: '#d22' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'checkedTitle, title, checked, & onIconPress': {
    component: CheckBox,
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
    component: CheckBox,
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

describe('CheckBox Component', () => {
  it('should render without issues', () => {
    const component = shallow(<CheckBox />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should use TouchableOpacity as default component', () => {
    const component = shallow(<CheckBox />);

    expect(component.find('TouchableOpacity').length).toBe(1);
  });

  it('should allow to pass custom component', () => {
    const View = jest.fn();
    const component = shallow(<CheckBox component={View} />);

    expect(component.find('View').length).toBe(1);
  });

  it('should render title in Text', () => {
    const component = shallow(<CheckBox title="Custom Text" checked />);

    expect(component.props().children.props.children[1].props.children).toBe(
      'Custom Text'
    );
  });

  it('should render with icon and checked', () => {
    const component = shallow(
      <CheckBox
        iconType="font-awesome"
        checkedColor="red"
        containerStyle={{ backgroundColor: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icon and iconRight', () => {
    const component = shallow(
      <CheckBox
        iconType="font-awesome"
        iconRight
        uncheckedColor="blue"
        rigth
        center
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
