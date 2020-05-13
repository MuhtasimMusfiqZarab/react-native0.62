//useContext to get the data rom the context
import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';

import Icon from 'react-native-vector-icons/FontAwesome';

const ShowScreen = ({navigation, route}) => {
  //getting state data from blogContext created before
  const {state} = useContext(Context);

  //find the blog using the id from all the blogs inside the state
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  //updating navigation options from inside a component (adding header icon)
  //this is for showing something inside the header
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
        <Icon name="edit" size={30} color="#900" style={{paddingRight: 10}} />
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <Text>This is show screen id {blogPost.title}</Text>
      <Text>This is show screen id {blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;
