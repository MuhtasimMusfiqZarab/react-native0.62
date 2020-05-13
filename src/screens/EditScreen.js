import React, {useContext} from 'react';

import {StyleSheet} from 'react-native';

//we need context to get the state and edit the blog using the id
import {Context} from '../context/BlogContext';

//reusign for form component
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation, route}) => {
  const id = route.params.id;
  //reaching to context object
  const {state, editBlogpost} = useContext(Context);

  //finding the blog from the state
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogpost(id, title, content, () => navigation.navigate('Home'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
