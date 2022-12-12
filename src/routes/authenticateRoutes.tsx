import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FriendsScreen } from '../screens/Friends';
import { LoginScreen } from '../screens/Login';
import { MatchScreen } from '../screens/Match';
import { Message } from '../screens/Message';
import { BottomTabsRoutes } from './bottomTabsRoutes';
import { IMessegerProps } from '../DTOS/messeger';

export type ScreenStackParamList = {
  MatchScreen: undefined;
  SigninScreen: undefined;
  SignInUpScreen: undefined;
  Message: { data: IMessegerProps };
  HomeAuth: undefined;
};

const Stack = createStackNavigator<ScreenStackParamList>();

export function RoutesAuthenticate() {
  return (
    <Stack.Navigator
      initialRouteName="MatchScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MatchScreen" component={MatchScreen} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
}
