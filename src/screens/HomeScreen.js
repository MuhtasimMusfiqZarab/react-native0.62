import React, {useRef, useEffect, useContext} from 'react';
import {
  Animated,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

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
        alignItems: 'stretch',
        justifyContent: 'center',
      }}>
      {route.params ? <Text>{route.params.post}</Text> : null}
      <Button title="Add Blog Post" onPress={addBlogpost} />
      <FlatList
        data={state}
        keyExtractor={(blogpost) => blogpost.title}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Icon name="trash" size={30} color="#900" />
          </View>
        )}
      />
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </Animated.View>
  );
};

//styling the component here
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default HomeScreen;
