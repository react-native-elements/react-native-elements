import * as React from 'react';
import { Slider, Icon } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const SliderPlayground = () => {
  const params = useView({
    componentName: 'Slider',
    props: {
      animateTransitions: {
        value: true,
        type: PropTypes.Boolean,
      },
      animationConfig: {
        valie: `{}`,
        type: PropTypes.Object,
      },
      animationType: {
        value: 'timing',
        options: {
          timing: 'timing',
          spring: 'spring',
        },
        type: PropTypes.Enum,
        description: 'Defines the Animation type.',
      },
      debugTouchArea: {
        type: PropTypes.Boolean,
        value: false,
        description:
          'Set this to true to visually see the thumb touch rect in green.',
      },
      disabled: {
        type: PropTypes.Boolean,
        value: false,
        description: 'Disables the slider',
      },
      maximumTrackTintColor: {
        type: PropTypes.String,
        value: '#ccc',
      },
      maximumValue: {
        value: 100,
        type: PropTypes.Number,
      },
      minimumTrackTintColor: {
        type: PropTypes.String,
        value: '#222',
      },

      minimumValue: {
        value: 0,
        type: PropTypes.Number,
      },

      allowTouchTrack: {
        type: PropTypes.Boolean,
        value: false,
        description:
          'If true, thumb will respond and jump to any touch along the track.',
      },
      onSlidingComplete: {
        type: PropTypes.Function,
        value: `() => console.log("onSlidingComplete()")`,
      },
      onSlidingStart: {
        type: PropTypes.Function,
        value: `() => console.log("onSlidingStart()")`,
      },
      onValueChange: {
        type: PropTypes.Function,
        value: `(value) => console.log("onValueChange()",value)`,
      },

      orientation: {
        value: 'horizontal',
        options: {
          horizontal: 'horizontal',
          vertical: 'vertical',
        },
        type: PropTypes.Enum,
        description: "Slider's Orientation",
      },

      step: {
        value: 1,
        type: PropTypes.Number,
      },

      style: {
        value: `{width:"80%",height:200}`,
        type: PropTypes.Object,
      },

      thumbStyle: {
        value: `{ height: 20, width: 20 }`,
        type: PropTypes.Object,
      },

      thumbProps: {
        value: `{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#f50"
            />
          ),
        }`,
        type: PropTypes.Object,
      },

      thumbTintColor: {
        type: PropTypes.String,
        value: `#0c0`,
      },

      thumbTouchSize: {
        type: PropTypes.Object,
        value: `{width: 40, height: 40}`,
      },
      trackStyle: {
        value: `{ height: 10,borderRadius:20 }`,
        type: PropTypes.Object,
      },

      value: {
        value: 50,
        type: PropTypes.Number,
      },
    },
    scope: {
      Slider,
      Icon,
    },
    imports: {
      '@rneui/base': {
        named: ['Slider', 'Icon'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default SliderPlayground;
