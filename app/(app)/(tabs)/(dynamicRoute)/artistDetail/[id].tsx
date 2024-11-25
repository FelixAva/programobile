import { getArtistData } from '@/api/api-client';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function ArtistDetail() {

  //? Get id and convert to unknown and later specify that id is a string
  const { id } = useLocalSearchParams() as unknown as { id: string };
  const navigation = useNavigation();

  useEffect( () => {
    getArtistData( id ).then( (artist: any) => {
      navigation.setOptions({
        title: artist.name,
      });
    });
  }, [])

  return (
    <View>
      <Text> Artist ID: { id } </Text>
    </View>
  );
}
