// Libraries
import {
  useLocalSearchParams,
  useNavigation
} from 'expo-router';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';

// Hooks
import { useQuery } from '@tanstack/react-query';

// Components
import {
  View,
  Text,
  Image
} from 'react-native';

// Extras (Helpers, Constants, Types, Interfaces, Etc)
import { getArtistData } from '@/api/api-client';
import { Loading } from '@/UI';

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
    isLoading,
    data,
    isError,
    error
  } = useQuery({
    queryKey: ['artist'],
    queryFn: () => getArtistData( id )
  });

  useEffect(() => {
    navigation.setOptions({
      title: data?.name
    })
  }, [ data ]);

  if (isLoading) return <Loading color='blue' size={70} />

  return (
    <MainContainer>
      <ImageContainer
        testID='image-container'
        source={{ uri: data?.image }}
      />
      <Name testID='name-container' >{ data?.name } { data?.id }</Name>
    </MainContainer>
  );
}
