//file for automation of Context creation
import createDataContext from './createDataContext';
import {v4 as uuidv4} from 'uuid';

//creating context object here
// const BlogContext = React.createContext();

//here is my reducer function
// here the state is the blogPosts defined inside BlogProvider
//this changes the state
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];

    case 'DELETE_BLOGPOST':
      return state.filter((blogPost) => blogPost.id !== action.payload);

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

const deleteblogPost = (dispatch) => {
  //we are runnig this inner funciton to different component // this inner func is hown up inside differnet components
  //this inner function we are running in different components
  return (id) => {
    dispatch({type: 'DELETE_BLOGPOST', payload: id});
  };
};

// putting the necessary data as argument inside createDataContext, 2nd arg is object with all the actions
export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogpost, deleteblogPost},
  [],
);
