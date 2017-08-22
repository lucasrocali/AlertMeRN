import React, { Component } from 'react';
import { Root } from './config/router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './redux';

// Create Redux store
const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

class App extends Component {
  render() {
    return (
     <Provider store={store}>
     	<Root />
     </Provider>
     );
  }
}

export default App;
