//This need to be inported before anything is imported for navigation pyurposes
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//importing all the navigation screens
import Router from './screens/IndexScreen.js';

//import the blog provider
import {BlogProvider} from './context/BlogContext';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

// export default App;

//exporting my own custom component // here children is the app
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
