import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#111',
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            height: 70,
          },
        }),
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          textTransform: 'uppercase',
        },
      }}>
      <Tabs.Screen
        name="sports"
        options={{
          title: 'Sports',
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="ee"
        options={{
          title: 'EE',
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="faculty"
        options={{
          title: 'Faculty',
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
