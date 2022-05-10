import * as React from 'react';
import { Card } from '@rneui/base';
import { View, Image, Text } from 'react-native';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const CardPlayground = () => {
  const params = useView({
    componentName: 'Card',
    props: {
      children: {
        value: ` 
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <Card.Divider/>
        <View style={{position:"relative",alignItems:"center"}}>
          <Image
              style={{width:"100%",height:100}}
              resizeMode="contain"
              source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }}
            />
          <Text >Pranshu Chittora</Text>
         </View>
         `,
        type: PropTypes.ReactNode,
        imports: {
          'react-native': {
            named: ['View', 'Image'],
          },
        },
      },
      containerStyle: {
        value: `{}`,
        type: PropTypes.Object,
      },
      wrapperStyle: {
        value: `{}`,
        type: PropTypes.Object,
      },
    },
    scope: {
      Card,
      View,
      Image,
      Text,
    },
    imports: {
      '@rneui/base': {
        named: ['Card'],
      },
      // "react-native": {
      //   named: ["View", "Image", "Text"],
      // },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default CardPlayground;
