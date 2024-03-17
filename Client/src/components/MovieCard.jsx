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
         const isValid = validateAddWatchlist(movieId);
         if (!isValid) {
            throw new Error("You already added this movie to your watchlist");
         }
         await axios.post(
            `https://hacktixid.healtjoy.online/watchlist/${movieId}`,
            {},
            {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
               },
            }
         );
         Success("Movie added to watchlist successfully");
         navigate("/Watchlist");
      } catch (error) {
         console.log(error);
         const message = error.response ? error.response.data.message : "Failed to add movie to watchlist. Please try again later.";
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
   movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
   }).isRequired,
   watchlist: PropTypes.array.isRequired,
};

export default MovieCard;
