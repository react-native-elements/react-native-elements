import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

import { withTheme, ViewPropTypes } from '../config';

import Button from '../buttons/Button';
import Badge from '../badge/Badge';

const useNativeDriver = false; // because of RN #13377

const getDefaultDotsProps = () => ({
  visible: true,
  touchable: false,
});

const getDefaultButtonsProps = () => ({
  visible: true,
  firstProps: {
    containerStyle: { opacity: 0.3 },
  },
  lastProps: {
    containerStyle: { opacity: 0.3 },
  },
});

class Swiper extends React.Component {
  // methods below

  // allowed by ref

  startAutoplay() {
    const { autoplayTimeout } = this.props;
    this.stopAutoplay();
    if (autoplayTimeout) {
      this.autoplay = setTimeout(() => {
        this._goToNeighboring(autoplayTimeout < 0);
      }, Math.abs(autoplayTimeout) * 1000);
    }
  }

  stopAutoplay() {
    this.autoplay && clearTimeout(this.autoplay);
  }

  goToNext() {
    this._goToNeighboring();
  }

  goToPrev() {
    this._goToNeighboring(true);
  }

  goTo(index = 0) {
    const delta = index - this.getActiveIndex();
    if (delta) {
      this._fixAndGo(delta);
    }
  }

  getActiveIndex() {
    return this.state.activeIndex;
  }

  // stop public methods

  _goToNeighboring(toPrev = false) {
    this._fixAndGo(toPrev ? -1 : 1);
  }

  dotsProps = (() => ({ ...getDefaultDotsProps(), ...this.props.dots }))();
  buttonsProps = (() => ({
    ...getDefaultButtonsProps(),
    ...this.props.buttons,
  }))();

  constructor(props) {
    super(props);

    this._onLayout = this._onLayout.bind(this);
    this._fixState = this._fixState.bind(this);

    this._renderDotsItem = this._renderDotsItem.bind(this);
    this._renderButton = this._renderButton.bind(this);

    this.state = {
      width: 0,
      height: 0,
      activeIndex: props.initialIndex,
      pan: new Animated.ValueXY(),
    };

    this._animatedValueX = 0;
    this._animatedValueY = 0;

    this._panResponder = this._createPanResponder();
  }

  componentDidMount() {
    this.state.pan.x.addListener(({ value }) => (this._animatedValueX = value));
    this.state.pan.y.addListener(({ value }) => (this._animatedValueY = value));
    this.startAutoplay();
  }

  componentWillUnmount() {
    this.stopAutoplay();
    this.state.pan.x.removeAllListeners();
    this.state.pan.y.removeAllListeners();
  }

  _createPanResponder() {
    return PanResponder.create({
      onPanResponderTerminationRequest: () => false,
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (e, gestureState) => {
        const { gesturesEnabled, direction, minDistanceToCapture } = this.props;

        if (!gesturesEnabled) {
          return false;
        }

        this.props.onAnimationStart &&
          this.props.onAnimationStart(this.getActiveIndex());

        const allow =
          Math.abs(
            direction === 'vertical' ? gestureState.dy : gestureState.dx
          ) > minDistanceToCapture;

        if (allow) {
          this.stopAutoplay();
        }

        return allow;
      },
      onPanResponderGrant: () => this._fixState(),
      onPanResponderMove: Animated.event([
        null,
        this.props.direction === 'vertical'
          ? { dy: this.state.pan.y }
          : { dx: this.state.pan.x },
      ]),
      onPanResponderRelease: (e, gesture) => {
        const { direction, minDistanceForAction } = this.props;
        const { width, height } = this.state;

        this.startAutoplay();

        const correction =
          direction === 'vertical'
            ? gesture.moveY - gesture.y0
            : gesture.moveX - gesture.x0;

        if (
          Math.abs(correction) <
          (direction === 'vertical' ? height : width) * minDistanceForAction
        ) {
          return this._spring({ x: 0, y: 0 });
        }
        this._changeIndex(correction > 0 ? -1 : 1);
      },
    });
  }

  _spring(toValue) {
    const { springConfig, onAnimationEnd } = this.props;
    const { activeIndex } = this.state;
    Animated.spring(this.state.pan, {
      ...springConfig,
      toValue,
      useNativeDriver, // false, see top of file
    }).start(() => onAnimationEnd && onAnimationEnd(activeIndex));
  }

  _fixState() {
    const { direction } = this.props;
    const { width, height, activeIndex } = this.state;
    this._animatedValueX =
      direction === 'vertical' ? 0 : width * activeIndex * -1;
    this._animatedValueY =
      direction === 'vertical' ? height * activeIndex * -1 : 0;
    this.state.pan.setOffset({
      x: this._animatedValueX,
      y: this._animatedValueY,
    });
    this.state.pan.setValue({ x: 0, y: 0 });
  }

