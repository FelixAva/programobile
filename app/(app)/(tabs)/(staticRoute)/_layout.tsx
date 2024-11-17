import { Stack } from 'expo-router';
import React from 'react';

export default function StaticTabLayout() {
  return (
    <Stack screenOptions={{
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen
        name='index'
        options={{
          title: 'Static Route Home'
        }}
      />
    </Stack>
  );
}
