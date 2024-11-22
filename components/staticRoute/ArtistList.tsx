import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ArtistBox from '../ArtistBox';
import { Artist } from '@/types/artist';
import { useRouter } from 'expo-router';

export default function StaticArtistList( { artists }: { artists: Artist[]} ) {
  const router = useRouter();

  const handlePress = ( artist: Artist ) => router.push({
    pathname: "/ArtistDetailView",
    params: {
      id: artist.id,
      name: artist.name,
      image: artist.image
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
          onPress={() => handlePress(item)}
        >
          <ArtistBox artist={item} />
        </TouchableOpacity>
      )}
    />
  );
}
