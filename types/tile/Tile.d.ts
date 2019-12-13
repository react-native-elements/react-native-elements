declare var _default: any;
export default _default;
export function Tile(props: any): JSX.Element;
export namespace Tile {
    export namespace propTypes {
        export const title: PropTypes.Requireable<string>;
        export const icon: PropTypes.Requireable<object>;
        export const caption: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const imageSrc: any;
        export const onPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const activeOpacity: PropTypes.Requireable<number>;
        export const containerStyle: any;
        export const imageContainerStyle: any;
        export const iconContainerStyle: any;
        export const overlayContainerStyle: any;
        export const titleStyle: any;
        export const captionStyle: any;
        export const width: PropTypes.Requireable<number>;
        export const height: PropTypes.Requireable<number>;
        export const featured: PropTypes.Requireable<boolean>;
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const contentContainerStyle: any;
        export const titleNumberOfLines: PropTypes.Requireable<number>;
        export const imageProps: PropTypes.Requireable<object>;
        export const ImageComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }
    export namespace defaultProps {
        const width_1: number;
        export { width_1 as width };
        export { Image as ImageComponent };
        const imageProps_1: {};
        export { imageProps_1 as imageProps };
    }
}
import PropTypes from "prop-types";
import Image from "../image/Image";
