import { Stack } from 'expo-router';
import React from 'react';

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name='[user]' />
    </Stack>
  );
}
