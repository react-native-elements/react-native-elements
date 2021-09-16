import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { renderNode } from '../../helpers';
import Icon from '../../Icon';
const ALIGN_STYLE = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
};
export const Children = ({ style, placement, children, }) => (<View style={StyleSheet.flatten([{ alignItems: ALIGN_STYLE[placement] }, style])}>
    {children == null || children === false
        ? null
        : children.text
            ? renderNode(Text, children.text, Object.assign({ numberOfLines: 1 }, children))
            : children.icon
                ? renderNode(Icon, Object.assign(Object.assign({}, children), { name: children.icon, containerStyle: StyleSheet.flatten([
                        { alignItems: ALIGN_STYLE[placement] },
                        children.containerStyle,
                    ]) }))
                : renderNode(Text, children)}
  </View>);
