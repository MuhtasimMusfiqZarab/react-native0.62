// at the end this index file will contain all the screens
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//importing the screens
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

//creating the dtack navigator
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
}
