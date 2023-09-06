import React from 'react';
import { SafeAreaView } from 'react-native';
import { LoginScreen } from './src/login-screen';

export function App(): JSX.Element {
  return (
    <SafeAreaView>
      <LoginScreen/>
    </SafeAreaView>
  );
}
