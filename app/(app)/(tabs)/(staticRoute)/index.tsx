import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { getMusicData } from '../../../api-client';
import { StaticArtistList as ArtistList} from '@/components';
import { Artist } from '@/types/artist';

const MainContainer = styled(ScrollView)`
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
