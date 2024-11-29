// Libraries
import React from 'react';

// Components
import { ActivityIndicator, View } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  size?: number;
  color?: string;
}

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default function Loading( { size = 50, color = 'red' }: Props ) {
  return (
    <LoadingContainer>
      <ActivityIndicator size={ size } color={ color } />
    </LoadingContainer>
  );
}
