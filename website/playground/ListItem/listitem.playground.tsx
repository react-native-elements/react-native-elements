import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import { ListItem, Avatar, Text } from '@rneui/base';

import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const ListItemPlayground = () => {
  const params = useView({
    componentName: 'ListItem',
    props: {
      children: {
        type: PropTypes.ReactNode,
        value: `<Avatar source={{uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"}} /> 
          <ListItem.Content>
            <ListItem.Title><Text>Pranshu Chittora</Text></ListItem.Title>
            <ListItem.Subtitle><Text>React Native Elements</Text></ListItem.Subtitle>
          </ListItem.Content>`,
      },
      bottomDivider: {
        type: PropTypes.Boolean,
        value: false,
      },
      Component: {
        type: PropTypes.Object,
        value: `TouchableHighlight`,
        description:
          'View or TouchableHighlight (default) if onPress method is added as prop',
      },
      containerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      disabled: {
        type: PropTypes.Boolean,
        value: false,
      },
      disabledStyle: {
        type: PropTypes.Object,
        value: `{opacity:0.5}`,
      },
      onLongPress: {
        type: PropTypes.Function,
        value: `() => console.log("onLongPress()")`,
      },
      onPress: {
        type: PropTypes.Function,
        value: `() => console.log("onLongPress()")`,
      },
      pad: {
        type: PropTypes.Number,
        value: 20,
      },
      topDivider: {
        type: PropTypes.Boolean,
        value: false,
      },
      ViewComponent: {
        type: PropTypes.Object,
        value: ``,
        description: 'ontainer for linear gradient (for non-expo user)',
      },
    },
    scope: {
      ListItem,
      Avatar,
      Text,
      TouchableHighlight,
    },
    imports: {
      '@rneui/base': {
        named: ['ListItem', 'Avatar'],
      },
      'react-native': {
        named: ['TouchableHighlight'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default ListItemPlayground;
