/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { HomeScreen } from './src/home-screen';
import { App } from './App';

Navigation.registerComponent('LOGIN', () => App);
Navigation.registerComponent('HOME', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'LOGIN'
            }
          }
        ]
      }
    }
  });
});
