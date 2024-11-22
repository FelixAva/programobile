import React, { Suspense, useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ArtistBox from '../ArtistBox';
import { Artist } from '@/types/artist';
import { useRouter } from 'expo-router';
import { Loading } from '@/UI';
import { getMusicData } from '@/app/api-client';

export default function DynamicArtistList() {
  const router = useRouter();
  const [artists, setArtists] = useState<Artist[] | undefined>( undefined );

  useEffect(() => {
    getMusicData().then(data => {
      setArtists(data);
    })
  }, [])

  const handlePress = ( id: string ) => router.push({
    pathname: "/artistDetail/[id]",
    params: {
      id: id,
    },
  })

  return (
    <FlatList
      data={artists}
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
