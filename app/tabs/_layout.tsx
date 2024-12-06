// Libraries
import { Tabs } from 'expo-router';
import React from 'react';

// Components
import { TabBarIcon } from '@/components';
import { useUserStore } from '@/hooks/useUser';

export default function TabLayout() {
  const { session } = useUserStore();

  if ( !session ) return null;

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      }}
    >
      <Tabs.Screen
        name='(home)'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name='home-outline' color={ color } />,
        }}
      />
      <Tabs.Screen
        name='(profile)'
        options={{
          title: 'Profile',
          href: {
            pathname: '/tabs/(profile)/[user]',
            params: {
              user: `${session.name}`
            }
          },
          tabBarIcon: ({ color }) => <TabBarIcon name='person-outline' color={ color } />,
        }}
      />
    </Tabs>
  );
}
