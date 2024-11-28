// Libraries
import { Tabs } from 'expo-router';
import React from 'react';

// Components
import { TabBarIcon } from '@/components';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      }}
    >
      <Tabs.Screen
        name='(artists)'
        options={{
          title: 'Artists',
          tabBarIcon: ({ color }) => <TabBarIcon name='add' color={ color } />,
        }}
      />
      <Tabs.Screen
        name='(profile)'
        options={{
          title: 'Profile',
          href: {
            pathname: '/tabs/(profile)/[user]',
            params: {
              user: 'evanbacon'
            }
          },
          tabBarIcon: ({ color }) => <TabBarIcon name='person-outline' color={ color } />,
        }}
      />
    </Tabs>
  );
}
