import { Image } from 'react-native';
import { loadAsync } from 'expo-font';
import { Asset } from 'expo-asset';

export const cacheFonts = (fonts: string[]) => {
  return fonts.map((font) => loadAsync(font));
};

export const cacheImages = (images: string[]) => {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
