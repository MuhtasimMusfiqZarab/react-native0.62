// at the end this index file will contain all the screens
import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

//importing the screens
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

//creating the dtack navigator
const Stack = createStackNavigator();

export default function IndexScreen() {
  return (
    <Stack.Navigator
      //make home as initial route
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

//This is the styling
const styles = StyleSheet.create({});
