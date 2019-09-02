import React from 'react';
import {
  View,
  TouchableHighlight,
  Platform,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';

import ViewPropTypes from '../config/ViewPropTypes';

const DEFAULT_COLORS = ['#000', '#333', '#555', '#888', '#aaa', '#ddd'];
const defaultEditButton = {
  name: 'mode-edit',
  type: 'material',
  color: '#fff',
  underlayColor: '#000',
};

const Utils = ({
  width,
  height,
  editButton: passedEditButton,
  onEditPress
}) => {
  const editButton = {
    ...defaultEditButton,
    ...passedEditButton
  }
  const editButtonSize = editButton.size || (width + height) / 2 / 3;

  return (
    <TouchableHighlight
      style={[
        styles.editButton,
        {
          width: editButtonSize,
          height: editButtonSize,
          borderRadius: editButtonSize / 2,
        },
        editButton.style,
      ]}
      underlayColor={editButton.underlayColor}
      onPress={onEditPress}
    >
      <View>
        <Icon
          size={editButtonSize * 0.8}
          {...editButton}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DEFAULT_COLORS[4],
    ...Platform.select({
      ios: {
        shadowColor: DEFAULT_COLORS[0],
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 1,
      },
    }),
  }
});

Utils.propTypes = {
  onEditPress: PropTypes.func,
  editButton: PropTypes.shape({
    size: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    underlayColor: PropTypes.string,
    style: ViewPropTypes.style,
  })
};

Utils.defaultProps = {
  onEditPress: null,
  editButton: defaultEditButton
};

export default Utils;
