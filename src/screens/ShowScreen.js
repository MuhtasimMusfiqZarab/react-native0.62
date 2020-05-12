//useContext to get the data rom the context
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}) => {
  //getting state data from blogContext created before
  const {state} = useContext(Context);

  //find the blog using the id from all the blogs inside the state
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  return (
    <View>
      <Text>This is show screen id {blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;
