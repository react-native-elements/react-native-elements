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
import ButtonGroup from '../ButtonGroup';

let buttons = ['button one', 'button two', 'button three'];

const props = {
  // noProps: {
  //   component: ButtonGroup,
  //   enzyme: {
  //     tests: onlySnapshots,
  //   },
  //   styleguidist: {},
  // },
  selectedIndex: {
    component: ButtonGroup,
    props: { buttons, selectedIndex: 1 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onPress: {
    component: ButtonGroup,
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
    component: ButtonGroup,
    props: { buttons },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  component: {
    component: ButtonGroup,
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
    component: ButtonGroup,
    props: { buttons, containerStyle: { alignSelf: 'flex-start' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  buttonStyle: {
    component: ButtonGroup,
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
    component: ButtonGroup,
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
  selectedButtonStyle: {
    component: ButtonGroup,
    props: {
      buttons,
      selectedButtonStyle: { backgroundColor: '#071' },
      selectedIndex: 1,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerBorderRadius: {
    component: ButtonGroup,
    props: { buttons, containerBorderRadius: 20 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  textStyle: {
    component: ButtonGroup,
    props: { buttons, textStyle: { backgroundColor: '#071' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  selectedTextStyle: {
    component: ButtonGroup,
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
    component: ButtonGroup,
    props: { buttons, innerBorderStyle: { width: 10, color: '#071' } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  underlayColor: {
    component: ButtonGroup,
    props: { buttons, underlayColor: 'yellow' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  disableSelected: {
    component: ButtonGroup,
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

buttons = ['Button 1', 'Button 2', 'Button 3'];
const buttonsElement = [{ element: 'Text' }, { element: 'View' }];

describe('ButtonGroup ButtonGroup', () => {
  it('should render without issues', () => {
    const component = shallow(<ButtonGroup buttons={buttons} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(
      <ButtonGroup
        buttons={buttons}
        onPress={onPress}
        containerStyle={{ backgroundColor: 'yellow' }}
        buttonStyle={{ backgroundColor: 'blue' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render selectedIndex', () => {
    const component = shallow(
      <ButtonGroup
        buttons={buttons}
        selectedIndex={1}
        selectedButtonStyle={{ backgroundColor: 'red' }}
        selectedTextStyle={{ fontSize: 12 }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with button.element', () => {
    const component = shallow(
      <ButtonGroup
        buttons={buttonsElement}
        innerBorderStyle={{ width: 300, color: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render lastButtonStyle', () => {
    const component = shallow(
      <ButtonGroup
        buttons={buttons}
        lastBorderStyle={{ backgroundColor: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
