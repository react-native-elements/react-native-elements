import { Image as ImageNative } from 'react-native';
import { Image as RNEImage } from './Image';
const Image = Object.assign(RNEImage, {
    getSize: ImageNative.getSize,
    getSizeWithHeaders: ImageNative.getSizeWithHeaders,
    prefetch: ImageNative.prefetch,
    abortPrefetch: ImageNative.abortPrefetch,
    queryCache: ImageNative.queryCache,
    resolveAssetSource: ImageNative.resolveAssetSource,
});
export { Image };
