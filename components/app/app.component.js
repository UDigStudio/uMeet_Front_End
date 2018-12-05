import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers';
import middleware from '../../middleware';
import Navigation from '../navigation/navigation.component';

const App = () => (
  <Provider store={createStore(reducer, middleware)}>
    <Navigation />
  </Provider>
)

export default App;