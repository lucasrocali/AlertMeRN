import React, { Component } from 'react';
import { Root } from './config/router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './redux';
import logger from 'redux-logger'

// Create Redux store
const store = createStore(
	reducer, {},
	applyMiddleware(apiMiddleware,logger)
);


store.dispatch({type: 'GET_MOVIE_DATA'});

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
