import { Image as ImageNative } from 'react-native';
import { ImageProps } from './Image';
declare const Image: import("..").RneFunctionComponent<ImageProps> & {
    getSize: typeof ImageNative.getSize;
    getSizeWithHeaders: typeof ImageNative.getSizeWithHeaders;
    prefetch: typeof ImageNative.prefetch;
    abortPrefetch: typeof ImageNative.abortPrefetch;
    queryCache: typeof ImageNative.queryCache;
    resolveAssetSource: typeof ImageNative.resolveAssetSource;
};
export { Image };
export type { ImageProps };
