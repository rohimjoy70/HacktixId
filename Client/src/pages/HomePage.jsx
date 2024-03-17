
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Success, Error } from '../helpers/Alerts';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const watchlist = useSelector((state) => state.watchlist);
  const loading = useSelector((state) => state.loading);

  const getWatchlist = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/watchlist', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      dispatch({ type: 'SET_WATCHLIST', payload: data });
    } catch (error) {
      console.log(error);
      const message = error.response.data.message;
      Error(message);
    }
  };

  const getMovies = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/movies', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      dispatch({ type: 'SET_MOVIES', payload: data });
    } catch (error) {
      console.log(error);
      const message = error.response.data.message;
      Error(message);
    }
  };

  const addToWatchlist = async (movieId) => {
    try {
      await axios.post(
        `http://localhost:3000/watchlist/${movieId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );
      Success('Movie added to watchlist successfully');
      // Refresh watchlist
      getWatchlist();
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
    <div className="container mx-auto">
      <br />
      <h2 className="text-3xl font-bold mb-8 text-center">Trending Now</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} watchlist={watchlist} addToWatchlist={addToWatchlist} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
