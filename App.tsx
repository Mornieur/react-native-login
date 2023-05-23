import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/components/screens/Home';
import theme from './src/global/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Home />
    </ThemeProvider>
  );
}
