import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { capitalize } from '@/helpers/capitalize';
import { Button } from '@/components';
import { Colors } from '@/constants/Colors';

const MainContainer = styled(View)`
  flex: 1;
  background-color: #F5FCFF;
  align-items: center;
`
export default function User() {

  const { user } = useLocalSearchParams() as unknown as { user: string};
  const navigation = useNavigation();
  const router = useRouter();

  useEffect( () => {
    navigation.setOptions({
      title: capitalize(user)
    })
  }, [])

  const onLogOut = () => {
    router.replace('/(auth)');
  };

  return (
    <MainContainer>
      <Text>User: { user }</Text>
      <Button
        title='Log Out'
        action={ onLogOut }
        light
        customStyle={{ backgroundColor: Colors.light.warning }}
      />
    </MainContainer>
  );
}
