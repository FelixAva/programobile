import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { capitalize } from '../../../../helpers/capitalize';

const MainContainer = styled(View)`
  flex: 1;
  background-color: #F5FCFF;
`
export default function User() {

  const { user } = useLocalSearchParams() as unknown as { user: string};
  const navigation = useNavigation();

  useEffect( () => {
    navigation.setOptions({
      title: capitalize(user)
    })
  }, [])

  return (
    <MainContainer>
      <Text>User: { user }</Text>
    </MainContainer>
  );
}
