import React, { Suspense, useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ArtistBox from '../ArtistBox';
import { Artist } from '@/types/artist';
import { useRouter } from 'expo-router';
import useApi from '@/hooks/useApi';

export default function ArtistList() {
  const router = useRouter();
  const {
    error,
    isLoading,
    topArtist,
    getTopArtist
  } = useApi();

  useEffect(() => {
    getTopArtist('spain');
  }, [])

  const handlePress = ( id: string ) => router.push({
    pathname: "/tabs/(artists)/[id]",
    params: {
      id: id,
    },
  })

  return (
    <FlatList
      data={topArtist}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          testID={`artist-box-${item.name}`}
          onPress={() => handlePress(item.id)}
        >
          <ArtistBox artist={item} />
        </TouchableOpacity>
      )}
    />
  );
}