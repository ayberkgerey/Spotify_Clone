import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigations/TabNavigation';
import StackNavigation from './src/navigations/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
