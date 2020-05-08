import React, {useRef, useEffect} from 'react';
import {Animated, Text, View, Button} from 'react-native';

//using route to get the data from the other screens (here the profile)
const HomeScreen = ({navigation, route}) => {
  //This is for animation purpose
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // this is
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {route.params ? <Text>{route.params.post}</Text> : null}
      <Text>This is home</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </Animated.View>
  );
};

export default HomeScreen;
