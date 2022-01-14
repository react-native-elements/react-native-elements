/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as RNE from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  FontAwesomeIcon,
  MaterialIcons,
  ...RNE,
  ...React,
};

export default ReactLiveScope;
