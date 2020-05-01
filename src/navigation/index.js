import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title: 'Welcome'}} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
