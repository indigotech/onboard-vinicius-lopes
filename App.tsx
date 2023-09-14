import React from 'react';
import { SafeAreaView } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { NavigationProps } from 'react-native-navigation';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/apollo';
import { LoginScreen } from './src/screens/login-screen';

export function App({componentId}: NavigationProps): JSX.Element{
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <LoginScreen componentId={componentId} />
      </SafeAreaView>
    </ApolloProvider>
  );
}

App.options = {
  topBar: {
      title: {
          text: 'Sign In',
          color: 'black'
      }
  }
}
