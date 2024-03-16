import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Success, Error } from "../helpers/Alerts";
import PropTypes from "prop-types";

function MovieCard({ movie, watchlist }) {
   const navigate = useNavigate();

   const validateAddWatchlist = (movieId) => {
      return !watchlist.some((fav) => fav.id === movieId);
   };

   const addWatchlist = async (movieId) => {
      try {
         const validasi = validateAddWatchlist(movieId);
         if (!validasi) {
            throw { response: { data: { message: "You already added this to your watchlist" } } };
         }
         await axios({
            method: "post",
            url: `http://localhost:3000/watchlist/${movieId}`,
            headers: {
               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
         });
         Success("Success add to your watchlist");
         navigate("/Watchlist");
      } catch (error) {
         console.log(error);
         const message = error.response.data.message;
         Error(message);
      }
   };

   return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
         <img className="w-full" src={movie.posterUrl} alt={movie.title} />
         <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{movie.title}</div>
            <p className="text-gray-700 text-base">Genre: {movie.genre}</p>
         </div>
         <div className="px-6 py-4">
            <button onClick={() => addWatchlist(movie.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Add to Watchlist
            </button>
         </div>
      </div>
   );
}

MovieCard.propTypes = {
   movie: PropTypes.object.isRequired,
   watchlist: PropTypes.array.isRequired,
};

export default MovieCard;
