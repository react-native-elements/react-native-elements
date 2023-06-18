/// <reference types="react" />
import { Image as ImageNative } from 'react-native';
import { Image, ImageProps } from '@rneui/base/dist/Image/Image';
export { Image };
export type { ImageProps };
declare const ThemedImage: (import("react").FunctionComponent<import("react").PropsWithChildren<ImageProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<ImageProps>>>) & {
    getSize: typeof ImageNative.getSize;
    getSizeWithHeaders: typeof ImageNative.getSizeWithHeaders;
    prefetch: typeof ImageNative.prefetch;
    abortPrefetch: typeof ImageNative.abortPrefetch;
    queryCache: typeof ImageNative.queryCache;
    resolveAssetSource: typeof ImageNative.resolveAssetSource;
};
export default ThemedImage;
