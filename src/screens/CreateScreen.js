//useContext to get the data rom the context
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
//get access to context to show or edit data
import {Context} from '../context/BlogContext';
//reusign for form component
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {
  //using context
  const {addBlogpost} = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogpost(title, content, () => navigation.navigate('Home'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
