export default withBadge;
declare function withBadge(value: any, options?: {}): (WrappedComponent: any) => {
    (props: any): JSX.Element;
    displayName: string;
};
