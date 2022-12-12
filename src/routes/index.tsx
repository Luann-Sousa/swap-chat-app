/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { OpenRoutes } from './openRoutes';
import { BottomTabsRoutes } from './bottomTabsRoutes';

export function AppRoutes() {
  const [user, setUser] = useState(false);
  return (
    <NavigationContainer>
      {user ? <BottomTabsRoutes /> : <OpenRoutes />}
    </NavigationContainer>
  );
}
