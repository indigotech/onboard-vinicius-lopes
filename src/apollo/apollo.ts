import { MMKV } from 'react-native-mmkv';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const BASE_LINK = 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql';

const endpointLink = createHttpLink({
    uri:BASE_LINK
});

export const client = new ApolloClient({
  link: endpointLink, 
  cache: new InMemoryCache(),
});
