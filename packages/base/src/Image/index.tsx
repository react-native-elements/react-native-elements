import { Image as ImageNative } from 'react-native';
import { Image, ImageProps } from './Image';

const DefaultImage = Object.assign(Image, {
  getSize: ImageNative.getSize,
  getSizeWithHeaders: ImageNative.getSizeWithHeaders,
  prefetch: ImageNative.prefetch,
  abortPrefetch: ImageNative.abortPrefetch,
  queryCache: ImageNative.queryCache,
  resolveAssetSource: ImageNative.resolveAssetSource,
});

export { DefaultImage as Image };
export type { ImageProps };
