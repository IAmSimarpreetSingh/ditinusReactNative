/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import MainRouter from './routes/mainRouter';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
        <View style={{height: '100%', width: '100%'}}>
          <StatusBar
            animated={true}
            backgroundColor='#131830'
            barStyle='light-content'
          />
          <MainRouter />
        </View>
    </SafeAreaView>
  );
}

export default App;
