import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { getMusicData } from '../../../api-client';
import { DynamicArtistList as ArtistList } from '@/components';
import { Artist } from '@/types/artist';
import { Loading, Skeleton } from '@/UI';

const MainContainer = styled(View)`
  flex: 1;
  background-color: #F5FCFF;
`

export default function Home() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    getMusicData().then(data => setArtists(data));
  }, []);

  return (
    <MainContainer>
      { artists && <ArtistList artists={ artists } /> }
    </MainContainer>
  );
}
