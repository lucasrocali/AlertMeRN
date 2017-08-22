import { Platform } from 'react-native';

const API = Platform.OS === 'android'
  ? 'http://www.mocky.io/v2/599bb5ba120000a405d645ed' // works for Genymotion
  : 'http://www.mocky.io/v2/599bb5ba120000a405d645ed';

export const apiMiddleware = store => next => action => {
  // Pass all actions through by default
  console.log('FOO3');
  next(action);
  switch (action.type) {
    // In case we receive an action to send an API request
    case 'GET_MOVIE_DATA':
      console.log('FOO');
      // Dispatch GET_MOVIE_DATA_LOADING to update loading state
      store.dispatch({type: 'GET_MOVIE_DATA_LOADING'});
      // Make API call and dispatch appropriate actions when done
      fetch(`${API}`)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_MOVIE_DATA_RECEIVED',
          data
        }))
        .catch(error => next({
          type: 'GET_MOVIE_DATA_ERROR',
          error
        }));
      break;
    // Do nothing if the action does not interest us
    default:
      break;
  }
};

export const reducer = (state = { movies: [], loading: true }, action) => {
  console.log('reducer');
  console.log(action);
  console.log(action.data);
  console.log(action.type);
  switch (action.type) {
    case 'GET_MOVIE_DATA_LOADING':
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };
    case 'GET_MOVIE_DATA_RECEIVED':
      return {
        loading: false,             // set loading to false
        movies: action.data.posts, // update movies array with reponse data
      };
    case 'GET_MOVIE_DATA_ERROR':
      return state;
    default:
      return state;
    }
};