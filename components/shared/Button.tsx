// Libraries
import {
  Pressable,
  StyleProp,
  Text,
  ViewStyle
} from 'react-native';
import styled from 'styled-components/native';

// Components
import React from 'react';

interface Props {
  title: string;
  textColor?: string;
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

export default function Button( { title, customStyle, action, textColor = 'black'  }: Props ) {
  return (
    <ButtonContainer
      style={ customStyle }
      onPress={ action }
    >
      <Title style={{ color: textColor }}>{ title }</Title>
    </ButtonContainer>
  );
}
