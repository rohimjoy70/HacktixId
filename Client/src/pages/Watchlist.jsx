import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchlist } from "../redux/watchlistAction";
import { Error } from "../helpers/Alerts";
import WatchlistCard from "../components/WatchlistCard";

export default function WatchlistPage() {
   const dispatch = useDispatch();
   const { watchlist, loading, error } = useSelector((state) => state.watchlist);

   useEffect(() => {
      dispatch(fetchWatchlist());
   }, [dispatch]);

   if (loading) {
      return <div className="container mx-auto mt-8 text-center">Loading...</div>;
   }

   if (error) {
      return <Error message={error} />;
   }

   return (
      <div className="container mx-auto mt-8">
         <h2 className="text-3xl font-bold mb-8 text-center">Watchlist</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {watchlist.map((watchlistItem) => (
               <WatchlistCard key={watchlistItem.id} watchlist={watchlistItem} />
            ))}
         </div>
      </div>
   );
}