  _fixAndGo(delta) {
    this._fixState();
    this.props.onAnimationStart &&
      this.props.onAnimationStart(this.getActiveIndex());
    this._changeIndex(delta);
  }

  // TODO: optimize
  _changeIndex(delta = 1) {
    const { loop, direction } = this.props;
    const { width, height, activeIndex } = this.state;

    let toValue = { x: 0, y: 0 };
    let skipChanges = !delta;
    let calcDelta = delta;

    if (activeIndex <= 0 && delta < 0) {
      skipChanges = !loop;
      calcDelta = this.count + delta;
    } else if (activeIndex + 1 >= this.count && delta > 0) {
      skipChanges = !loop;
      calcDelta = -1 * activeIndex + delta - 1;
    }

    if (skipChanges) {
      return this._spring(toValue);
    }

    this.stopAutoplay();

    let index = activeIndex + calcDelta;
    this.setState({ activeIndex: index });

    if (direction === 'vertical') {
      toValue.y = height * -1 * calcDelta;
    } else {
      toValue.x = width * -1 * calcDelta;
    }
    this._spring(toValue);

    this.startAutoplay();
    this.props.onIndexChanged && this.props.onIndexChanged(index);
  }

  _onLayout({
    nativeEvent: {
      layout: { width, height },
    },
  }) {
    this.setState({ width, height }, () => this._fixState());
  }

  _renderButton({ type, isFirst, isLast, ...props }) {
    const { prevButtonTitle, nextButtonTitle, theme } = this.props;
    const { prevProps, nextProps, firstProps, lastProps } = this.buttonsProps;
    return (
      <Button
        type="clear"
        disabled={isFirst || isLast}
        title={type === 'prev' ? prevButtonTitle : nextButtonTitle}
        titleStyle={StyleSheet.flatten([styles.buttonTitleStyle(theme, type)])}
        {...(type === 'prev' ? prevProps : nextProps)}
        {...isFirst && firstProps}
        {...isLast && lastProps}
        {...props}
      />
    );
  }

  _renderPrev() {
    const { loop } = this.props;
    const {
      Component = this._renderButton,
      customComponentProps,
    } = this.buttonsProps;
    const { activeIndex } = this.state;
    const isFirst = !loop && !activeIndex;
    return (
      <Component
        {...customComponentProps}
        type="prev"
        isFirst={isFirst}
        onPress={isFirst ? undefined : () => this.goToPrev()}
      />
    );
  }

  _renderNext() {
    const { loop } = this.props;
    const {
      Component = this._renderButton,
      customComponentProps,
    } = this.buttonsProps;
    const { activeIndex } = this.state;
    const isLast = !loop && activeIndex + 1 >= this.count;
    return (
      <Component
        {...customComponentProps}
        type="next"
        isLast={isLast}
        onPress={isLast ? undefined : () => this.goToNext()}
      />
    );
  }

  _renderDotsItem({ isActive, ...props }) {
    const { theme } = this.props;
    const { itemContainerStyle, itemStyle, activeItemStyle } = this.dotsProps;
    return (
      <Badge
        containerStyle={StyleSheet.flatten([
          styles.dotsItemContainer,
          itemContainerStyle,
        ])}
        badgeStyle={StyleSheet.flatten([
          styles.dotsItem(theme, isActive),
          itemStyle,
          isActive && activeItemStyle,
        ])}
        {...props}
      />
    );
  }

  _renderDots() {
    const { direction, children } = this.props;
    const {
      Component = this._renderDotsItem,
      customComponentProps,
      touchable,
      wrapperStyle,
    } = this.dotsProps;
    const { activeIndex } = this.state;
    return (
      <View
        style={StyleSheet.flatten([
          styles.dotsWrapper(direction),
          wrapperStyle,
        ])}
      >
        {Children.toArray(children).map((dot, index) => (
          <View key={index}>
            <Component
              {...customComponentProps}
              index={index}
              isActive={index === activeIndex}
              onPress={!touchable ? undefined : () => this.goTo(index)}
            />
          </View>
        ))}
      </View>
    );
  }

  _renderControls() {
    const { direction, controlsWrapperStyle } = this.props;
    return (
      <View
        style={StyleSheet.flatten([
          styles.controlsWrapper(direction),
          controlsWrapperStyle,
        ])}
      >
        <View>{this.buttonsProps.visible && this._renderPrev()}</View>
        <View>{this.dotsProps.visible && this._renderDots()}</View>
        <View>{this.buttonsProps.visible && this._renderNext()}</View>
      </View>
    );
  }

