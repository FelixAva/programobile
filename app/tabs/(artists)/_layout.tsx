import { Stack } from 'expo-router';
import React from 'react';

export default function DynamicTabLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Artists'
        }}
      />
    </Stack>
  );
}
