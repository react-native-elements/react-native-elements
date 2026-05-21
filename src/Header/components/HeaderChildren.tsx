import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
  Text,
  FlexAlignType,
} from 'react-native';
import { renderNode } from '../../helpers';
import { Icon } from '../../Icon';

const ALIGN_STYLE: Record<Placement, FlexAlignType> = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

type Placement = 'left' | 'center' | 'right';

export interface HeaderChildrenProps {
  placement: Placement;
  style: StyleProp<ViewStyle>;
  children: any;
}

export const Children = ({
  style,
  placement,
  children,
}: HeaderChildrenProps) => (
  <View
    style={StyleSheet.flatten([{ alignItems: ALIGN_STYLE[placement] }, style])}
  >
    {children == null || children === false
      ? null
      : children.text
      ? renderNode(Text, children.text, { numberOfLines: 1, ...children })
      : children.icon
      ? renderNode(Icon, {
          ...children,
          name: children.icon,
          containerStyle: StyleSheet.flatten([
            { alignItems: ALIGN_STYLE[placement] },
            children.containerStyle,
          ]),
        })
      : renderNode(Text, children)}
  </View>
);
