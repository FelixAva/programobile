import React from 'react';
import { Slot, Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Login'
        }}
      />
      <Stack.Screen
        name='register'
        options={{
          title: 'Register'
        }}
      />
    </Stack>
  );
}
