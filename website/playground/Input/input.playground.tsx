import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Input } from '@rneui/base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const InputPlayground = () => {
  const params = useView({
    componentName: 'Input',
    props: {
      containerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      disabled: {
        type: PropTypes.Boolean,
        value: false,
      },
      disabledInputStyle: {
        type: PropTypes.Object,
        value: `{background:"#ddd"}`,
      },

      inputContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      errorMessage: {
        type: PropTypes.String,
        value: "Oops! that's not correct.",
      },
      errorStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      errorProps: {
        type: PropTypes.Object,
        description:
          'props to be passed to the React Native Text component used to display the error message (optional)',
        value: `{}`,
      },
      inputStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      label: {
        type: PropTypes.ReactNode,
        value: `"User Form"`,
        description: 'string OR React element or component	',
      },
      labelStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      labelProps: {
        type: PropTypes.Object,
        value: `{}`,
        description: '{...Text props} OR passed component props	',
      },
      leftIcon: {
        type: PropTypes.ReactNode,
        value: `<Icon name="account-outline" size={20}/>`,
      },
      leftIconContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      rightIcon: {
        type: PropTypes.ReactNode,
        value: `<Icon name="close" size={20}/>`,
      },
      rightIconContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      renderErrorMessage: {
        type: PropTypes.Boolean,
        value: false,
        description:
          'If the error message container should be rendered (take up vertical space). If false, when showing errorMessage, the layout will shift to add it at that time.',
      },
      InputComponent: {
        type: PropTypes.ReactNode,
      },
      placeholder: {
        type: PropTypes.String,
        value: 'Enter Name',
      },
    },
    scope: {
      Input,
      Icon,
    },
    imports: {
      '@rneui/base': {
        named: ['Input'],
      },
      'react-native-vector-icons/MaterialCommunityIcons': {
        default: 'Icon',
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default InputPlayground;
