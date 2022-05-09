import * as React from 'react';
import { Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LinearGradient from 'react-native-web-linear-gradient';
import Playground from '../../src/components/Playground';

import { useView, PropTypes } from 'react-view';

export default () => {
  const params = useView({
    componentName: 'Button',
    props: {
      type: {
        value: 'solid',
        defaultValue: 'solid',
        options: { solid: 'Solid', clear: 'Clear', outline: 'Outline' },
        type: PropTypes.Enum,
        description: 'Defines the type of the button.',
      },
      buttonStyle: {
        value: `{ width: 150 }`,
        type: PropTypes.Object,
      },
      containerStyle: {
        defaultValue: `{}`,
        value: `{margin: 5 }`,
        type: PropTypes.Object,
      },
      disabled: {
        value: false,
        type: PropTypes.Boolean,
        description: 'Indicates that the button is disabled',
      },
      disabledStyle: {
        value: `{ borderWidth:2, borderColor:"#00F" }`,
        type: PropTypes.Object,
        description: '',
      },
      disabledTitleStyle: {
        value: `{ color:'#00F' }`,
        type: PropTypes.Object,
        description: '',
      },
      linearGradientProps: {
        value: `null`,
        type: PropTypes.Object,
      },
      ViewComponent: {
        value: ``,
        type: PropTypes.ReactNode,
      },
      icon: {
        value: `<Icon
          name="react"
          size={15}
          color="#0FF"
        />`,
        // value: `<p>dsf</p>`,
        type: PropTypes.ReactNode,
      },
      iconContainerStyle: {
        value: `{background:'#000'}`,
        type: PropTypes.Object,
      },
      iconRight: {
        value: false,
        type: PropTypes.Boolean,
        description: 'Indicates that the button is disabled',
      },
      loading: {
        value: false,
        type: PropTypes.Boolean,
        description: 'Indicates that the loading state',
      },
      loadingProps: {
        value: `{animating:true}`,
        type: PropTypes.Object,
      },
      loadingStyle: {
        value: `{}`,
        type: PropTypes.Object,
      },
      onPress: {
        value: '() => alert("click")',
        type: PropTypes.Function,
        description: 'Function called when button is clicked.',
      },
      raised: {
        value: false,
        type: PropTypes.Boolean,
        description: 'Indicates that the button is disabled',
      },
      title: {
        value: 'Hello',
        type: PropTypes.String,
        description: 'Visible label.',
      },
      titleProps: {
        value: `{}`,
        type: PropTypes.Object,
      },
      titleStyle: {
        value: `{marginHorizontal: 5}`,
        type: PropTypes.Object,
      },
    },
    scope: {
      Button,
      Icon,
      LinearGradient,
    },
    imports: {
      '@rneui/base': {
        named: ['Button'],
      },
      'react-native-vector-icons/dist/MaterialCommunityIcons': {
        default: 'Icon',
      },
      'react-native-linear-gradient': {
        default: 'LinearGradient',
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};
