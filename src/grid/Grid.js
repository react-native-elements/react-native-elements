// A grid component inspired by material-ui Grid
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Grid/Grid.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from '../config';

const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.spacingStyles = generateSpacing(this.props.theme);
    this.paddingStyles = generatePadding(this.props.theme);
  }

  render() {
    const {
      alignContent = 'stretch',
      alignItems = 'stretch',
      container = false,
      direction = 'row',
      item = false,
      justify = 'flex-start',
      spacing = 0,
      padding = 0,
      wrap = 'wrap',
      size,
      style,
      ...other
    } = this.props;

    const styles = [
      style,
      container && styleSheet.container,
      item && styleSheet.item,
      size && { flex: size },
      container &&
        spacing !== 0 &&
        this.spacingStyles[`containerSpacing${String(spacing)}`],
      item &&
        padding !== 0 &&
        this.paddingStyles[`itemPadding${String(padding)}`],
      direction !== 'column' && styleSheet[`direction-${String(direction)}`],
      wrap !== 'wrap' && styleSheet[`wrap-${String(wrap)}`],
      alignItems !== 'stretch' &&
        styleSheet[`align-items-${String(alignItems)}`],
      alignContent !== 'stretch' &&
        styleSheet[`align-content-${String(alignContent)}`],
      justify !== 'flex-start' && styleSheet[`justify-${String(justify)}`],
    ].filter(s => !!s);

    return <View style={styles} {...other} />;
  }
}

const generateSpacing = theme => {
  const styles = {};
  SPACINGS.forEach(sp => {
    const themeSpacing = theme.spacing(sp);
    styles[`containerSpacing${String(sp)}`] = {
      margin: -themeSpacing / 2,
    };
  });

  return StyleSheet.create(styles);
};

const generatePadding = theme => {
  const styles = {};
  SPACINGS.forEach(sp => {
    const themeSpacing = theme.spacing(sp);
    styles[`itemPadding${String(sp)}`] = {
      padding: themeSpacing / 2,
    };
  });

  return StyleSheet.create(styles);
};

const styleSheet = StyleSheet.create({
  root: {},
  /* Styles applied to the root element if `container={true}`. */
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  /* Styles applied to the root element if `item={true}`. */
  item: {
    margin: 0, // For instance, it's useful when used with a `figure` element.
  },
  'direction-row': {
    flexDirection: 'row',
  },
  'direction-row-reverse': {
    flexDirection: 'row-reverse',
  },
  'direction-column': {
    flexDirection: 'column',
  },
  'direction-column-reverse': {
    flexDirection: 'column-reverse',
  },
  'wrap-nowrap': {
    flexWrap: 'nowrap',
  },
  'wrap-nowrap-reverse': {
    flexWrap: 'wrap-reverse',
  },
  'align-items-center': {
    alignItems: 'center',
  },
  'align-items-flex-start': {
    alignItems: 'flex-start',
  },
  'align-items-flex-end': {
    alignItems: 'flex-end',
  },
  'align-items-baseline': {
    alignItems: 'baseline',
  },
  'align-content-center': {
    alignContent: 'center',
  },
  'align-content-flex-start': {
    alignContent: 'flex-start',
  },
  'align-content-flex-end': {
    alignContent: 'flex-end',
  },
  'align-content-space-between': {
    alignContent: 'space-between',
  },
  'align-content-space-around': {
    alignContent: 'space-around',
  },
  'justify-center': {
    justifyContent: 'center',
  },
  'justify-flex-start': {
    justifyContent: 'flex-start',
  },
  'justify-flex-end': {
    justifyContent: 'flex-end',
  },
  'justify-space-between': {
    justifyContent: 'space-between',
  },
  'justify-space-around': {
    justifyContent: 'space-around',
  },
  'justify-space-evenly': {
    justifyContent: 'space-evenly',
  },
});

Grid.propTypes = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
  ]),
  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'baseline',
  ]),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: PropTypes.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: PropTypes.bool,
  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  spacing: PropTypes.oneOf(SPACINGS),
  padding: PropTypes.oneOf(SPACINGS),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
};

export { Grid };
export default withTheme(Grid, 'Grid');
