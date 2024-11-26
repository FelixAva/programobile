import { getArtistData } from '@/api/api-client';
import { Artist } from '@/types/artist';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled(View)`
  flex: 1;
  background-color: #F5FCFF;
  align-items: center;
`
const ImageContainer = styled(Image)`
  width: 100%;
  height: 450px;
`

const Name = styled(Text)`
  flex: 1;
  font-size: 22px;
  margin-top: 45px;
`

export default function ArtistDetail() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams() as unknown as { id: string }; //? Get id and convert to unknown and later specify that id is a string
  const [artist, setArtist] = useState<Artist>();

  useEffect(() => {
    getArtistData( id ).then( (data) => {
      setArtist({ id, ...data });
    });
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: artist?.name
    })
    console.log(artist?.image)
  }, [ artist ]);

  return (
    <MainContainer>
      <ImageContainer
        testID='image-container'
        source={{ uri: artist?.image }}
      />
      <Name testID='name-container' >{ artist?.name } { artist?.id }</Name>
    </MainContainer>
  );
}
