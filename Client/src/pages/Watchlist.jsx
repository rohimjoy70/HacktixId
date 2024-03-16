import { useEffect, useState } from "react";
import axios from "axios";
import { Error } from "../helpers/Alerts";
import WatchlistCard from "../components/WatchlistCard";

export default function WatchlistPage() {
   const [watchlist, setWatchlist] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const getWatchlist = async () => {
      try {
         const { data } = await axios.get("http://localhost:3000/watchlist", {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
         });
         setWatchlist(data);
         setLoading(false);
      } catch (error) {
         console.log(error);
         setError("Failed to fetch watchlist. Please try again later.");
         setLoading(false);
      }
   };

   useEffect(() => {
      getWatchlist();
   }, []);

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
