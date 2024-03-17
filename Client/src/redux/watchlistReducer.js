// watchlistReducer.js

import {
    FETCH_WATCHLIST_REQUEST,
    FETCH_WATCHLIST_SUCCESS,
    FETCH_WATCHLIST_FAILURE
  } from "./watchlistAction";
  
  const initialState = {
    watchlist: [],
    loading: false,
    error: null
  };
  
  const watchlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WATCHLIST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_WATCHLIST_SUCCESS:
        return {
          ...state,
          loading: false,
          watchlist: action.payload,
          error: null
        };
      case FETCH_WATCHLIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default watchlistReducer;
  