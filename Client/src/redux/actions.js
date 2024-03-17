// actions.js

import axios from 'axios';
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_WATCHLIST_REQUEST,
  FETCH_WATCHLIST_SUCCESS,
  FETCH_WATCHLIST_FAILURE
} from './actionTypes';

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    try {
      const { data } = await axios.get("https://hacktixid.healtjoy.online/movies", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
    }
  };
};

export const fetchWatchlist = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_WATCHLIST_REQUEST });
    try {
      const { data } = await axios.get("https://hacktixid.healtjoy.online/watchlist", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      dispatch({ type: FETCH_WATCHLIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_WATCHLIST_FAILURE, payload: error.message });
    }
  };
};
