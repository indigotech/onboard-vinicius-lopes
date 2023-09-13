import React from 'react';
import { SafeAreaView } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { LoginScreen } from './src/login-screen';

const client = new ApolloClient({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

export const storage = new MMKV({ id: 'onboarding-app' });

interface Props {
  componentId: string;
}

export function App({ componentId }: Props): JSX.Element{
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