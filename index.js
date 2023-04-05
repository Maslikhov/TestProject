// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


import React from 'react';
import {AppRegistry} from 'react-native';
import { store } from './src/Redux/store'
import { Provider } from 'react-redux'
import App from './App';
import {name as appName} from './app.json';

const ReduxProvider = () => {
  return(
      // <Provider store={store}>
        <App />
      //* </Provider> 
  )
}

AppRegistry.registerComponent(appName, () => ReduxProvider);

// import React from 'react'
// import App from './App'
// import { store } from './src/Redux/store'
// import { Provider } from 'react-redux'

// const ReduxProvider = () => {
//   return(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
//   }
// AppRegistry.registerComponent(appName, () => ReduxProvider);