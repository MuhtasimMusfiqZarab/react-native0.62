// at the end this index file will contain all the screens
import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

//importing the screens
import HomeScreen from './HomeScreen';
import ShowScreen from './ShowScreen';
import CreateScreen from './CreateScreen';

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
        name="Show"
        component={ShowScreen}
        //configuration of the header
        options={{
          title: 'Blog',
        }}
      />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        //configuration of the header
        options={{
          title: 'Create Blog',
        }}
      />
    </Stack.Navigator>
  );
}

//This is the styling
const styles = StyleSheet.create({});
