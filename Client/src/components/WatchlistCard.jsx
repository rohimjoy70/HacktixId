import { useState, useEffect } from "react";
import axios from "axios";
import { Success, Error } from "../helpers/Alerts";

const WatchlistCard = ({ watchlist }) => {
   const [movie, setMovie] = useState(null);
   const [status, setStatus] = useState("");
   const [buttonDisabled, setButtonDisabled] = useState(false);
   const { id, movieId } = watchlist;

   useEffect(() => {
      setMovie(watchlist.movie);
      setStatus(watchlist.status);
   }, [watchlist]);

   const handleWatchNow = async () => {
      try {
         await axios.patch(
            `https://hacktixid.healtjoy.online/watchlist/${id}`,
            {
               status: "watched",
            },
            {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
               },
            }
         );
         Success("Movie has been watched!");
         // Update local state to reflect the change in status
         setStatus("watched");
         // Menonaktifkan tombol setelah diklik
         setButtonDisabled(true);
      } catch (error) {
         console.log("Failed to update watchlist status:", error);
         Error(error.response.data.message);
      }
   };

   return (
      <div className="bg-white shadow-md rounded p-4">
         {movie ? (
            <>
               <img src={movie.posterUrl} alt={movie.title} className="mb-4" />
               <h5 className="text-xl font-bold mb-2">{movie.title}</h5>
               <p className="text-gray-600 mb-2">Genre: {movie.genre}</p>
               <p className="text-gray-600 mb-4">Status: {status}</p>
               {/* Tombol Watch Now */}
               <button onClick={handleWatchNow} className={`bg-blue-500 text-white py-2 px-4 rounded ${status === "watched" ? "cursor-not-allowed opacity-50" : ""}`} disabled={status === "watched" || buttonDisabled}>
                  {status === "watched" ? "Has been watched" : "Watch Now"}
               </button>
            </>
         ) : (
            <p>Loading...</p>
         )}
      </div>
   );
};

export default WatchlistCard;
