import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeContainer,
  LibraryContainer,
  SearchContainer,
} from '../../containers/main';
import TabContent from '../contents/TabContent';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabContent {...props} />}>
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="Search" component={SearchContainer} />
      <Tab.Screen name="Library" component={LibraryContainer} />
    </Tab.Navigator>
  );
}
