import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
  color1?: any;
  color2?: any;
}

const SkeletonContainer = styled(View)`
  width: 300px;
  height: 30px;
  background-color: gray;
  border-radius: 7px;
  margin: 10px;
`

export default function Skeleton( { width, height, color1, color2 }: Props ) {
  return (
    <SkeletonContainer
      style={{
        width: width,
        height: height
      }}
    >
    </SkeletonContainer>
  );
}
