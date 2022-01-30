import React from 'react';
import { PanResponder, PanResponderGestureState, View } from 'react-native';
import { RneFunctionComponent } from '@react-native-elements/base/src/helpers';
import Svg, { Path, Circle, G, Text } from 'react-native-svg';

export type CircularSliderProps = {
  trackRadius?: number;
  thumbRadius?: number;
  trackWidth?: number;
  value?: number;
  onChange?: (x: number) => any;
  trackColor?: string;
  thumbColor?: string;
  trackTintColor?: string;
  thumbTextColor?: string;
  thumbTextSize?: number;
  noThumb?: boolean;
  showText?: boolean;
  showThumbText?: boolean;
  textColor?: string;
  textSize?: number;
  minimumValue?: number;
  maximumValue?: number;
  // Angles in Radians
  maxAngle?: number;
  minAngle?: number;
};

const CircularSlider: RneFunctionComponent<CircularSliderProps> = ({
  thumbRadius = 12,
  trackRadius = 100,
  trackWidth = 5,
  trackTintColor,
  trackColor,
  value = 0,
  minimumValue = 0,
  maximumValue = 100,
  minAngle = 0,
  maxAngle = 359.9,
  onChange = (x) => x,
  thumbTextColor = 'white',
  thumbTextSize = 10,
  noThumb = false,
  showText = false,
  showThumbText = false,
  thumbColor,
  textColor,
  textSize = 80,
  theme,
}) => {
  const location = React.useRef({ x: 0, y: 0 });
  const viewRef = React.useRef<View>(null);
  const valuePercentage = ((value - minimumValue) * 100) / maximumValue;

  const { current: panResponder } = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => location.current.x && location.current.y,
      onPanResponderMove: (_e, { moveX, moveY }: PanResponderGestureState) => {
        let angle = cartesianToPolar(
          moveX - location.current.x + trackRadius + thumbRadius,
          moveY - location.current.y + trackRadius + thumbRadius
        );
        if (angle <= minAngle) {
          onChange(minAngle / 3.6);
        } else if (angle >= maxAngle) {
          onChange(maxAngle / 3.6);
        } else {
          onChange(angle / 3.6);
        }
      },
    })
  );

  const polarToCartesian = React.useCallback(
    (angleToChange: number) => {
      let r = trackRadius;
      let hC = trackRadius + thumbRadius;
      let a = ((angleToChange - 90) * Math.PI) / 180.0;

      let x = hC + r * Math.cos(a);
      let y = hC + r * Math.sin(a);
      return { x, y };
    },
    [trackRadius, thumbRadius]
  );

  const cartesianToPolar = React.useCallback(
    (x, y) => {
      let hC = trackRadius + thumbRadius;

      if (x === 0) {
        return y > hC ? 0 : 180;
      } else if (y === 0) {
        return x > hC ? 90 : 270;
      } else {
        return (
          Math.round((Math.atan((y - hC) / (x - hC)) * 180) / Math.PI) +
          (x > hC ? 90 : 270)
        );
      }
    },
    [trackRadius, thumbRadius]
  );

  const width = (trackRadius + thumbRadius) * 2;
  const startCoord = polarToCartesian(0);
  const endCoord = polarToCartesian(valuePercentage * 3.6);
  const endTintCoord = polarToCartesian(maxAngle);

  return (
    <View
      style={{ width, height: width }}
      ref={viewRef}
      onLayout={() => {
        viewRef.current?.measure((x, y, w, h, px, py) => {
          location.current = {
            x: px + w / 2,
            y: py + h / 2,
          };
        });
      }}
    >
      <Svg width={width} height={width} ref={viewRef}>
        <Path
          stroke={trackTintColor || theme?.colors?.grey5}
          strokeWidth={trackWidth}
          d={[
            'M',
            startCoord.x,
            startCoord.y,
            'A',
            trackRadius,
            trackRadius,
            0,
            maxAngle <= 180 ? '0' : '1',
            1,
            endTintCoord.x,
            endTintCoord.y,
          ].join(' ')}
        />
        <Path
          stroke={trackColor || theme?.colors?.primary}
          strokeWidth={trackWidth}
          fill="none"
          d={`M${startCoord.x} ${
            startCoord.y
          } A ${trackRadius} ${trackRadius} 0 ${
            valuePercentage * 3.6 > 180 ? 1 : 0
          } 1 ${endCoord.x} ${endCoord.y}`}
        />
        {showText && (
          <Text
            x={trackRadius + thumbRadius}
            y={trackRadius + 40}
            fontSize={textSize}
            fill={textColor || trackColor || theme?.colors?.primary}
            textAnchor="middle"
          >
            {Math.ceil(value).toString()}
          </Text>
        )}

        {!noThumb && (
          <G x={endCoord.x - thumbRadius} y={endCoord.y - thumbRadius}>
            <Circle
              r={thumbRadius}
              cx={thumbRadius}
              cy={thumbRadius}
              fill={thumbColor || trackColor || theme?.colors?.primary}
              {...panResponder.panHandlers}
            />
            {showThumbText && (
              <Text
                x={thumbRadius}
                y={thumbRadius + thumbTextSize / 2}
                fontSize={10}
                fill={thumbTextColor || theme?.colors?.white}
                textAnchor="middle"
              >
                {Math.ceil(value).toString().padStart(2, '0')}
              </Text>
            )}
          </G>
        )}
      </Svg>
    </View>
  );
};

export default CircularSlider;
