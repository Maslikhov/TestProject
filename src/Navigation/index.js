import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import HomeScreen  from '../Screens/HomeScreen';
import { DEFAULT_NAV_OPTIONS, RouteNames } from './configs';

const RootStack = createNativeStackNavigator();

const RootContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={RouteNames.WelcomeScreen}>
        <RootStack.Screen 
          options={DEFAULT_NAV_OPTIONS}  
          name={RouteNames.WelcomeScreen} 
          component={WelcomeScreen} 
        />
        <RootStack.Screen 
          options={DEFAULT_NAV_OPTIONS}  
          name={RouteNames.HomeScreen} 
          component={HomeScreen} 
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootContainer;
