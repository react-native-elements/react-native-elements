import * as React from 'react';
import { CheckBox } from '@rneui/base';

import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const HeaderPlayground = () => {
  const params = useView({
    componentName: 'CheckBox',
    props: {
      center: {
        type: PropTypes.Boolean,
        value: false,
        description: 'Aligns checkbox to center (optional)',
      },
      right: {
        type: PropTypes.Boolean,
        value: false,
        description: 'Aligns checkbox to right (optional)',
      },
      checked: {
        type: PropTypes.Boolean,
        value: false,
        stateful: true,
        description: 'Flag for checking the icon (required)',
      },
      checkedColor: {
        type: PropTypes.String,
        value: '#0F0',
        description: 'Default checked color (optional)',
      },
      checkedIcon: {
        type: PropTypes.Object,
        value: ``,
        description: `string OR React Native Component	`,
      },
      checkedTitle: {
        type: PropTypes.String,
        value: `Great!`,
        description: 'Specify a custom checked message (optional)',
      },
      Component: {
        type: PropTypes.ReactNode,
        value: null,
        description: 'React Native Component',
      },
      containerStyle: {
        type: PropTypes.Object,
        value: `{width: "75%"}`,
        description: 'Style of main container (optional)',
      },
      fontFamily: {
        type: PropTypes.String,
        value: null,
        description: 'Specify different font family',
      },
      iconRight: {
        type: PropTypes.Boolean,
        value: false,
        description: 'Moves icon to right of text (optional)',
      },
      iconType: {
        type: PropTypes.String,
        value: null,
        description: 'type of icon set',
      },
      onIconPress: {
        type: PropTypes.Function,
        value: `() => setChecked(!checked)`,
        propHook: {
          what: '!checked',
          into: 'checked',
        },
        description: 'onPress function for checkbox (required)',
      },
      onLongIconPress: {
        type: PropTypes.Function,
        value: `() => console.log("onLongIconPress()")`,
        description: 'onLongPress function for checkbox (optional)',
      },
      onLongPress: {
        type: PropTypes.Function,
        value: `() => console.log("onLongPress()")`,
        description: 'onLongPress function for checkbox (optional)',
      },
      onPress: {
        type: PropTypes.Function,
        value: `() => console.log("onPress()")`,
        description: 'onPress function for container (optional)',
      },
      size: {
        type: PropTypes.Number,
        value: 30,
        description: 'Size of the checkbox',
      },
      textStyle: {
        type: PropTypes.Object,
        value: `{}`,
        description: 'Style of text (optional)',
      },
      title: {
        type: PropTypes.Object,
        value: `"Check for Awesomeness"`,
        description: 'Title of checkbox',
      },
      titleProps: {
        type: PropTypes.Object,
        value: `{}`,
        description: 'Additional props for the title Text component (optional)',
      },
      uncheckedColor: {
        type: PropTypes.String,
        value: `#F00`,
        description: 'Default unchecked color (optional)',
      },
      uncheckedIcon: {
        type: PropTypes.Object,
        value: null,
        description: 'string OR React Native Component',
      },
    },
    scope: {
      CheckBox,
    },
    imports: {
      '@rneui/base': {
        named: ['CheckBox'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default HeaderPlayground;
