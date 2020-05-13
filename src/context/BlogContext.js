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
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case 'EDIT_BLOGPOST':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case 'DELETE_BLOGPOST':
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

//helper function for adding a blogpost // we need to ge dispatch function here which is available inside the provider of createData context
const addBlogpost = (dispatch) => {
  //without dispatching right away we are creating a function which will dispatch the action
  //this inner function we are running in different components

  return (title, content, callback) => {
    dispatch({type: 'ADD_BLOGPOST', payload: {title, content}});
    //after dispatch we would run the callback which will redirect us to Home page
    if (callback) {
      callback();
    }
  };
};

//this is for editing blogPost
const editBlogpost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({type: 'EDIT_BLOGPOST', payload: {id, title, content}});
    //after dispatch we would run the callback which will redirect us to Home page
    if (callback) {
      callback();
    }
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
  {addBlogpost, deleteblogPost, editBlogpost},
  [],
);
