import React, { ReactElement, useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, TextInput, Text } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { getFF } from '../utils/getFF';
import Androw from 'react-native-androw'
import { sizes } from '../utils/ThemeContext';

interface IProgressBar {
  progress: number
  children?: never
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const ProgressBar = ({ progress = 0 }: IProgressBar): ReactElement => {
  const percentage = ((progress / 100) * 100).toFixed(0)
  const animatedValue = useRef(new Animated.Value(0)).current;
  const radius = sizes[38];
  const strokeWidth = 13;
  const duration = 500;
  const color = '#FFFFFF';
  const delay = 0;
  const max = 100;
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const circleRef: any = useRef();
  const inputRef: any = useRef();

  const animation = (toValue: number) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(Number(percentage));

    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }

      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}%`,
        });
      }
    });
    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, percentage]);

  return (
    <Androw style={{
      shadowColor: '#941008',
      shadowOffset: {
        width: 1,
        height: sizes[2],
      },
      shadowOpacity: 1,
      shadowRadius: sizes[6],
    }}>
      <View>
        <Svg
          width={radius * 3}
          height={radius * 3}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
          <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
            <Circle
              cx="50%"
              cy="50%"
              stroke={color}
              strokeWidth={strokeWidth}
              r={radius}
              strokeOpacity={0.2}
              fill="transparent"
            />
            <AnimatedCircle
              ref={circleRef}
              cx="50%"
              cy="50%"
              stroke={color}
              strokeWidth={strokeWidth}
              r={radius}
              fill="transparent"
              strokeDasharray={circleCircumference}
              strokeDashoffset={circleCircumference}
              strokeLinecap="round"
            />
          </G>
        </Svg>
        <AnimatedInput
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue="0"
          style={[
            StyleSheet.absoluteFillObject,
            {
              fontFamily: getFF(400),
              fontSize: radius / 2.2,
              color: color,
              textAlign: 'center',
              width: radius * 3,
              marginBottom: 15
            },

          ]}
        />
      </View>
    </Androw>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({});
