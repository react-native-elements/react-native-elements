import * as React from 'react';
import { SocialIcon } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const SocialIconPlayground = () => {
  const params = useView({
    componentName: 'SocialIcon',
    props: {
      activityIndicatorStyle: {
        type: PropTypes.Object,
        value: ``,
        description: 'Style to render when in loading state',
      },
      button: { type: PropTypes.Boolean, value: false },
      Component: {
        type: PropTypes.ReactNode,
        description: 'React Native Component. Default =>	TouchableHighlight',
        value: null,
      },
      disabled: {
        type: PropTypes.Boolean,
        value: false,
      },
      fontFamily: {
        type: PropTypes.String,
        description: 'System font bold (iOS), Sans Serif Black (android)',
      },
      fontStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      fontWeight: {
        type: PropTypes.String,
        description:
          'specify font weight of title if set as a button with a title',
      },
      iconColor: {
        type: PropTypes.String,
        value: ``,
      },
      iconSize: {
        type: PropTypes.Number,
        value: 25,
      },
      iconStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      iconType: {
        type: PropTypes.String,
        value: `font-awesome`,
      },
      light: {
        type: PropTypes.Boolean,
        value: false,
      },
      loading: {
        type: PropTypes.Boolean,
        value: false,
      },
      onLongPress: {
        type: PropTypes.Function,
        value: `() => console.log("onLongPress()")`,
      },
      onPress: {
        type: PropTypes.Function,
        value: `() => console.log("onPress()")`,
      },
      raised: {
        type: PropTypes.Boolean,
        value: false,
      },
      style: {
        type: PropTypes.Object,
        value: `{paddingHorizontal:10}`,
      },
      title: {
        type: PropTypes.String,
        value: 'GitHub',
        description: 'title if made into a button.',
      },
      type: {
        type: PropTypes.String,
        value: 'github',
      },
      underlayColor: {
        type: PropTypes.String,
        value: ``,
      },
    },
    scope: {
      SocialIcon,
    },
    imports: {
      '@rneui/base': {
        named: ['SocialIcon'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default SocialIconPlayground;
