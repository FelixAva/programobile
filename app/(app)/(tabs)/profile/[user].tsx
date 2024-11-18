import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { capitalize } from '@/helpers/capitalize';
import { Button } from '@/components';
import { Colors } from '@/constants/Colors';
import { Loading } from '@/UI';

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
      router.replace('/(auth)');
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
