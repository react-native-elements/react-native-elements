import * as React from 'react';
import { SearchBar } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const SearchBarPlayground = () => {
  const params = useView({
    componentName: 'SearchBar',
    props: {
      platform: {
        value: 'default',
        options: {
          default: 'default',
          ios: 'ios',
          android: 'android',
        },
        type: PropTypes.Enum,
        description: 'Defines the Platfrom.',
      },
      clearIcon: {
        type: PropTypes.Object,
        value: '',
      },
      searchIcon: {
        type: PropTypes.Object,
        value: '',
      },
      cancelIcon: {
        type: PropTypes.Object,
        value: '',
        description: 'Android Only',
      },
      containerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      inputContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },

      inputStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },

      leftIconContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },

      rightIconContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      lightTheme: {
        type: PropTypes.Boolean,
        value: false,
        description: 'Default (platform) only ',
      },
      loadingProps: {
        type: PropTypes.Object,
        value: `{}`,
      },
      onChangeText: {
        type: PropTypes.Function,
        value: `(newVal) => setValue(newVal)`,
      },
      onClearText: {
        type: PropTypes.Function,
        value: `() => console.log(onClearText())`,
      },
      placeholder: {
        type: PropTypes.String,
        value: 'Type query here...',
      },
      placeholderTextColor: {
        type: PropTypes.String,
        value: '#888',
      },
      round: {
        type: PropTypes.Boolean,
        value: false,
        description: 'Default (platform) only ',
      },
      showCancel: {
        type: PropTypes.Boolean,
        value: false,
        description: 'ios (platform) only ',
      },
      showLoading: {
        type: PropTypes.Boolean,
        value: false,
        description: 'Shows loader',
      },
      underlineColorAndroid: {
        type: PropTypes.String,
        value: '',
      },
      cancelButtonTitle: {
        type: PropTypes.String,
        value: 'Cancel',
        description: 'ios (platform) only ',
      },
      cancelButtonProps: {
        type: PropTypes.Object,
        value: `{}`,
        description: 'ios (platform) only ',
      },
      onCancel: {
        type: PropTypes.Function,
        value: `() => console.log(onCancel())`,
      },
      value: {
        type: PropTypes.String,
        value: '',
        stateful: true,
      },
    },
    scope: {
      SearchBar,
    },
    imports: {
      '@rneui/base': {
        named: ['SearchBar'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default SearchBarPlayground;
