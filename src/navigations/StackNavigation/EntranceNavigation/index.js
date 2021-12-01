import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  IntroductionContainer,
  LoginContainer,
  SignUpContainer,
} from '../../../containers/entrance';

const Stack = createStackNavigator();

export default function EntranceNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Introduction" component={IntroductionContainer} />
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="SignUp" component={SignUpContainer} />
    </Stack.Navigator>
  );
}