  render() {
    const { pan, width, height } = this.state;

    const {
      direction,
      positionFixed,
      containerStyle,
      innerContainerStyle,
      swipeAreaStyle,
      slideWrapperStyle,
    } = this.props;

    // TODO: parse children in render() ??? But this.count used in _changeIndex()
    const children = Children.toArray(this.props.children);
    this.count = children.length;

    return (
      <View
        style={StyleSheet.flatten([styles.root, containerStyle])}
        onLayout={this._onLayout}
      >
        <View
          style={StyleSheet.flatten([
            styles.container(positionFixed, width, height),
            innerContainerStyle,
          ])}
        >
          <Animated.View
            style={StyleSheet.flatten([
              styles.swipeArea(direction, this.count, width, height),
              swipeAreaStyle,
              {
                transform: [{ translateX: pan.x }, { translateY: pan.y }],
              },
            ])}
            {...this._panResponder.panHandlers}
          >
            {children.map((el, i) => (
              <View
                key={i}
                style={StyleSheet.flatten([
                  { width, height },
                  slideWrapperStyle,
                ])}
              >
                {el}
              </View>
            ))}
          </Animated.View>
          {!this.buttonsProps.visible && !this.dotsProps.visible
            ? null
            : this._renderControls()}
        </View>
      </View>
    );
  }
}

Swiper.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  initialIndex: PropTypes.number,
  loop: PropTypes.bool,
  autoplayTimeout: PropTypes.number,
  springConfig: PropTypes.object,
  gesturesEnabled: PropTypes.bool,
  minDistanceToCapture: PropTypes.number, // inside ScrollView
  minDistanceForAction: PropTypes.number,
  dots: PropTypes.shape({
    visible: PropTypes.bool,
    touchable: PropTypes.bool,
    Component: PropTypes.func,
    customComponentProps: PropTypes.object,
    wrapperStyle: ViewPropTypes.style,
    itemContainerStyle: ViewPropTypes.style,
    itemStyle: ViewPropTypes.style,
    activeItemStyle: ViewPropTypes.style,
  }),
  buttons: PropTypes.shape({
    visible: PropTypes.bool,
    Component: PropTypes.func,
    customComponentProps: PropTypes.object,
    prevProps: PropTypes.object,
    nextProps: PropTypes.object,
    firstProps: PropTypes.object,
    lastProps: PropTypes.object,
  }),
  prevButtonTitle: PropTypes.string,
  nextButtonTitle: PropTypes.string,

  onAnimationStart: PropTypes.func,
  onAnimationEnd: PropTypes.func,
  onIndexChanged: PropTypes.func,

  // Fix safari vertical bounces
  positionFixed: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  innerContainerStyle: ViewPropTypes.style,
  swipeAreaStyle: ViewPropTypes.style,
  slideWrapperStyle: ViewPropTypes.style,
  controlsWrapperStyle: ViewPropTypes.style,

  theme: PropTypes.object,
};

Swiper.defaultProps = {
  direction: 'horizontal',
  initialIndex: 0,
  loop: false,
  autoplayTimeout: 0,
  gesturesEnabled: true,
  minDistanceToCapture: 5,
  minDistanceForAction: 0.2,
  positionFixed: false,
  dots: getDefaultDotsProps(),
  buttons: getDefaultButtonsProps(),
  prevButtonTitle: 'Prev',
  nextButtonTitle: 'Next',
};

const styles = {
  root: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  // Fix web vertical scaling (like expo v33-34)
  container: (positionFixed, width, height) => ({
    backgroundColor: 'transparent',
    // Fix safari vertical bounces
    position: positionFixed ? 'fixed' : 'relative',
    overflow: 'hidden',
    top: 0,
    left: 0,
    width,
    height,
  }),
  swipeArea: (direction, count, width, height) => ({
    position: 'relative',
    top: 0,
    left: 0,
    width: direction === 'vertical' ? width : width * count,
    height: direction === 'vertical' ? height * count : height,
    flexDirection: direction === 'vertical' ? 'column' : 'row',
  }),
  controlsWrapper: direction => ({
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 0,
    bottom: 0,
    padding: 10,
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    ...(direction === 'vertical' ? { top: 0 } : { left: 0 }),
  }),
  dotsWrapper: direction => ({
    flexDirection: direction === 'vertical' ? 'column' : 'row',
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
};

export { Swiper };
export default withTheme(Swiper, 'Swiper');
