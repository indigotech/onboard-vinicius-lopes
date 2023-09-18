/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { client } from './src/apollo';
import { ApolloProvider } from '@apollo/client';
import { LoginScreen } from './src/screens/login-screen';
import { HomeScreen } from './src/screens/home-screen';
import { SignUpScreen } from './src/screens/sign-up-screen';

Navigation.registerComponent('LOGIN', () => ApolloWrappedLogin);
Navigation.registerComponent('HOME', () => ApolloWrappedHome);
Navigation.registerComponent('SIGNUP', () => ApolloWrappedSignUp);

const ApolloWrappedLogin = (props) => (
  <ApolloProvider client={client}>
      <LoginScreen {...props} />
    </ApolloProvider>
);

const ApolloWrappedHome = (props) => (
  <ApolloProvider client={client}>
      <HomeScreen {...props}/>
    </ApolloProvider>
);

const ApolloWrappedSignUp = () => (
  <ApolloProvider client={client}>
    <SignUpScreen />
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
