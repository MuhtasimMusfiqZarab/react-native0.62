//useContext to get the data rom the context
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
//get access to context to show or edit data
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
  //for controlled input
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //using context
  const {addBlogpost} = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        value={content}
        onChangeText={(content) => setContent(content)}
        style={styles.input}
      />

      <Button
        title="Submit"
        onPress={() => {
          //we are using 3rd argument which is a callback runs after the function  is executed
          addBlogpost(title, content, () => navigation.navigate('Home'));
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

export default CreateScreen;
