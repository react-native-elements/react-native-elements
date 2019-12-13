export default Triangle;
declare function Triangle({ style, isDown }: {
    style: any;
    isDown: any;
}): JSX.Element;
declare namespace Triangle {
    export namespace propTypes {
        export const style: any;
        export const isDown: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
