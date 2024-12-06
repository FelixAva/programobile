// Libraries
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';

// Hooks
import { useQuery } from '@tanstack/react-query';

// Components
import { FlatList, TouchableOpacity, View } from 'react-native';
import ArtistBox from './ArtistBox';
import { Loading } from '@/UI';

// Extras (Helpers, Constants, Types, Interfaces, Etc)
import { getTopArtist } from '@/api/api-client';

export default function ArtistList( { country }: { country: string } ) {
  const router = useRouter();
  const {
    isLoading,
    data,
    isError,
    error
  } = useQuery({
    queryKey: ['topArtists'],
    queryFn: () => getTopArtist( country )
  });

  const handlePress = ( id: string ) => router.push({
    pathname: "/tabs/(artists)/[id]",
    params: {
      id: id,
    },
  })

  //! Later change it to a skeleton
  if (isLoading) return <Loading color='blue' size={70} />;

  return (
    <FlatList
      data={data}
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
