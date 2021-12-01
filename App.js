import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigations/TabNavigation';
import EntranceNavigation from './src/navigations/StackNavigation/EntranceNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <EntranceNavigation />
    </NavigationContainer>
  );
}
