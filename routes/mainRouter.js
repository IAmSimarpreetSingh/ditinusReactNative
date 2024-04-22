import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen, QuizScreen } from '../screens';
const MainStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <MainStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name={'Home'} component={HomeScreen} />

      <MainStack.Screen
      name={'QuizScreen'}
      component={QuizScreen}
      options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}
    />
    </MainStack.Navigator>
  );
};

export default MainRouter;
