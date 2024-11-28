// Libraries
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';

// Hooks
import styled from 'styled-components/native';

// Components
import { View, Text } from 'react-native';
import { Loading } from '@/UI';
import { Button } from '@/components';

// Extras (Helpers, Constants, Types, Interfaces, Etc)
import { capitalize } from '@/helpers/capitalize';
import { Colors } from '@/constants/Colors';

const MainContainer = styled(View)`
  flex: 1;
  background-color: #F5FCFF;
  align-items: center;
`
export default function User() {

  const { user } = useLocalSearchParams() as unknown as { user: string };
  const navigation = useNavigation();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>( false );

  useEffect( () => {
    navigation.setOptions({
      title: capitalize(user)
    })
  }, [])

  const onLogOut = () => {
    setIsLoading( true );
    setTimeout(() => {
      router.replace('/');
      setIsLoading( false );
    }, 2000);
  };

  return (
    <MainContainer>
      <Text>User: { user }</Text>
      {
        isLoading
        ? <Loading />
        : (
          <Button
            title='Log Out'
            action={ onLogOut }
            textColor='white'
            customStyle={{ backgroundColor: Colors.light.warning }}
          />
        )
      }
    </MainContainer>
  );
}
