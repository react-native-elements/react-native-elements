import React, { useRef } from 'react';
import { View } from 'react-native';

export type PadViewProps = {
  Component: React.ComponentClass;
  pad: number;
};

export const PadView: React.FC<PadViewProps> = ({
  children,
  pad,
  Component,
  ...props
}) => {
  const _root = useRef(null);

  const childrens = React.Children.toArray(children);
  const { length } = childrens;
  const Container = Component || View;

  return (
    <Container {...props} ref={_root} testID="padView">
      {React.Children.map(
        childrens,
        (child, index) =>
          child && [
            child,
            index !== length - 1 && <View style={{ paddingLeft: pad }} />,
          ]
      )}
    </Container>
  );
};
