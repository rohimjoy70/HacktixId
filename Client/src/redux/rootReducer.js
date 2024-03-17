// rootReducer.js

import { combineReducers } from "redux";
import watchlistReducer from "./watchlistReducer";
import moviesReducer from "./reducer";

const rootReducer = combineReducers({
   watchlist: watchlistReducer,
   movies: moviesReducer,
});

export default rootReducer;
