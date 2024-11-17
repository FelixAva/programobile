import { Artist } from '@/types/artist';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, Image, InteractionManager } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled(View)`
  flex: 1;
  background-color: #F5FCFF;
  align-items: center;
  gap: 45;
`
const ImageContainer = styled(Image)`
  width: 100%;
  height: 450px;
`

const Name = styled(Text)`
  flex: 1;
  font-size: 22px;
`

export default function ArtistDetailView() {

  const navigation = useNavigation();
  const { id, name, image } = useLocalSearchParams() as unknown as Artist;

  useEffect(() => {
    navigation.setOptions({
      title: name
    })
  }, []);

  return (
    <MainContainer id={ id }>
      <ImageContainer
        source={{ uri: image }}
      />
      <Name>{ name } { id }</Name>
    </MainContainer>
  );
}
