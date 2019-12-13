/// <reference types="react" />
declare const withBadge: (value: any, options?: {}) => (WrappedComponent: any) => {
    (props: any): JSX.Element;
    displayName: string;
};
export default withBadge;
