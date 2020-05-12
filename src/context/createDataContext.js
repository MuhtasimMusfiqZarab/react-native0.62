//lowercase because we will be exporting a plain function from this file
//this file will automate to create a context

import React, {useReducer} from 'react';

// passing three things that needs to eb customized while creating any context
export default (reducer, actions, initialState) => {
  //1. create the context
  const Context = React.createContext();

  //2. Setup the provider function
  const Provider = ({children}) => {
    //creating the state with useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions === {addBlogPost :(dispatch)=>{return ()=>{}}}
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch); //we need the ability to call the actions with the si\\dispatch function not available where it is called, thus we are using this
    }

    //return JSX from prodiver // any data we want to share with the rest of the application, will be available inside the value prop
    //here we are getting values to value prop to communicate with the index screen so that it can very easily dispatch an action
    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  // return the Contxt and Provider to be reused
  return {Context, Provider};
};
