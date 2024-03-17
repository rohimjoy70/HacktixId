// reducers.js

import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_WATCHLIST_REQUEST,
  FETCH_WATCHLIST_SUCCESS,
  FETCH_WATCHLIST_FAILURE
} from './actionTypes';

const initialState = {
  movies: [],
  watchlist: [],
  loadingMovies: false,
  loadingWatchlist: false,
  errorMovies: null,
  errorWatchlist: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loadingMovies: true,
        errorMovies: null
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loadingMovies: false,
        errorMovies: null
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loadingMovies: false,
        errorMovies: action.payload
      };
    case FETCH_WATCHLIST_REQUEST:
      return {
        ...state,
        loadingWatchlist: true,
        errorWatchlist: null
      };
    case FETCH_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: action.payload,
        loadingWatchlist: false,
        errorWatchlist: null
      };
    case FETCH_WATCHLIST_FAILURE:
      return {
        ...state,
        loadingWatchlist: false,
        errorWatchlist: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
