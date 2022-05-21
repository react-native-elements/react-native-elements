/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as RNE from 'react-native-elements';
import * as RNEUI from '@rneui/base';
import * as RNEUI_Layout from '@rneui/layout';
import LinearGradient from 'react-native-linear-gradient';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  LinearGradient,
  ...RNE,
  ...RNEUI,
  ...RNEUI_Layout,
  ...React,
};

export default ReactLiveScope;
