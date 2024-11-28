// Libraries
import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components/native';

// Components
import { View } from 'react-native';
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
