import { Image as ImageNative } from 'react-native';
import { withTheme } from '../config';
import { Image, ImageProps } from './Image';

export { Image };
export type { ImageProps };

/**
 * **React Native Elements Image Component**
 *
 * **Documentation** https://reactnativeelements.com/docs/image
 *
 * **Preview**
 *
 * ![Image](https://raw.githubusercontent.com/arpitBhalla/rne.snippets/next/img/rneImage.png)
 */

const ThemedImage = Object.assign(withTheme(Image, 'Image'), {
  getSize: ImageNative.getSize,
  getSizeWithHeaders: ImageNative.getSizeWithHeaders,
  prefetch: ImageNative.prefetch,
  abortPrefetch: ImageNative.abortPrefetch,
  queryCache: ImageNative.queryCache,
  resolveAssetSource: ImageNative.resolveAssetSource,
});

export default ThemedImage;
