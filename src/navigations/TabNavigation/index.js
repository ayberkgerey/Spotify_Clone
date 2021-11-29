import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeContainer,
  LibraryContainer,
  SearchContainer,
} from '../../containers/main';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="Search" component={SearchContainer} />
      <Tab.Screen name="Library" component={LibraryContainer} />
    </Tab.Navigator>
  );
}
