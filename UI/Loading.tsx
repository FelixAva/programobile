import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

interface Props {
  size?: number;
  color?: string;
}

export default function Loading( { size = 50, color = 'red' }: Props ) {
  return <ActivityIndicator size={ size } color={ color } />;
}
