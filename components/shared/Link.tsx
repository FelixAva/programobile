// Libraries
import { router } from 'expo-router';
import React from 'react';
import styled from 'styled-components/native';

// Components
import {
  Pressable,
  StyleSheet,
  Text
} from 'react-native';

interface Props {
  label: string;
  route: 'register' | '';
}

const StyText = styled(Text)`
  font-size: 22px;
  color: #000;
`

const RouteName = styled(Text)`
  font-size: 22px;
  color: blue;
  font-style: italic;
  text-transform: uppercase;
`

export default function Link( { label, route }: Props ) {
  return (
    <Pressable onPress={ () => router.replace(`/${ route }`) }>
      <StyText>
        { label } <RouteName>{ route === 'register' ? 'Register' : 'Log In' }</RouteName>
      </StyText>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 22,
  },
  route: {
    color: 'blue',
    fontStyle: 'italic',
    textTransform: 'uppercase'
  }
});
