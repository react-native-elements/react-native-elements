import * as React from 'react';
import { Avatar } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const AvatarPlay = () => {
  const params = useView({
    componentName: 'Avatar',
    props: {
      activeOpacity: {
        value: 0.2,
        type: PropTypes.Number,
      },
      avatarStyle: {
        value: `{}`,
        type: PropTypes.Object,
      },
      containerStyle: {
        value: `{ backgroundColor: '#BDBDBD' }`,
        type: PropTypes.Object,
      },
      icon: {
        value: `{}`,
        type: PropTypes.Object,
      },
      iconStyle: {
        value: `{}`,
        type: PropTypes.Object,
      },
      imageProps: {
        value: `{}`,
        type: PropTypes.Object,
      },
      onLongPress: {
        value: `()=>alert('onLongPress')`,
        type: PropTypes.Function,
      },
      onPress: {
        value: `()=>alert('onPress')`,
        type: PropTypes.Function,
      },

      overlayContainerStyle: {
        value: `{}`,
        type: PropTypes.Object,
      },
      placeholderStyle: {
        value: `{}`,
        type: PropTypes.Object,
      },
      rounded: {
        value: true,
        type: PropTypes.Boolean,
        description: 'Indicates that the button is disabled',
      },
      size: {
        value: 'large',
        options: {
          small: 'small',
          medium: 'medium',
          large: 'large',
          xlarge: 'xlarge',
        },
        type: PropTypes.Enum,
        description: 'Defines the size of the Avatar',
      },

      source: {
        value: `{uri:""}`,
        type: PropTypes.Object,
      },
      title: {
        value: 'P',
        type: PropTypes.String,
        description: 'Visible label.',
      },
      titleStyle: {
        value: `{}`,
        type: PropTypes.Object,
      },
      renderPlaceholderContent: {
        type: PropTypes.ReactNode,
      },
      Component: {
        type: PropTypes.ReactNode,
      },
      ImageComponent: {
        type: PropTypes.ReactNode,
      },
      // titleProps: {
      //   value: `{}`,
      //   type: PropTypes.Object,
      // },
      // titleStyle: {
      //   value: `{marginHorizontal: 5}`,
      //   type: PropTypes.Object,
      // },
      // type: {
      //   value: "solid",
      //   defaultValue: "solid",
      //   options: { solid: "Solid", clear: "Clear", outline: "Outline" },
      //   type: PropTypes.Enum,
      //   description: "Defines the type of the button.",
      // },
    },
    scope: {
      Avatar,
    },
    imports: {
      '@rneui/base': {
        named: ['Avatar'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default AvatarPlay;
