//file for automation of Context creation
import createDataContext from './createDataContext';

//creating context object here
// const BlogContext = React.createContext();

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

//helper function for adding a blogpost // we need to ge dispatch function here which is available inside the provider of createData context
const addBlogpost = (dispatch) => {
  //without dispatching right away we are creating a function which will dispatch the action

  return () => {
    dispatch({type: 'ADD_BLOGPOST'});
  };
};

// putting the necessary data as argument inside createDataContext, 2nd arg is object with all the actions
export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogpost},
  [],
);
