declare var _default: any;
export default _default;
export function FeaturedTile(props: any): JSX.Element;
export namespace FeaturedTile {
    export namespace propTypes {
        export const title: PropTypes.Requireable<string>;
        export const icon: PropTypes.Requireable<object>;
        export const caption: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const imageSrc: any;
        export const onPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const containerStyle: any;
        export const iconContainerStyle: any;
        export const imageContainerStyle: any;
        export const overlayContainerStyle: any;
        export const titleStyle: any;
        export const captionStyle: any;
        export const width: PropTypes.Requireable<number>;
        export const height: PropTypes.Requireable<number>;
        export const ImageComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        export const imageProps: PropTypes.Requireable<object>;
    }
    export namespace defaultProps {
        export { BackgroundImage as ImageComponent };
        const imageProps_1: {};
        export { imageProps_1 as imageProps };
    }
}
import PropTypes from "prop-types";
import { BackgroundImage } from "../config";
