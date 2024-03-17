// reducers.js

const initialState = {
    movies: [],
    watchlist: [],
    loading: true,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MOVIES':
        return {
          ...state,
          movies: action.payload,
          loading: false,
        };
      case 'SET_WATCHLIST':
        return {
          ...state,
          watchlist: action.payload,
        };
      case 'ADD_TO_WATCHLIST':
        return {
          ...state,
          watchlist: [...state.watchlist, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  