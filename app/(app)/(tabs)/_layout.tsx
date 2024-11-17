import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      }}
    >
      <Tabs.Screen
        name='(dynamicRoute)'
        options={{
          title: 'Dynamic Route',
          tabBarIcon: ({ color }) => <TabBarIcon name='add' color={ color } />,
        }}
      />
      <Tabs.Screen
        name='(staticRoute)'
        options={{
          title: 'Static Route',
          tabBarIcon: ({ color }) => <TabBarIcon name='add-circle' color={ color } />,
        }}
      />
    </Tabs>
  );
}
