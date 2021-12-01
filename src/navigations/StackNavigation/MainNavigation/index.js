import React from 'react';
import createStackNavigator from 'react-native-screens/createNativeStackNavigator';
import EntranceNavigation from '../EntranceNavigation';
import TabNavigation from '../../TabNavigation';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EntranceNav" component={EntranceNavigation} />
      <Stack.Screen name="TabNav" component={TabNavigation} />
    </Stack.Navigator>
  );
}
