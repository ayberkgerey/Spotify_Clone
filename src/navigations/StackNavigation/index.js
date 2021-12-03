import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BirthDateContainer,
  GenderContainer,
  IntroductionContainer,
  LoginContainer,
  LoginWithoutPasswordContainer,
  PasswordContainer,
  SignUpContainer,
} from '../../containers/entrance';
import TabNavigation from '../TabNavigation';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Introduction" component={IntroductionContainer} />
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="SignUp" component={SignUpContainer} />
      <Stack.Screen name="Password" component={PasswordContainer} />
      <Stack.Screen name="BirthDate" component={BirthDateContainer} />
      <Stack.Screen name="Gender" component={GenderContainer} />
      <Stack.Screen
        name="LoginWithoutPassword"
        component={LoginWithoutPasswordContainer}
      />
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  );
}
