import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './splashScreen';
import HomePage from './homePage';
import QuestionScreen from './quiz/question';
import Levels from './quiz/levels';
import CatergeryPage from './categeryPage';
import CategeryContent from './categeryContent';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
        <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="homePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CatergeryPage"
          component={CatergeryPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="levels"
          component={Levels}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategeryContent"
          component={CategeryContent}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>


  )
};

export default Routes;