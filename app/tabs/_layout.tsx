import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components';

export default function TabLayout() {

  /*
   * Function to get the user ID
   * Pass the id to the User dynamic route TabScreen
  */

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
