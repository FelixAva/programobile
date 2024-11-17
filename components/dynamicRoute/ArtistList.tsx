import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ArtistBox from '../ArtistBox';
import { Artist } from '@/types/artist';
import { useRouter } from 'expo-router';

export default function DynamicArtistList( { artists }: { artists: Artist[]} ) {
  const router = useRouter();

  const handlePress = ( id: string ) => router.push({
    pathname: "/artistDetail/[id]",
    params: {
      id: id,
    },
  })

  return (
    <View>
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
    </View>
  );
}
