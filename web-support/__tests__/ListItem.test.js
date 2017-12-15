import React from 'react';
import {
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
import { ListItem as Component } from '../../src';

const props = {
  'no props': {
    component: Component,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  avatar: {
    component: Component,
    props: { title: 'Title', avatar: 'hero.jpg' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  avatarStyle: {
    component: Component,
    props: {
      title: 'Title',
      avatar: 'hero.jpg',
      avatarStyle: { transform: [{ rotateZ: '-45deg' }] },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  avatarContainerStyle: {
    component: Component,
    props: {
      title: 'Title',
      avatar: 'hero.jpg',
      avatarContainerStyle: { padding: 50 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  avatarOverlayContainerStyle: {
    component: Component,
    props: {
      title: 'Title',
      avatar: 'hero.jpg',
      avatarOverlayContainerStyle: { padding: 25 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  chevronColor: {
    component: Component,
    props: { title: 'Title', chevronColor: '#071' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  component: {
    component: Component,
    props: {
      title: 'Title',
      onPress: () => {
        console.log('pressed');
      },
      component: TouchableWithoutFeedback,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return `const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;
  <ListItem 
    title="title"
    onPress={ () => {
      console.log("pressed");
    }}
    component={TouchableWithoutFeedback}
  />`;
      },
    },
  },
  containerStyle: {
    component: Component,
    props: { title: 'Title', containerStyle: { borderWidth: 5 } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  wrapperStyle: {
    component: Component,
    props: { title: 'Title', wrapperStyle: { borderWidth: 5 } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'underlayColor & onPress': {
    component: Component,
    props: {
      title: 'Title',
      underlayColor: 'yellow',
      onPress: () => {
        console.log('pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  fontFamily: {
    component: Component,
    props: { title: 'Title', fontFamily: 'Courier New' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  hideChevron: {
    component: Component,
    props: { title: 'Title', hideChevron: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onLongPress: {
    component: Component,
    props: {
      title: 'Title',
      onLongPress: () => {
        console.log('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  roundAvatar: {
    component: Component,
    props: { title: 'Title', avatar: 'hero.jpg', roundAvatar: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  titleNumberOfLines: {
    component: Component,
    props: { title: 'line1\\nline2\\nline3', titleNumberOfLines: 3 },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  titleStyle: {
    component: Component,
    props: {
      title: 'Title',
      avatar: 'hero.jpg',
      titleStyle: { marginTop: -25 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  titleContainerStyle: {
    component: Component,
    props: {
      title: 'Title',
      avatar: 'hero.jpg',
      titleContainerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  subtitle: {
    component: Component,
    props: { title: 'Title', subtitle: 'subtitle' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  subtitleNumberOfLines: {
    component: Component,
    props: {
      title: 'Title',
      subtitle: 'line1\\nline2\\nline3',
      subtitleNumberOfLines: 3,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  subtitleContainerStyle: {
    component: Component,
    props: {
      title: 'Title',
      subtitle: 'subtitle',
      avatar: 'hero.jpg',
      subtitleContainerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  subtitleStyle: {
    component: Component,
    props: {
      title: 'Title',
      subtitle: 'subtitle',
      avatar: 'hero.jpg',
      subtitleStyle: { color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightTitle: {
    component: Component,
    props: { title: 'Title', rightTitle: 'rightTitle' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightTitleNumberOfLines: {
    component: Component,
    props: {
      title: 'Title',
      rightTitle: 'line1\\nline2\\nline3',
      rightTitleNumberOfLines: 3,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightTitleContainerStyle: {
    component: Component,
    props: {
      title: 'Title',
      rightTitle: 'rightTitle',
      avatar: 'hero.jpg',
      rightTitleContainerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightTitleStyle: {
    component: Component,
    props: {
      title: 'Title',
      rightTitle: 'rightTitle',
      avatar: 'hero.jpg',
      rightTitleStyle: { color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  label: {
    component: Component,
    props: {
      title: 'Title',
      avatar: 'hero.jpg',
      label: <Text>label</Text>,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `const Text = RN.Text;\n`,
    },
  },
  leftIcon: {
    component: Component,
    props: {
      title: 'Title',
      avatar: 'hero.jpg',
      leftIcon: { name: 'pets', color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  leftIconOnPress: {
    component: Component,
    props: {
      title: 'Title',
      leftIcon: { name: 'pets', color: '#071' },
      leftIconOnPress: () => {
        console.log('leftIcon pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  leftIconOnLongPress: {
    component: Component,
    props: {
      title: 'Title',
      avatar: 'hero.jpg',
      leftIcon: { name: 'pets', color: '#071' },
      leftIconOnLongPress: () => {
        console.log('leftIcon pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  leftIconUnderlayColor: {
    component: Component,
    props: {
      title: 'Title',
      avatar: 'hero.jpg',
      leftIcon: { name: 'pets', color: '#071' },
      leftIconOnPress: () => {
        console.log('leftIcon pressed');
      },
      leftIconUnderlayColor: 'yellow',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightIcon: {
    component: Component,
    props: {
      title: 'Title',
      avatar: 'hero.jpg',
      rightIcon: { name: 'pets', color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onPressRightIcon: {
    component: Component,
    props: {
      title: 'Title',
      rightIcon: { name: 'pets', color: '#071' },
      onPressRightIcon: () => {
        console.log('rightIcon pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  switchButton: {
    component: Component,
    props: {
      title: 'Title',
      hideChevron: true,
      switchButton: true,
      onSwitch: () => {},
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { switchedOn: false };`,
      getJsxString: attr => {
        return `<ListItem
  title={'Title'}
  hideChevron={true}
  switchButton={true}
  switched={state.switchedOn}
  onSwitch={() => {setState({switchedOn: !state.switchedOn})}}
/>`;
      },
    },
  },
  switchDisabled: {
    component: Component,
    props: {
      title: 'Title',
      hideChevron: true,
      switchButton: true,
      switchDisabled: true,
      onSwitch: () => {},
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  switchOnTintColor: {
    component: Component,
    props: {
      title: 'Title',
      hideChevron: true,
      switchButton: true,
      onSwitch: () => {},
      switchOnTintColor: '#071',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { switchedOn: false };`,
      getJsxString: attr => {
        return `<ListItem
  title={'Title'}
  hideChevron={true}
  switchButton={true}
  switched={state.switchedOn}
  onSwitch={() => {setState({switchedOn: !state.switchedOn})}}
  switchOnTintColor="#071"
/>`;
      },
    },
  },
  switchThumbTintColor: {
    component: Component,
    props: {
      title: 'Title',
      hideChevron: true,
      switchButton: true,
      onSwitch: () => {},
      switchThumbTintColor: '#071',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { switchedOn: false };`,
      getJsxString: attr => {
        return `<ListItem
  title={'Title'}
  hideChevron={true}
  switchButton={true}
  switched={state.switchedOn}
  onSwitch={() => {setState({switchedOn: !state.switchedOn})}}
  switchThumbTintColor="#071"
  />`;
      },
    },
  },
  switchTintColor: {
    component: Component,
    props: {
      title: 'Title',
      hideChevron: true,
      switchButton: true,
      onSwitch: () => {},
      switchTintColor: '#071',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `initialState = { switchedOn: false };`,
      getJsxString: attr => {
        return `<ListItem
  title={'Title'}
  hideChevron={true}
  switchButton={true}
  switched={state.switchedOn}
  onSwitch={() => {setState({switchedOn: !state.switchedOn})}}
  switchTintColor="#071"
  />`;
      },
    },
  },
  textInput: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputAutoCapitalize: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputAutoCapitalize: 'characters',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputAutoCorrect: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputAutoCorrect: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  // textInputAutoFocus: {
  //   component: Component,
  //   props: {
  //     title: 'Title',
  //     textInput: true,
  //     textInputAutoFocus: true,
  //   },
  //   enzyme: {
  //     tests: { shallow: { snapshot: snapShot() } },
  //   },
  //   styleguidist: {},
  // },
  'textInputEditable & textInputValue': {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputEditable: false,
      textInputValue: 'example text',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  keyboardType: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      keyboardType: 'numeric',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputMaxLength: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputMaxLength: 7,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputMultiline: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputMultiline: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputOnChangeText: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputOnChangeText: text => {
        console.log(text);
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputOnFocus: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputOnFocus: () => {
        console.log('ListItem: textInputOnFocus');
      },
    },
    enzyme: {
      tests: {
        shallow: { snapshot: snapShot() },
      },
    },
    styleguidist: {},
  },
  textInputSecure: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputSecure: true,
      textInputOnChangeText: text => {
        console.log(text);
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputStyle: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputStyle: { color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputContainerStyle: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputContainerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputPlaceholder: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputPlaceholder: 'placeholder',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputOnBlur: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputOnBlur: () => {
        console.log('ListItem: textInputOnBlur');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputSelectTextOnFocus: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputValue: 'selectable text',
      textInputSelectTextOnFocus: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  textInputReturnKeyType: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputValue: 'selectable text',
      textInputReturnKeyType: 'go',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  disabled: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputValue: 'selectable text',
      disabled: true,
      leftIcon: { name: 'pets', color: '#071' },
      leftIconOnPress: () => {
        console.log('leftIcon pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  disabledStyle: {
    component: Component,
    props: {
      title: 'Title',
      textInput: true,
      textInputValue: 'selectable text',
      disabled: true,
      disabledStyle: { borderWidth: 5 },
      leftIcon: { name: 'pets', color: '#071' },
      leftIconOnPress: () => {
        console.log('leftIcon pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  badge: {
    component: Component,
    props: {
      title: 'Title',
      badge: {
        value: '7',
        containerStyle: { borderWidth: 2, borderColor: '#4b5' },
        textStyle: { color: '#4b5' },
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
    Lists: { sectionComponents: { ListItem: { samples } } },
  },
  options
);
