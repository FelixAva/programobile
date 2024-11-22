import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  interpolateColor
} from 'react-native-reanimated';

interface Props {
  width: number;
  height: number;
  color1?: string;
  color2?: string;
}

const SkeletonContainer = styled(Animated.View)`
  border-radius: 7px;
`

const duration = 700;
const easing = Easing.inOut(Easing.ease);

export default function Skeleton({
  width,
  height,
  color1 = 'gray',
  color2 = 'black'
}: Props ) {
  const sv = useSharedValue<number>(0);

  useEffect( () => {
    sv.value = withRepeat(
      withTiming(1, { duration, easing }),
      -1,
      true // Alterna la direccion de la animacion
    );
  }, [])

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(sv.value, [0, 1, 2], [color1, color2, 'white'])
  }));

  return (
    <SkeletonContainer
      style={[
        {
          width: width,
          height: height,
        },
        animatedStyle
    ]}
    >
    </SkeletonContainer>
  );
}
