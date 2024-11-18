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
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          href: {
            pathname: '/profile/[user]',
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
