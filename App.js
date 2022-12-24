import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PhotoPage from './component/PhotoPage';

import Ionicons from 'react-native-vector-icons/Ionicons';

import InfoScreen from './component/InfoScreen';

import CalculatorScreen from './component/CalculatorScreen';

import AllTry from './component/allTry';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      activeColor="#f0edf6"

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === 'Photos') {
              iconName = focused
                ? 'camera'
                : 'camera-outline';
            } else if (route.name === 'Calculator') {
              iconName = focused ? 'calculator' : 'calculator-outline'
             
            } else if (route.name === 'Info') {
              iconName = focused ? 'person' : 'person-outline';
            }
            else if (route.name === 'Clock') {
              iconName = focused ? 'time' : 'time-outline';
            }


            return <Ionicons name={iconName} size={size} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}


      >
        <Tab.Screen name="Photos" component={PhotoPage} />
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="Calculator" component={CalculatorScreen}/>
        <Tab.Screen name="Clock" component={AllTry} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}