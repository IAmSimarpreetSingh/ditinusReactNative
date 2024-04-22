/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {name as appName} from './app.json';
import { navigationRef } from './helper/navigationServices';
import { NavigationContainer } from '@react-navigation/native';

const Main = () => (
    <NavigationContainer
      ref={navigationRef}>
      <App />
    </NavigationContainer>
  );

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Main));
