import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './screens/AppNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style="dark" />

        <AppNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
