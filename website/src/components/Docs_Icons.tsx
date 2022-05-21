import React from 'react';
import Head from '@docusaurus/Head';
// @ts-ignore
import mc from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
// @ts-ignore
import mi from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
// @ts-ignore
import fa from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

export const IconsStyle = () => {
  return (
    <Head>
      <style type="text/css">{`
          @font-face {
            font-family: 'MaterialIcons';
            src: url(${mi}) format('truetype');
          }
          @font-face {
            font-family: 'FontAwesome';
            src: url(${fa}) format('truetype');
          }
          @font-face {
            font-family: 'MaterialCommunityIcons';
            src: url(${mc}) format('truetype');
          }
        `}</style>
    </Head>
  );
};
