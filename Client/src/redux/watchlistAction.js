import axios from "axios";

export const FETCH_WATCHLIST_REQUEST = "FETCH_WATCHLIST_REQUEST";
export const FETCH_WATCHLIST_SUCCESS = "FETCH_WATCHLIST_SUCCESS";
export const FETCH_WATCHLIST_FAILURE = "FETCH_WATCHLIST_FAILURE";

export const fetchWatchlistRequest = () => {
   return {
      type: FETCH_WATCHLIST_REQUEST,
   };
};

export const fetchWatchlistSuccess = (watchlist) => {
   return {
      type: FETCH_WATCHLIST_SUCCESS,
      payload: watchlist,
   };
};

export const fetchWatchlistFailure = (error) => {
   return {
      type: FETCH_WATCHLIST_FAILURE,
      payload: error,
   };
};

export const fetchWatchlist = () => {
   return (dispatch) => {
      dispatch(fetchWatchlistRequest());
      axios
         .get("https://hacktixid.healtjoy.online/watchlist", {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
         })
         .then((response) => {
            const watchlist = response.data;
            dispatch(fetchWatchlistSuccess(watchlist));
         })
         .catch((error) => {
            const errorMessage = error.message;
            dispatch(fetchWatchlistFailure(errorMessage));
         });
   };
};
