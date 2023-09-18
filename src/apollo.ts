import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { storage } from '../utils/storage';
import { setContext } from '@apollo/client/link/context';

const BASE_LINK = 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql';

const endpointLink = createHttpLink({
  uri: BASE_LINK
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = storage.getString('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(endpointLink), 
  cache: new InMemoryCache(),
});
