import React from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  title: string;
  light: boolean;
  customStyle?: StyleProp<ViewStyle>;
  action: () => void;
}

const ButtonContainer = styled(Pressable)`
  width: 200px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  background-color: #5149f584;
`

const Title = styled(Text)`
  font-size: 18px;
`

export default function Button( { title, customStyle, action, light }: Props ) {
  return (
    <ButtonContainer
      style={ customStyle }
      onPress={ action }
    >
      <Title style={ light ? {color: '#fff'} : { color: '#000' } }>{ title }</Title>
    </ButtonContainer>
  );
}
