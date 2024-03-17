import axios from "axios";
import { useState, useEffect } from "react";
import { Success, Error } from "../helpers/Alerts";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
   const [movies, setMovies] = useState([]);
   const [watchlist, setWatchlist] = useState([]);
   const [loading, setLoading] = useState(true);

   const getWatchlist = async () => {
      try {
         const { data } = await axios.get("https://hacktixid.healtjoy.online/watchlist", {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
         });
         setWatchlist(data);
      } catch (error) {
         console.log(error);
         const message = error.response.data.message;
         Error(message);
      }
   };

   const getMovies = async () => {
      try {
         const { data } = await axios.get("https://hacktixid.healtjoy.online/movies", {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
         });
         setMovies(data);
         setLoading(false);
      } catch (error) {
         console.log(error);
         const message = error.response.data.message;
         Error(message);
      }
   };

   useEffect(() => {
      getWatchlist();
      getMovies();
   }, []);

   return (
      <div className="container mx-auto text-center mb-4">
         <br />
         <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
         {loading ? (
            <p>Loading...</p>
         ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} watchlist={watchlist} />
               ))}
            </div>
         )}
      </div>
   );
}
