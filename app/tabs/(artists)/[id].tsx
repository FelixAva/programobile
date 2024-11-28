import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Artist } from '@/types/artist';
import styled from 'styled-components/native';
import useApi from '@/hooks/useApi';

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
  const {
    error,
    isLoading,
    artistData,
    getArtistData
  } = useApi();

  useEffect(() => {
    getArtistData( id );
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: artistData?.name
    })
  }, [ artistData ]);

  return (
    <MainContainer>
      <ImageContainer
        testID='image-container'
        source={{ uri: artistData?.image }}
      />
      <Name testID='name-container' >{ artistData?.name } { artistData?.id }</Name>
    </MainContainer>
  );
}
