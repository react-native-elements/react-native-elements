import React, { useState } from 'react';
import { ThemeProvider, createTheme, useTheme } from '@rneui/themed';
import RootNavigator from './src/navigation/RootNavigator';
import AppLoading from './src/components/AppLoading';
import { cacheImages, cacheFonts } from './src/helpers/AssetsCaching';
import vectorFonts from './src/helpers/vector-fonts';

export default () => {
  const [isReady, setIsReady] = useState(false);

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/images/bg_screen1.jpg'),
      require('./assets/images/bg_screen2.jpg'),
      require('./assets/images/bg_screen3.jpg'),
      require('./assets/images/bg_screen4.jpg'),
      require('./assets/images/user-cool.png'),
      require('./assets/images/user-hp.png'),
      require('./assets/images/user-student.png'),
      require('./assets/images/avatar1.jpg'),
    ]);

    const fontAssets = cacheFonts([
      ...vectorFonts,
      { georgia: require('./assets/fonts/Georgia.ttf') },
      { regular: require('./assets/fonts/Montserrat-Regular.ttf') },
      { light: require('./assets/fonts/Montserrat-Light.ttf') },
      { bold: require('./assets/fonts/Montserrat-Bold.ttf') },
      { UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf') },
      { UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf') },
      { UbuntuLightItalic: require('./assets/fonts/Ubuntu-Light-Italic.ttf') },
    ]);
    await Promise.all([...imageAssets, ...fontAssets]);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  );
};

const theme = createTheme({
  lightColors: {
    primary: 'blue',
  },
  mode: 'dark',
  myColors: { red: 'red' },
  Avatar: (p) => ({ containerStyle: { backgroundColor: p.color } }),
  MyComponent: { width: 100 },
});

import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    red: string;
  }
  export interface AvatarProps {
    color: string;
  }
  export interface MyComponentProps {
    width: number;
  }
  export interface ComponentTheme {
    Avatar: Partial<AvatarProps>;
    MyComponent: Partial<MyComponentProps>;
  }
  export interface Theme {
    myColors?: {
      red: string;
    };
  }
}

() => {
  const { theme: o } = useTheme();
  o.colors.red;
  o.myColors.red;
};
