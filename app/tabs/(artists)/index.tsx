import React, { Suspense, useEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { ArtistList } from '@/components';

const MainContainer = styled(View)`
  flex: 1;
  background-color: #F5FCFF;
`

export default function Home() {
  return (
    <MainContainer>
      <ArtistList />
    </MainContainer>
  );
}
