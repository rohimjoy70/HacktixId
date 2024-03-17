
import { combineReducers } from "redux";
import watchlistReducer from "./watchlistReducer";

const rootReducer = combineReducers({
  watchlist: watchlistReducer
});

export default rootReducer;
