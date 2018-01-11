import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
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
import Slider from '../Slider';

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
    component: Slider,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  value: {
    component: Slider,
    props: { value: 0.7 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  minimumValue: {
    component: Slider,
    props: { value: 0.7, minimumValue: 0.2 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  maximumValue: {
    component: Slider,
    props: { maximumValue: 0.7 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  step: {
    component: Slider,
    props: { step: 0.25 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  minimumTrackTintColor: {
    component: Slider,
    props: { minimumTrackTintColor: '#071' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  maximumTrackTintColor: {
    component: Slider,
    props: { maximumTrackTintColor: '#071' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  thumbTouchSize: {
    component: Slider,
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
    component: Slider,
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
    component: Slider,
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
    component: Slider,
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
    component: Slider,
    props: { style: { borderWidth: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  trackStyle: {
    component: Slider,
    props: { trackStyle: { borderWidth: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  thumbStyle: {
    component: Slider,
    props: { thumbStyle: { width: 100, height: 100 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  debugTouchArea: {
    component: Slider,
    props: { debugTouchArea: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  animateTransitions: {
    component: Slider,
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
    component: Slider,
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
    component: Slider,
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

describe('Slider component', () => {
  it('should render without issues', () => {
    const component = shallow(<Slider />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with ThumbTouchRect', () => {
    const component = shallow(
      <Slider debugTouchArea={true} minimumValue={0} maximumValue={100} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render vertically', () => {
    const component = shallow(<Slider orientation="vertical" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onValueChange', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        onValueChange={customFunction}
        allMeasured={true}
      />
    );

    expect(component.props().value).toBe(20);
    component.simulate('ValueChange', 30);
    expect(customFunction).toHaveBeenCalledTimes(1);
  });
});
