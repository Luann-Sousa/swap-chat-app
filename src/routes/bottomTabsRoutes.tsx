/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  AntDesign,
} from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { FriendsScreen } from '../screens/Friends';
import { ChatAll } from '../screens/ChatAll';
import { RoutesAuthenticate } from '../routes/authenticateRoutes';

const BottomTabs = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={RoutesAuthenticate}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart-circle" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Conversas"
        component={ChatAll}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View>
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                  backgroundColor: '#ff2f4b',
                  position: 'absolute',
                  marginLeft: 18,
                  marginTop: -6,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 8, color: '#fff' }}>18</Text>
              </View>
              <MaterialIcons name="chat" size={size} color={color} />
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="Amigos"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View>
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                  backgroundColor: '#44fa1f',
                  position: 'absolute',
                  marginLeft: 25,
                  marginTop: -7,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 8, color: '#fff' }}>19</Text>
              </View>
              <FontAwesome5 name="user-friends" size={size} color={color} />
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="Logout"
        component={RoutesAuthenticate}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="poweroff" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
