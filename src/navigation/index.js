// at the end this index file will contain all the screens
import React, {useLayoutEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//importing the screens
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

import {Button} from 'react-native';

//creating the dtack navigator
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        //configuration of the header
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}
