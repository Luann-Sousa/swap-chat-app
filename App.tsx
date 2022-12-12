/* eslint-disable react/style-prop-object */
/* eslint-disable camelcase */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import theme from './src/hooks/colors/theme';

import { AppRoutes } from './src/routes';

export default function App() {
  const [robotoFontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!robotoFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" />
      <AppRoutes />
    </ThemeProvider>
  );
}
