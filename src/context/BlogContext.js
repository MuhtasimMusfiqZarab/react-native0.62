import React from 'react';

//create obj for context
const BlogContext = React.createContext();

// BlogProvider takes another component as an argument and passes it's children to the Provider
export const BlogProvider = ({children}) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
