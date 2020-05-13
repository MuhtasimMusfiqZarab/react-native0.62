import React, {useState, useContext} from 'react';

import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({initialValues, onSubmit}) => {
  //saving for the form value
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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

      <Button title="Submit" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

//to make sure that initial prop does not cause any issue if the value of it is undefined (when we create a blog at the first time)
//giving component some default property values (if no value is passed from other component this values will be used)
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
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

export default BlogPostForm;
