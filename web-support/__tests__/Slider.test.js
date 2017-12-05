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
import { Slider as Component } from '../../src';

const getJsxStringToChangeSliderValue = attr => {
  const refId = genRefId();
  const execFunc = Function(`setState({value: 0.98});`);
  const buttonTitle = 'change state.value';

  return `<View>
      <TouchableHighlight
        onPress={() => { setState({value: 0.98})}}
        style={{ backgroundColor: '#aaa', padding: 10, marginBottom: 15 }}
      >
        <Text>change state.value</Text>
      </TouchableHighlight>
      {React.createElement(Slider, {
        animateTransitions: true,
        animationType: 'spring',
        animationConfig: {
          friction: 10,
          tension: 11,
        },
        ref:(ref) => {${refId} = ref},
        value:state.value
      })}
    </View>`;
};

const props = {
  'no props': {
    component: Component,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  value: {
    component: Component,
    props: { value: 0.7 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  minimumValue: {
    component: Component,
    props: { value: 0.7, minimumValue: 0.2 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  maximumValue: {
    component: Component,
    props: { maximumValue: 0.7 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  step: {
    component: Component,
    props: { step: 0.25 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  minimumTrackTintColor: {
    component: Component,
    props: { minimumTrackTintColor: '#071' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  maximumTrackTintColor: {
    component: Component,
    props: { maximumTrackTintColor: '#071' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  thumbTouchSize: {
    component: Component,
    props: {
      thumbTouchSize: { width: 100, height: 100 },
      debugTouchArea: true,
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onValueChange: {
    component: Component,
    props: {
      onValueChange: value => {
        console.log(value);
      },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onSlidingStart: {
    component: Component,
    props: {
      onSlidingStart: () => {
        console.log('slidingStarted');
      },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onSlidingComplete: {
    component: Component,
    props: {
      onSlidingComplete: value => {
        console.log('slidingComplete: ' + value);
      },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  style: {
    component: Component,
    props: { style: { borderWidth: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  trackStyle: {
    component: Component,
    props: { trackStyle: { borderWidth: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  thumbStyle: {
    component: Component,
    props: { thumbStyle: { width: 100, height: 100 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  debugTouchArea: {
    component: Component,
    props: { debugTouchArea: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  animateTransitions: {
    component: Component,
    props: { animateTransitions: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {
      script: `const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\ninitialState = { value: 0.1 };\n\n`,
      getJsxString: attr => {
        const refId = genRefId();
        const execFunc = Function(`setState({value: 0.98});`);
        const buttonTitle = 'change state.value';

        return `<View>
            <TouchableHighlight
              onPress={() => { setState({value: 0.98})}}
              style={{ backgroundColor: '#aaa', padding: 10, marginBottom: 15 }}
            >
              <Text>change state.value</Text>
            </TouchableHighlight>
            {React.createElement(Slider, {
              animateTransitions: true,
              ref:(ref) => {${refId} = ref},
              value:state.value
            })}
          </View>`;
      },
    },
  },
  animationType: {
    component: Component,
    props: { animateTransitions: true, animationType: 'spring' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {
      script: `const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\ninitialState = { value: 0.1 };\n\n`,
      getJsxString: attr => {
        const refId = genRefId();
        const execFunc = Function(`setState({value: 0.98});`);
        const buttonTitle = 'change state.value';

        return `<View>
            <TouchableHighlight
              onPress={() => { setState({value: 0.98})}}
              style={{ backgroundColor: '#aaa', padding: 10, marginBottom: 15 }}
            >
              <Text>change state.value</Text>
            </TouchableHighlight>
            {React.createElement(Slider, {
              animateTransitions: true,
              animationType: 'spring',
              animationConfig: {
                friction: 10,
                tension: 11,
              },
              ref:(ref) => {${refId} = ref},
              value:state.value
            })}
          </View>`;
      },
    },
  },
  animationConfig: {
    component: Component,
    props: {
      animateTransitions: true,
      animationType: 'spring',
      animationConfig: {
        friction: 10,
        tension: 11,
      },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {
      script: `const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\ninitialState = { value: 0.1 };\n\n`,
      getJsxString: attr => {
        const refId = genRefId();
        const execFunc = Function(`setState({value: 0.98});`);
        const buttonTitle = 'change state.value';

        return `<View>
            <TouchableHighlight
              onPress={() => { setState({value: 0.98})}}
              style={{ backgroundColor: '#aaa', padding: 10, marginBottom: 15 }}
            >
              <Text>change state.value</Text>
            </TouchableHighlight>
            {React.createElement(Slider, {
              animateTransitions: true,
              animationType: 'timing',
              animationConfig: {
                duration: 2000,
              },
              ref:(ref) => {${refId} = ref},
              value:state.value
            })}
          </View>`;
      },
    },
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Input: { sectionComponents: { Slider: { samples } } },
  },
  options
);
