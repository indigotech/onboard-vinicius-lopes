import React from 'react';
import { SafeAreaView } from 'react-native';
import { LoginScreen } from './src/login-screen';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

export function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>
    </ApolloProvider>
  );
}
