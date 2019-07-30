import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import { nodeType, renderNode } from '../helpers';
import { ViewPropTypes } from '../config';

import { Badge } from '../badge/Badge';
import { Button } from '../buttons/Button';
import Text from '../text/Text';

const cellPositions = [
  'top-left',
  'top',
  'top-right',
  'left',
  'center',
  'right',
  'bottom-left',
  'bottom',
  'bottom-right',
];

export default class DefaultControls extends React.Component {
  dotsPos = (() => this._getPos(this.props.dotsPos, 'bottom', 'right'))();
  prevPos = (() =>
    this._getPos(this.props.prevPos, 'bottom-left', 'top-right'))();
  nextPos = (() => this._getPos(this.props.nextPos, 'bottom-right'))();

  constructor(props) {
    super(props);

    this._renderRow = this._renderRow.bind(this);
    this._renderCell = this._renderCell.bind(this);
    this._renderDot = this._renderDot.bind(this);
    this._renderButton = this._renderButton.bind(this);
    this._renderFirst = this._renderFirst.bind(this);
    this._renderLast = this._renderLast.bind(this);
  }

  _getPos(prop, horizontalDefault, verticalDefault) {
    return prop === false
      ? null
      : prop
      ? prop
      : verticalDefault && this.props.vertical
      ? verticalDefault
      : horizontalDefault;
  }

  _renderDot({ isActive, onPress }) {
    const { theme, dotProps = {}, dotActiveStyle } = this.props;
    const { containerStyle, badgeStyle, ...others } = dotProps;
    return (
      <Badge
        theme={theme}
        containerStyle={StyleSheet.flatten([
          styles.dotsItemContainer,
          containerStyle,
        ])}
        badgeStyle={StyleSheet.flatten([
          styles.dotsItem(theme, isActive),
          badgeStyle,
          isActive && dotActiveStyle,
        ])}
        onPress={onPress}
        {...others}
      />
    );
  }

  _renderDots() {
    const {
      vertical,
      count,
      activeIndex,
      dotsTouchable,
      dotsWrapperStyle,
      DotComponent = this._renderDot,
      goTo,
    } = this.props;
    return (
      <View
        style={StyleSheet.flatten([
          styles.dotsWrapper(vertical),
          dotsWrapperStyle,
        ])}
      >
        {Array.from({ length: count }, (v, i) => i).map(index => (
          <DotComponent
            key={index}
            index={index}
            isActive={activeIndex === index}
            onPress={!dotsTouchable ? undefined : () => goTo(index)}
          />
        ))}
      </View>
    );
  }

  _renderButton({ type, title, onPress, ...props }) {
    const { theme } = this.props;
    return (
      <Button
        theme={theme}
        type="clear"
        onPress={onPress}
        title={title}
        titleStyle={styles.buttonTitleStyle(theme, type)}
        {...props}
      />
    );
  }

  _renderFirst() {
    const Component = this._renderButton;
    const { prevTitle } = this.props;
    return (
      <Component
        type="prev"
        title={prevTitle}
        disabled
        containerStyle={styles.hidden}
      />
    );
  }

  _renderLast() {
    const Component = this._renderButton;
    const { nextTitle } = this.props;
    return (
      <Component
        type="next"
        title={nextTitle}
        disabled
        containerStyle={styles.hidden}
      />
    );
  }

  _renderPrev() {
    const DefaultButton = this._renderButton;
    const {
      goToPrev,
      isFirst,
      prevTitle,
      firstPrevElement = this._renderFirst(),
      prevProps,
      PrevComponent = DefaultButton,
    } = this.props;
    if (isFirst) {
      return renderNode(Text, firstPrevElement);
    }
    return (
      <PrevComponent
        type="prev"
        title={prevTitle}
        onPress={goToPrev}
        {...prevProps}
      />
    );
  }

  _renderNext() {
    const DefaultButton = this._renderButton;
    const {
      goToNext,
      isLast,
      nextTitle,
      lastNextElement = this._renderLast(),
      nextProps,
      NextComponent = DefaultButton,
    } = this.props;
    if (isLast) {
      return renderNode(Text, lastNextElement);
    }
    return (
      <NextComponent
        type="next"
        title={nextTitle}
        onPress={goToNext}
        {...nextProps}
      />
    );
  }

  _renderCell({ name }) {
    const { cellsStyle = {}, cellsContent = {} } = this.props;
    return (
      <View style={StyleSheet.flatten([styles.cell, cellsStyle[name]])}>
        {this.dotsPos === name && this._renderDots()}
        {this.prevPos === name && this._renderPrev()}
        {this.nextPos === name && this._renderNext()}
        {cellsContent[name] && renderNode(Text, cellsContent[name])}
      </View>
    );
  }

  _renderRow({ rowAlign }) {
    const Cell = this._renderCell;
    const row = [
      `${!rowAlign ? '' : rowAlign + '-'}left`,
      rowAlign || 'center',
      `${!rowAlign ? '' : rowAlign + '-'}right`,
    ];
    return (
      <View style={styles.row}>
        {row.map(name => (
          <Cell key={name} name={name} />
        ))}
      </View>
    );
  }

  render() {
    const Row = this._renderRow;
    return (
      <React.Fragment>
        <Row rowAlign="top" contentAlign="flex-start" />
        <Row contentAlign="center" />
        <Row rowAlign="bottom" contentAlign="flex-end" />
      </React.Fragment>
    );
  }
}

DefaultControls.propTypes = {
  cellsStyle: PropTypes.shape(
    cellPositions.reduce(
      (obj, item) => ({ ...obj, [item]: ViewPropTypes.style }),
      {}
    )
  ),
  cellsContent: PropTypes.shape(
    cellPositions.reduce((obj, item) => ({ ...obj, [item]: nodeType }), {})
  ),

  dotsPos: PropTypes.oneOf([...cellPositions, true, false]),
  prevPos: PropTypes.oneOf([...cellPositions, true, false]),
  nextPos: PropTypes.oneOf([...cellPositions, true, false]),
  prevTitle: PropTypes.string,
  nextTitle: PropTypes.string,

  dotsTouchable: PropTypes.bool,
  dotsWrapperStyle: ViewPropTypes.style,

  dotProps: PropTypes.shape(Badge.propTypes),
  dotActiveStyle: ViewPropTypes.style,
  DotComponent: PropTypes.func,

  prevProps: PropTypes.shape(Button.propTypes),
  nextProps: PropTypes.shape(Button.propTypes),
  PrevComponent: PropTypes.func,
  NextComponent: PropTypes.func,
  firstPrevElement: nodeType,
  lastNextElement: nodeType,

  theme: PropTypes.object,
  vertical: PropTypes.bool,
  count: PropTypes.number,
  activeIndex: PropTypes.number,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  goToPrev: PropTypes.func,
  goToNext: PropTypes.func,
  goTo: PropTypes.func,
};

DefaultControls.defaultProps = {
  prevTitle: 'Prev',
  nextTitle: 'Next',
};

const styles = {
  row: {
    flexDirection: 'row',
    height: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsWrapper: vertical => ({
    flexDirection: vertical ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  dotsItemContainer: {
    margin: 3,
  },
  dotsItem: (theme, isActive) => ({
    backgroundColor: isActive ? theme.colors.primary : theme.colors.grey3,
    borderColor: 'transparent',
  }),
  buttonTitleStyle: (theme, type) => ({
    color: type === 'prev' ? theme.colors.grey3 : theme.colors.primary,
  }),
  hidden: {
    opacity: 0,
  },
};
