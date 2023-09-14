/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { client } from './src/apollo/apollo';
import { ApolloProvider } from '@apollo/client';
import { LoginScreen } from './src/screens/login-screen';
import { HomeScreen } from './src/screens/home-screen';

Navigation.registerComponent('LOGIN', () => ApolloWrappedLogin);
Navigation.registerComponent('HOME', () => ApolloWrappedHome);

const ApolloWrappedLogin = (props) => (
    <ApolloProvider client={client}>
      <LoginScreen {...props} />
    </ApolloProvider>
);

const ApolloWrappedHome = () => (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
);


Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'LOGIN',
              passProps: {
                component: ApolloWrappedLogin
              }
            }
          }
        ]
      }
    }
  });
});
