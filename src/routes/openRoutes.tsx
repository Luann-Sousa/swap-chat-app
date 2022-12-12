import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SiginInScreen } from '../screens/SiginIn';
import { LoginScreen } from '../screens/Login';
import { SignInUpScreen } from '../screens/SignInUp';
import { BottomTabsRoutes } from './bottomTabsRoutes';

export type ScreenStackParamList = {
  Login: undefined;
  SigninScreen: undefined;
  SignInUpScreen: undefined;
  Messege: undefined;
  HomeAuth: undefined;
};

const Stack = createStackNavigator<ScreenStackParamList>();

export function OpenRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SigninScreen" component={SiginInScreen} />
      <Stack.Screen name="SignInUpScreen" component={SignInUpScreen} />
      <Stack.Screen name="HomeAuth" component={BottomTabsRoutes} />
    </Stack.Navigator>
  );
}
