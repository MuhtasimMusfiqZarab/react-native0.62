import React, {useState, useContext} from 'react';

import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

//we need context to get the state and edit the blog using the id
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation, route}) => {
  //reaching to context object
  const {state} = useContext(Context);

  //finding the blog from the state
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  //saving for the form value
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={styles.label}>Edit Title</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Edit Content</Text>
      <TextInput
        value={content}
        onChangeText={(content) => setContent(content)}
        style={styles.input}
      />

      <Button
        title="Submit"
        onPress={() => {
          //we are using 3rd argument which is a callback runs after the function  is executed
          editBlogpost(title, content, () => navigation.navigate('Home'));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //style for showing the text input
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default EditScreen;
