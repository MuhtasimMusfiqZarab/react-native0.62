import React, {useRef, useEffect, useContext} from 'react';
import {
  Animated,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';

//importing  to get the data
import {Context} from '../context/BlogContext';

//using route to get the data from the other screens (here the profile)
const HomeScreen = ({navigation, route}) => {
  //we are getting the value from context
  const {state, addBlogpost} = useContext(Context);

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
      <Button title="Add Blog Post" onPress={addBlogpost} />
      <FlatList
        data={state}
        keyExtractor={(blogpost) => blogpost.title}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </Animated.View>
  );
};

export default HomeScreen;
