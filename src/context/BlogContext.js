import React from 'react';

//creating context object here
const BlogContext = React.createContext();

// BlogProvider takes another component as an argument and passes it's children to the Provider
export const BlogProvider = ({children}) => {
  return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>;
};

//export the blog context object that we have created
export default BlogContext;
