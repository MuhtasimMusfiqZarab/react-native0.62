import React, {useRef, useEffect} from 'react';
import {Animated, Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  //This is for animation purpose
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, []);

  return (
    <Animated.View style={{opacity: fadeAnim}}>
      <Text>This is home</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </Animated.View>
  );
};

export default HomeScreen;
