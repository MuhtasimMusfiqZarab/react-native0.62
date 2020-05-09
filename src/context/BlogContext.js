import React, {useReducer} from 'react';

//creating context object here
const BlogContext = React.createContext();

//here is my reducer function
// here the state is the blogPosts defined inside BlogProvider
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, {title: `Blog Post #${state.length + 1}`}];

    default:
      return state;
  }
};

// BlogProvider takes another component as an argument and passes it's children to the Provider
export const BlogProvider = ({children}) => {
  // here are all the blog posts //  (reducer, initial state)
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  //helper function for adding a blogpost
  const addBlogpost = () => {
    dispatch({type: 'ADD_BLOGPOST'});
  };

  return (
    //here we are getting values to value prop to communicate with the index screen so that it can very easily dispatch an action
    <BlogContext.Provider value={{data: blogPosts, addBlogpost}}>
      {children}
    </BlogContext.Provider>
  );
};

//export the blog context object that we have created
export default BlogContext;
