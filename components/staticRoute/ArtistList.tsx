import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import ArtistBox from '../ArtistBox';
import { Artist } from '@/types/artist';
import { useRouter } from 'expo-router';

export default function StaticArtistList( { artists }: { artists: Artist[]} ) {
  const router = useRouter();

  const handlePress = ( id: string ) => router.push({
    pathname: "/ArtistDetailView",
    params: {
      id: id
    },
  })

  return (
    <FlatList
      testID='artist-list'
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
