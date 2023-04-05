import * as React from 'react';
import RootContainer from './src/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/Redux/redux-thunk/store';

function App() {
  return (
    <Provider store={ store }>
      <RootContainer/>
    </Provider>
  );
}

export default App;
